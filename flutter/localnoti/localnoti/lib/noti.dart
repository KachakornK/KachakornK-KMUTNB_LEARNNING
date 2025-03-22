// noti.dart

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:timezone/data/latest.dart' as tz;
import 'package:timezone/timezone.dart' as tz;

class Noti {
  FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
      FlutterLocalNotificationsPlugin();

  Noti() {
    initNoti();
  }

  void initNoti() async {
    WidgetsFlutterBinding.ensureInitialized();
    flutterLocalNotificationsPlugin
        .resolvePlatformSpecificImplementation<
            AndroidFlutterLocalNotificationsPlugin>()!
        .requestExactAlarmsPermission();

    AndroidInitializationSettings androidInitializationSettings =
        AndroidInitializationSettings('@mipmap/ic_launcher');
    InitializationSettings initializationSettings =
        InitializationSettings(android: androidInitializationSettings);

    await flutterLocalNotificationsPlugin.initialize(initializationSettings);
    tz.initializeTimeZones();
  }

  Future<void> showNotification() async {
    const AndroidNotificationDetails androidNotificationDetails =
        AndroidNotificationDetails("channel ID", "channel Name",
            channelDescription: "Custom Notification",
            importance: Importance.high,
            priority: Priority.defaultPriority,
            ticker: "ticket");

    NotificationDetails platformAndroid = const NotificationDetails(
      android: androidNotificationDetails,
    );

    await flutterLocalNotificationsPlugin.show(Random().nextInt(10000), "Title",
        "Notification Shown", platformAndroid);
  }

  Future<TimeOfDay> settime(BuildContext context) async {
    TimeOfDay? time = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.now(),
    );
    return time ?? TimeOfDay.now();
  }

  Future<void> schedule(int hour, int minute) async {
    const AndroidNotificationDetails androidNotificationDetails =
        AndroidNotificationDetails(
            "channelId_002", "channelName_custom_Notification2",
            channelDescription: "Custom Notification",
            importance: Importance.high,
            priority: Priority.defaultPriority,
            ticker: "ticket");

    NotificationDetails platformAndroid = const NotificationDetails(
      android: androidNotificationDetails,
    );

    final tz.TZDateTime now = tz.TZDateTime.now(tz.local);
    DateTime scheduledDate =
        DateTime(now.year, now.month, now.day, hour, minute);

    // ตรวจสอบว่าเวลาที่ตั้งถูกต้องหรือไม่
    print('Scheduled date: $scheduledDate');

    await flutterLocalNotificationsPlugin.zonedSchedule(
      Random().nextInt(10000),
      "Scheduled Notification",
      "This is a scheduled notification",
      tz.TZDateTime.from(scheduledDate, tz.local),
      platformAndroid,
      payload: scheduledDate.toString(),
      matchDateTimeComponents: DateTimeComponents.time,
      uiLocalNotificationDateInterpretation:
          UILocalNotificationDateInterpretation.absoluteTime,
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
    );
  }

  Future<void> scheduleIn15Seconds() async {
    // ตั้งค่า notification
    const AndroidNotificationDetails androidNotificationDetails =
        AndroidNotificationDetails(
            "channelId_003", "channelName_custom_Notification3",
            channelDescription: "Custom Notification",
            importance: Importance.high,
            priority: Priority.defaultPriority,
            ticker: "ticket");

    NotificationDetails platformAndroid = const NotificationDetails(
      android: androidNotificationDetails,
    );

    // ดึงเวลาปัจจุบันจาก DateTime.now() ซึ่งจะให้เวลาในเขตเวลาท้องถิ่น
    final DateTime now = DateTime.now();
    print('เวลาปัจจุบัน: $now'); // ตรวจสอบเวลา

    // เพิ่ม 15 วินาทีจากเวลาปัจจุบัน
    final DateTime scheduledTime = now.add(Duration(seconds: 15));
    print('เวลาที่ตั้งแจ้งเตือน: $scheduledTime'); // ตรวจสอบเวลา

    // แจ้งเตือนโดยใช้เวลาใหม่ที่เพิ่ม 15 วินาที
    await flutterLocalNotificationsPlugin.zonedSchedule(
      Random().nextInt(10000),
      "แจ้งเตือนใน 15 วินาที",
      "คุณจะได้รับการแจ้งเตือนในอีก 15 วินาที",
      tz.TZDateTime.from(scheduledTime, tz.local), // แปลงเป็นเวลาในเขตท้องถิ่น
      platformAndroid,
      payload: scheduledTime.toString(),
      matchDateTimeComponents: DateTimeComponents.time,
      uiLocalNotificationDateInterpretation:
          UILocalNotificationDateInterpretation.absoluteTime,
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
    );
  }

  Future<List<PendingNotificationRequest>> listAllPending() async {
    return await flutterLocalNotificationsPlugin.pendingNotificationRequests();
  }

  void cancelAll() async {
    await flutterLocalNotificationsPlugin.cancelAll();
  }

  void cancelID(int id) async {
    await flutterLocalNotificationsPlugin.cancel(id);
  }
}
