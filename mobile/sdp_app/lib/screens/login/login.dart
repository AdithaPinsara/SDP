import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> with TickerProviderStateMixin {
  late final TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Center(
            child: Text(
              'Welcome to WildLifeApp!',
              style: TextStyle(
                color: Colors.white,
                fontSize: 24,
                fontFamily: 'Roboto',
                fontWeight: FontWeight.w700,
                height: 0.07,
              ),
            ),
          ),
          SizedBox(height: 16),
          Text(
            'Select the user type to login as.',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Color(0xFF9BAB94),
              fontSize: 13,
              fontFamily: 'Roboto',
              fontWeight: FontWeight.w600,
              height: 0.11,
            ),
          ),
          TabBar(
            controller: _tabController,
            tabs: const <Widget>[
              Tab(
                text: "Public user",
              ),
              Tab(
                text: "Beat officer",
              ),
            ],
          ),
        ],
      ),
    );
  }
}
