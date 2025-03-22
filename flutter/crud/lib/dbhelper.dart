// TODO Implement this library.
import 'dart:async';
import 'package:crud/dog.dart';
import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

class Dbhelper {
  Dbhelper._privateConstructor();
  static final Dbhelper instance = Dbhelper._privateConstructor();

  static Database? _database;

  Future<Database> get db async {
    _database ??= await initDB();
    return _database!;
  }

  Future<Database> initDB() async {
    String databasePath = await getDatabasesPath();
    String path = join(databasePath, 'dogdb.db');

    return await openDatabase(
      path,
      version: 1,
      onCreate: _onCreate,
    );
  }

  Future<void> _onCreate(Database db, int version) async {
    await db.execute(''' 
      CREATE TABLE dogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER
      )
    ''');
  }

  Future<int> insertDog(Dog dog) async {
    Database db = await instance.db;
    return await db.insert(
      'dogs',
      dog.toMap(),
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  Future<List<Dog>> queryAll() async {
    Database db = await instance.db;
    List<Map<String, dynamic>> maps = await db.query('dogs');

    return maps.map((map) => Dog.fromMap(map)).toList();
  }

  Future<int> update(Dog dog) async {
    Database db = await instance.db;
    return await db.update(
      'dogs',
      dog.toMap(),
      where: 'id = ?',
      whereArgs: [dog.id],
    );
  }

  Future<int> delete(int id) async {
    Database db = await instance.db;
    return await db.delete(
      'dogs',
      where: 'id = ?',
      whereArgs: [id],
    );
  }

  Future<void> deleteAll() async {
    Database db = await instance.db;
    await db.delete('dogs');
  }
}
