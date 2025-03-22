import 'package:crud/dbhelper.dart';
import 'package:flutter/material.dart';
import 'package:crud/mydog.dart';

void main(List<String> args) {
  WidgetsFlutterBinding.ensureInitialized();
  init();
  runApp(MyApp());
}

void init() async {
  await Dbhelper.instance.initDB();
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dogs DB Demo',
      home: Mydog(),
    );
  }
}
