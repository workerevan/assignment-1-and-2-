# Assignment 2 Part 1 - QUnit Tests

This folder contains the QUnit test files for the software verification assignment.

Files:
- `functionsToTest.js`: application functions to test.
- `test.js`: QUnit test cases for TC1 through TC18.
- `test.html`: browser page to run the QUnit tests.

How to run:
1. Open `assignment2/test.html` in a web browser.
2. The QUnit test report will display all test results.

Notes:
- The discount and coupon functions are case-insensitive for coupons such as `Hello30`.
- `createFullName` returns `-1` when either first or last name is empty.
