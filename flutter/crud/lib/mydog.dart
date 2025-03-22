import 'package:flutter/material.dart';
import 'package:crud/dbhelper.dart';
import 'package:crud/dog.dart';

class Mydog extends StatefulWidget {
  const Mydog({super.key});

  @override
  State<Mydog> createState() => _MydogState();
}

class _MydogState extends State<Mydog> {
  List<Dog> dogList = [];

  @override
  void initState() {
    super.initState();
    fetchDogs();
  }

  Future<void> fetchDogs() async {
    final List<Dog> data = await Dbhelper.instance.queryAll();
    setState(() {
      dogList = data;
    });
  }

  void showDogDialog({Dog? dog}) {
    TextEditingController dogNameController = TextEditingController();
    TextEditingController dogAgeController = TextEditingController();

    if (dog != null) {
      dogNameController.text = dog.name;
      dogAgeController.text = dog.age.toString();
    }

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(dog == null ? "Add Dog" : "Edit Dog"),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: dogNameController,
                decoration: InputDecoration(labelText: 'Enter Dog Name:'),
              ),
              TextField(
                controller: dogAgeController,
                decoration: InputDecoration(labelText: 'Enter Dog Age:'),
                keyboardType: TextInputType.number,
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text("Cancel"),
            ),
            TextButton(
              onPressed: () async {
                final newDog = Dog(
                  name: dogNameController.text,
                  age: int.tryParse(dogAgeController.text) ?? 0,
                  id: dog?.id, // ID จะไม่ถูกเปลี่ยนเมื่อแก้ไข
                );

                if (dog == null) {
                  await Dbhelper.instance.insertDog(newDog);
                } else {
                  await Dbhelper.instance.update(newDog);
                }

                fetchDogs();
                Navigator.pop(context);
              },
              child: Text("Save"),
            ),
          ],
        );
      },
    );
  }

  void deleteDog(int id) async {
    await Dbhelper.instance.delete(id);
    fetchDogs();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Dog CRUD"),
        actions: [
          IconButton(
            icon: Icon(Icons.add),
            onPressed: () => showDogDialog(),
          ),
        ],
      ),
      body: dogList.isEmpty
          ? Center(child: Text("No dogs available"))
          : ListView.builder(
              itemCount: dogList.length,
              itemBuilder: (context, index) {
                final dog = dogList[index];
                return Card(
                  margin: EdgeInsets.all(8.0),
                  elevation: 4,
                  child: ListTile(
                    leading: CircleAvatar(child: Text(dog.id.toString())),
                    title: Text(dog.name,
                        style: TextStyle(fontWeight: FontWeight.bold)),
                    subtitle: Text("Age: ${dog.age}"),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit, color: Colors.blue),
                          onPressed: () => showDogDialog(dog: dog),
                        ),
                        IconButton(
                          icon: Icon(Icons.delete, color: Colors.red),
                          onPressed: () {
                            if (dog.id != null) {
                              deleteDog(dog.id!);
                            }
                          },
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
    );
  }
}
