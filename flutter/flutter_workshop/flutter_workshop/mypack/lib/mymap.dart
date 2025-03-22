import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:webview_flutter/webview_flutter.dart';

class Mymap extends StatefulWidget {
  const Mymap({super.key});

  @override
  State<Mymap> createState() => _MymapState();
}

class _MymapState extends State<Mymap> {
  late final WebViewController controller;
  var loadingPercenttage = 0;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    controller = WebViewController()
      ..setNavigationDelegate(NavigationDelegate(
        onPageStarted: (url) {
          setState(() => loadingPercenttage = 0);
        },
        onProgress: (progress) {
          setState(() => loadingPercenttage = progress);
        },
        onPageFinished: (url) {
          setState(() => loadingPercenttage = 100);
        },
      ))
      //..loadRequest(Uri.parse("https://flutter.dev"))
      ..loadFlutterAsset('assets/map.html')
      ..setJavaScriptMode(JavaScriptMode.unrestricted);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("WebVeiw Example"),
        ),
        body: Stack(
          children: [
            WebViewWidget(controller: controller),
            if (loadingPercenttage < 100)
              Column(
                children: [
                  Text("Loading : $loadingPercenttage"),
                  LinearProgressIndicator(
                    value: loadingPercenttage / 100.0,
                  )
                ],
              )
          ],
        ));
  }
}
