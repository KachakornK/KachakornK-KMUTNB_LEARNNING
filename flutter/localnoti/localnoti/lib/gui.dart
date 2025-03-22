// gui.dart

import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'noti.dart';

class Gui extends StatefulWidget {
  final String title;
  const Gui({super.key, required this.title});

  @override
  State<Gui> createState() => _GuiState();
}

class _GuiState extends State<Gui> {
  Noti noti = Noti();
  List<PendingNotificationRequest> pendingNotifications = [];

  @override
  void initState() {
    super.initState();
    noti.initNoti();
    loadPendingNotifications();
  }

  void loadPendingNotifications() async {
    List<PendingNotificationRequest> notifications =
        await noti.listAllPending();
    setState(() {
      pendingNotifications = notifications;
    });
  }

  void deleteNotification(int id) async {
    noti.cancelID(id);
    loadPendingNotifications();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          children: [
            Text("Noti demo"),
            ElevatedButton(
                onPressed: () {
                  noti.showNotification();
                  loadPendingNotifications();
                },
                style: ElevatedButton.styleFrom(
                    backgroundColor: const Color.fromARGB(255, 190, 102, 231),
                    minimumSize: Size(double.infinity, 50),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    )),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.notifications, color: Colors.white, size: 20),
                    Text("Show Notification",
                        style: TextStyle(color: Colors.white)),
                    SizedBox(width: 2),
                  ],
                )),
            SizedBox(height: 5),
            ElevatedButton(
              onPressed: () async {
                TimeOfDay time = await noti.settime(context);
                noti.schedule(time.hour, time.minute);
                loadPendingNotifications();
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color.fromARGB(255, 190, 102, 231),
                minimumSize: Size(double.infinity, 50),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.access_time, color: Colors.white, size: 20),
                  SizedBox(width: 8),
                  Text("SetTime", style: TextStyle(color: Colors.white)),
                ],
              ),
            ),
            SizedBox(height: 5),
            ElevatedButton(
              onPressed: () {
                noti.scheduleIn15Seconds(); // เรียกฟังก์ชันแจ้งเตือนในอีก 15 วินาที
                loadPendingNotifications(); // โหลดรายการแจ้งเตือนที่รอ
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color.fromARGB(255, 190, 102, 231),
                minimumSize: Size(double.infinity, 50),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.timer, color: Colors.white, size: 20),
                  SizedBox(width: 8),
                  Text("แจ้งเตือนในอีก 15 วินาที",
                      style: TextStyle(color: Colors.white)),
                ],
              ),
            ),
            SizedBox(height: 5),
            ElevatedButton(
              onPressed: () {
                noti.listAllPending();
                loadPendingNotifications();
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color.fromARGB(255, 190, 102, 231),
                minimumSize: Size(double.infinity, 50),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              child: Text("Show All pendingList",
                  style: TextStyle(color: Colors.white)),
            ),
            Expanded(
              child: Column(
                children: [
                  Expanded(
                    child: Column(
                      children: [
                        Expanded(
                          child: ListView.builder(
                            itemCount: pendingNotifications.length,
                            itemBuilder: (context, index) {
                              final notification = pendingNotifications[index];

                              // แปลง payload เป็น DateTime และใช้เวลาในรูปแบบ Local
                              DateTime scheduledTime = DateTime.parse(
                                  notification.payload ??
                                      DateTime.now().toString());
                              String formattedTime =
                                  "${scheduledTime.hour}:${scheduledTime.minute}";

                              return ListTile(
                                title: Text(
                                    'ID: ${notification.id} - ${notification.title ?? "No Title"}'),
                                subtitle: Text('ตั้งเตือนเวลา: $formattedTime'),
                                trailing: IconButton(
                                  icon: Icon(Icons.delete, color: Colors.red),
                                  onPressed: () {
                                    deleteNotification(notification.id);
                                  },
                                ),
                              );
                            },
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
