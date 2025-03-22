import 'dart:io';

import 'package:barcode_scan2/barcode_scan2.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:image_picker/image_picker.dart';
import 'package:workshop/mymap.dart';

class MyCamera extends StatefulWidget {
  const MyCamera({super.key});

  @override
  State<MyCamera> createState() => _MyCameraState();
}

class _MyCameraState extends State<MyCamera> {
  final ImagePicker _picker = ImagePicker();
  XFile? image;
  String result = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Camera Tester"),
      ),
      body: Center(
        child: Column(
          children: [
            TextButton(
              onPressed: () {
                capture();
              },
              child: Text("Capture"),
            ),
            ElevatedButton(
              onPressed: () => gotoMap(),
              child: Text("Goto Map"),
            ),
            ElevatedButton(
              onPressed: () => seleteimg(),
              child: Text("Gallery"),
            ),
            ElevatedButton(
                onPressed: () {
                  _scanQr();
                },
                child: Text("QRScan")),
            ElevatedButton(
                onPressed: () => openCamera(), child: Text("Open Camera")),
            const SizedBox(
              height: 20,
            ),
            image == null
                ? const Text("Image Here")
                : Image.file(
                    File(image!.path),
                    width: 250,
                  ),
            Text("Result : " + result),
          ],
        ),
      ),
    );
  }

  void gotoMap() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => const Mymap()));
  }

  void openCamera() async {
    final XFile? selectImage =
        await _picker.pickImage(source: ImageSource.camera);
    print(selectImage!.path);
    setState(() {
      image = selectImage;
    });
  }

  void capture() async {
    final XFile? selectImage =
        await _picker.pickImage(source: ImageSource.camera);
    print(selectImage!.path);
    setState(() {
      image = selectImage;
    });
  }

  void seleteimg() async {
    print("Select Image");

    final XFile? selectedImage =
        await _picker.pickImage(source: ImageSource.gallery);

    if (selectedImage == null) {
      print("User canceled image selection");
      return; // ออกจากฟังก์ชันถ้าผู้ใช้กดยกเลิก
    }

    print(selectedImage.path);

    setState(() {
      image = selectedImage;
    });
  }

  Future _scanQr() async {
    try {
      ScanResult qrResult = await BarcodeScanner.scan();
      setState(() {
        result = qrResult.rawContent;
      });
    } catch (e) {
      setState(() {
        result = "Unknow an Error $e";
      });
    }
  }
}
