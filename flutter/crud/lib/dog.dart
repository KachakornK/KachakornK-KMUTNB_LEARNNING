class Dog {
  int? id;
  String name;
  int age;

  Dog({this.id, required this.name, required this.age});

  factory Dog.fromMap(Map<String, dynamic> map) {
    return Dog(
      id: map['id'],
      name: map['name'],
      age: map['age'],
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'age': age,
    };
  }
}
