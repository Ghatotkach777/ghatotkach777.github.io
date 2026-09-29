/* PL/SQL Code Library — all data is local, no network needed. */
const PN = {
  1: "Basic PL/SQL", 2: "IF / ELSE", 3: "IF / ELSE with Multiple Conditions", 4: "CASE Statement",
  5: "Basics of PL/SQL with Tables", 6: "Cursor / Parameterized Cursor", 7: "Procedure", 8: "Function"
};
const DATA = [];
function E(n, t, q, c, blocks, note, flag) {
  DATA.push({ n, p: +n[0], t, q, c, blocks: blocks.map(b => Array.isArray(b) ? { l: b[0], code: b[1].trim() } : { l: "", code: b.trim() }), note: note || "", flag: flag || "" });
}

/* ---------- PRACTICAL 1 ---------- */
E("1.1", "Addition of Two Numbers", "Write a PL/SQL program to add two numbers and display the result.", "Sequential statements; variables; arithmetic operator", [`
DECLARE
 a NUMBER := &a;
 b NUMBER := &b;
 s NUMBER;
BEGIN
 s := a + b;
 DBMS_OUTPUT.PUT_LINE('Addition = ' || s);
END;
/`]);
E("1.2", "Area of Triangle", "Write a PL/SQL program to calculate and display the area of a triangle.", "Variables; arithmetic expression", [`
DECLARE
 base NUMBER := &base;
 height NUMBER := &height;
 area NUMBER;
BEGIN
 area := 0.5 * base * height;
 DBMS_OUTPUT.PUT_LINE('Area of Triangle = ' || area);
END;
/`]);
E("1.3", "Area and Circumference of Circle", "Write a PL/SQL program to calculate and display the area and circumference of a circle.", "Variables; arithmetic expression", [`
DECLARE
 r NUMBER := &r;
 area NUMBER;
 circumference NUMBER;
BEGIN
 area := 3.14 * r * r;
 circumference := 2 * 3.14 * r;
 DBMS_OUTPUT.PUT_LINE('Area = ' || area);
 DBMS_OUTPUT.PUT_LINE('Circumference = ' || circumference);
END;
/`]);
E("1.4", "Sum of Squares of Two Numbers", "Write a PL/SQL program to calculate and display the sum of squares of two numbers.", "Arithmetic expression", [`
DECLARE
 a NUMBER := &a;
 b NUMBER := &b;
 s NUMBER;
BEGIN
 s := a * a + b * b;
 DBMS_OUTPUT.PUT_LINE('Sum of Square = ' || s);
END;
/`]);
E("1.5", "Volume of Cube", "Write a PL/SQL program to calculate and display the volume of a cube.", "Arithmetic expression", [`
DECLARE
 side NUMBER := &side;
 volume NUMBER;
BEGIN
 volume := side * side * side;
 DBMS_OUTPUT.PUT_LINE('Volume of Cube = ' || volume);
END;
/`]);
E("1.6", "Area of Rectangle", "Write a PL/SQL program to calculate and display the area of a rectangle.", "Arithmetic expression", [`
DECLARE
 l NUMBER := &l;
 b NUMBER := &b;
 area NUMBER;
BEGIN
 area := l * b;
 DBMS_OUTPUT.PUT_LINE('Area of Rectangle = ' || area);
END;
/`]);
E("1.7", "Average of Three Numbers", "Write a PL/SQL program to calculate and display the average of three numbers.", "Arithmetic expression", [`
DECLARE
 a NUMBER := &a;
 b NUMBER := &b;
 c NUMBER := &c;
 avg NUMBER;
BEGIN
 avg := (a + b + c) / 3;
 DBMS_OUTPUT.PUT_LINE('Average = ' || avg);
END;
/`]);
E("1.8", "Simple Interest", "Write a PL/SQL program to calculate and display simple interest.", "Arithmetic expression", [`
DECLARE
 p NUMBER := &p;
 n NUMBER := &n;
 r NUMBER := &r;
 si NUMBER;
BEGIN
 si := (p * n * r) / 100;
 DBMS_OUTPUT.PUT_LINE('Simple Interest = ' || si);
END;
/`]);
E("1.9", "Display Name and Address", "Write a PL/SQL program to display your name and address.", "Variables; DBMS_OUTPUT.PUT_LINE", [`
DECLARE
 name VARCHAR2(50) := '&name';
 address VARCHAR2(100) := '&address';
BEGIN
 DBMS_OUTPUT.PUT_LINE('Name = ' || name);
 DBMS_OUTPUT.PUT_LINE('Address = ' || address);
END;
/`]);

/* ---------- PRACTICAL 2 ---------- */
E("2.1", "Check Whether a Number is Even", "Write a PL/SQL program to check whether a given number is even.", "IF statement; MOD operator", [`
DECLARE
 num NUMBER := &num;
BEGIN
 IF MOD(num, 2) = 0 THEN
 DBMS_OUTPUT.PUT_LINE('Number is even');
 ELSE
 DBMS_OUTPUT.PUT_LINE('Number is odd');
 END IF;
END;
/`]);
E("2.2", "Age-Based Discount", "Write a PL/SQL program to check whether a person is eligible for a 50% discount based on age.", "IF; OR operator", [`
DECLARE
 age NUMBER := &age;
BEGIN
 IF age <= 7 OR age >= 60 THEN
 DBMS_OUTPUT.PUT_LINE('You will get 50% Discount');
 ELSE
 DBMS_OUTPUT.PUT_LINE('No Discount');
 END IF;
END;
/`]);
E("2.3", "Search for a Substring", "Write a PL/SQL program to check whether a specified substring exists in a given string.", "IF; LIKE operator", [`
DECLARE
 main_string VARCHAR2(200) := '&main_string';
 sub_string VARCHAR2(50) := '&sub_string';
BEGIN
 IF main_string LIKE '%' || sub_string || '%' THEN
 DBMS_OUTPUT.PUT_LINE('Substring found');
 ELSE
 DBMS_OUTPUT.PUT_LINE('Substring not found');
 END IF;
END;
/`]);
E("2.4", "Divisibility by 5", "Write a PL/SQL program to check whether a given number is divisible by 5.", "IF; MOD operator", [`
DECLARE
 num NUMBER := &num;
BEGIN
 IF MOD(num, 5) = 0 THEN
 DBMS_OUTPUT.PUT_LINE('Number is divisible by 5');
 ELSE
 DBMS_OUTPUT.PUT_LINE('Number is not divisible by 5');
 END IF;
END;
/`]);
E("2.5", "Loan Eligibility", "Write a PL/SQL program to check whether a person is eligible for a loan based on the condition given in the supplied material.", "IF statement", [`
DECLARE
 amount NUMBER := &amount;
BEGIN
 IF amount >= 100000 THEN
 DBMS_OUTPUT.PUT_LINE('You are eligible for loan');
 ELSE
 DBMS_OUTPUT.PUT_LINE('You are not eligible for loan');
 END IF;
END;
/`]);

/* ---------- PRACTICAL 3 ---------- */
E("3.1", "Age Classification (Minor / Adult / Senior Citizen)", "Write a PL/SQL program to classify a person as Minor, Adult, or Senior Citizen based on age.", "Nested IF / ELSIF logic", [`
DECLARE
 age NUMBER := &age;
BEGIN
 IF age <= 18 THEN
 DBMS_OUTPUT.PUT_LINE('They are minor');
 ELSIF age < 60 THEN
 DBMS_OUTPUT.PUT_LINE('They are adult');
 ELSE
 DBMS_OUTPUT.PUT_LINE('They are senior citizen');
 END IF;
END;
/`], "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: The original nested IF structure was simplified to ELSIF; the meaning is unchanged. The source had overlapping checks at age 18; this version removes the overlap while keeping the supplied boundary age <= 18.");
E("3.2", "Grade Based on Marks", "Write a PL/SQL program to assign a grade A, B, C, D or F based on marks using the conditions in the supplied material.", "IF / ELSIF / ELSE", [`
DECLARE
 marks NUMBER := &marks;
BEGIN
 IF marks >= 90 THEN
 DBMS_OUTPUT.PUT_LINE('Grade is A');
 ELSIF marks >= 80 THEN
 DBMS_OUTPUT.PUT_LINE('Grade is B');
 ELSIF marks >= 70 THEN
 DBMS_OUTPUT.PUT_LINE('Grade is C');
 ELSIF marks >= 60 THEN
 DBMS_OUTPUT.PUT_LINE('Grade is D');
 ELSE
 DBMS_OUTPUT.PUT_LINE('Grade is F');
 END IF;
END;
/`]);
E("3.3", "Type of Triangle (Equilateral / Isosceles / Scalene)", "Write a PL/SQL program to determine whether a triangle is Equilateral, Isosceles or Scalene based on its sides.", "IF; AND / OR operators", [`
DECLARE
 side1 NUMBER := &side1;
 side2 NUMBER := &side2;
 side3 NUMBER := &side3;
BEGIN
 IF side1 = side2 AND side2 = side3 THEN
 DBMS_OUTPUT.PUT_LINE('Triangle is Equilateral');
 ELSIF side1 = side2 OR side2 = side3 OR side1 = side3 THEN
 DBMS_OUTPUT.PUT_LINE('Triangle is Isosceles');
 ELSE
 DBMS_OUTPUT.PUT_LINE('Triangle is Scalene');
 END IF;
END;
/`]);
E("3.4", "Discount Based on Age and Purchase Amount", "Write a PL/SQL program to calculate/apply the discount based on age and purchase amount using the conditions in the supplied material.", "IF / ELSIF; AND operator", [`
DECLARE
 age NUMBER := &age;
 amount NUMBER := &amount;
BEGIN
 IF age >= 65 AND amount >= 1000 THEN
 DBMS_OUTPUT.PUT_LINE('15% Discount');
 ELSIF age >= 65 THEN
 DBMS_OUTPUT.PUT_LINE('10% Discount');
 ELSIF amount >= 1000 THEN
 DBMS_OUTPUT.PUT_LINE('5% Discount');
 ELSE
 DBMS_OUTPUT.PUT_LINE('No Discount');
 END IF;
END;
/`], "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: Only the variable name in the clearly mistyped third condition was corrected. The source had a typo: the third condition checked age >= 1000; it is corrected to amount >= 1000 because the question is based on age and purchase amount.");
E("3.5", "Leap Year", "Write a PL/SQL program to check whether a given year is a leap year or not.", "IF; MOD operator; AND / OR", [`
DECLARE
 year NUMBER := &year;
BEGIN
 IF MOD(year, 400) = 0 OR
 (MOD(year, 4) = 0 AND MOD(year, 100) <> 0) THEN
 DBMS_OUTPUT.PUT_LINE('Leap Year');
 ELSE
 DBMS_OUTPUT.PUT_LINE('Not a Leap Year');
 END IF;
END;
/`]);

/* ---------- PRACTICAL 4 ---------- */
E("4.1", "Bonus Based on Rating (CASE)", "Write a PL/SQL program to calculate the bonus based on rating using CASE.", "CASE statement; simple CASE", [`
DECLARE
 rating NUMBER := &rating;
 salary NUMBER := &salary;
 bonus NUMBER;
BEGIN
 CASE rating
 WHEN 1 THEN bonus := salary * 20 / 100;
 WHEN 2 THEN bonus := salary * 15 / 100;
 WHEN 3 THEN bonus := salary * 10 / 100;
 WHEN 4 THEN bonus := salary * 5 / 100;
 ELSE
 DBMS_OUTPUT.PUT_LINE('No Bonus');
 RETURN;
 END CASE;
 DBMS_OUTPUT.PUT_LINE('Bonus = ' || bonus);
END;
/`]);
E("4.2", "Electricity Amount Based on Consumer Type", "Write a PL/SQL program to calculate the electricity amount based on consumer type using CASE.", "CASE; arithmetic expression", [`
DECLARE
 consumer CHAR(1) := '&consumer';
 meter_reading NUMBER := &meter_reading;
 amount NUMBER;
BEGIN
 CASE consumer
 WHEN 'R' THEN amount := meter_reading * 2;
 WHEN 'C' THEN amount := meter_reading * 5;
 WHEN 'I' THEN amount := meter_reading * 4;
 ELSE
 DBMS_OUTPUT.PUT_LINE('Invalid consumer type');
 RETURN;
 END CASE;
 DBMS_OUTPUT.PUT_LINE('Amount payable = ' || amount);
END;
/`]);
E("4.3", "Calculator Using CASE", "Write a PL/SQL program to perform arithmetic operations using CASE.", "CASE; arithmetic operators", [`
DECLARE
 num1 NUMBER := &num1;
 num2 NUMBER := &num2;
 choice CHAR(1) := '&choice';
 result NUMBER;
BEGIN
 CASE choice
 WHEN '+' THEN result := num1 + num2;
 WHEN '-' THEN result := num1 - num2;
 WHEN '*' THEN result := num1 * num2;
 WHEN '/' THEN result := num1 / num2;
 ELSE
 DBMS_OUTPUT.PUT_LINE('Invalid choice');
 RETURN;
 END CASE;
 DBMS_OUTPUT.PUT_LINE('Result = ' || result);
END;
/`]);
E("4.4", "Product Classification Based on Price", "Write a PL/SQL program to classify a product as Budget, Standard or Premium using CASE.", "Searched CASE; BETWEEN", [`
DECLARE
 price NUMBER := &price;
BEGIN
 CASE
 WHEN price < 100 THEN
 DBMS_OUTPUT.PUT_LINE('Budget product');
 WHEN price BETWEEN 100 AND 500 THEN
 DBMS_OUTPUT.PUT_LINE('Standard product');
 WHEN price > 500 THEN
 DBMS_OUTPUT.PUT_LINE('Premium product');
 ELSE
 DBMS_OUTPUT.PUT_LINE('Invalid product');
 END CASE;
END;
/`]);
E("4.5", "Tax Percentage Based on Income", "Write a PL/SQL program to determine the applicable tax percentage based on income using CASE.", "Searched CASE; BETWEEN", [`
DECLARE
 income NUMBER := &income;
BEGIN
 CASE
 WHEN income < 300000 THEN
 DBMS_OUTPUT.PUT_LINE('No Tax');
 WHEN income BETWEEN 300000 AND 700000 THEN
 DBMS_OUTPUT.PUT_LINE('10% Tax');
 WHEN income BETWEEN 700001 AND 1200000 THEN
 DBMS_OUTPUT.PUT_LINE('20% Tax');
 ELSE
 DBMS_OUTPUT.PUT_LINE('30% Tax');
 END CASE;
END;
/`], "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: Cleaned boundary only: 700000 belongs to the first taxed band; the next band starts at 700001. The source ranges overlap at 700000; this version keeps the intended progression without overlap.");
E("4.6", "Student Classification Based on Marks", "Write a PL/SQL program to classify a student as Outstanding, Distinction, First Class or Fail using CASE.", "Searched CASE; BETWEEN", [`
DECLARE
 marks NUMBER := &marks;
BEGIN
 CASE
 WHEN marks BETWEEN 90 AND 100 THEN
 DBMS_OUTPUT.PUT_LINE('Outstanding');
 WHEN marks BETWEEN 75 AND 89 THEN
 DBMS_OUTPUT.PUT_LINE('Distinction');
 WHEN marks BETWEEN 60 AND 74 THEN
 DBMS_OUTPUT.PUT_LINE('First Class');
 ELSE
 DBMS_OUTPUT.PUT_LINE('Fail');
 END CASE;
END;
/`]);

/* ---------- PRACTICAL 5 ---------- */
E("5.1", "Search Programmer", "Write a PL/SQL program to search for a programmer and display all the information of the programmer.", "%TYPE; %ROWTYPE; SELECT INTO; PROGRAMMER table", [`
DECLARE
 v_name PROGRAMMER.NAME%TYPE := '&name';
 info PROGRAMMER%ROWTYPE;
BEGIN
 SELECT * INTO info
 FROM PROGRAMMER
 WHERE NAME = v_name;
 DBMS_OUTPUT.PUT_LINE('NAME = ' || info.NAME);
 DBMS_OUTPUT.PUT_LINE('DOB = ' || info.DOB);
 DBMS_OUTPUT.PUT_LINE('DOJ = ' || info.DOJ);
 DBMS_OUTPUT.PUT_LINE('SEX = ' || info.SEX);
 DBMS_OUTPUT.PUT_LINE('PROF1 = ' || info.PROF1);
 DBMS_OUTPUT.PUT_LINE('PROF2 = ' || info.PROF2);
 DBMS_OUTPUT.PUT_LINE('SALARY = ' || info.SALARY);
END;
/`]);
E("5.2", "Programmer Knowing a Specific Language", "Write a PL/SQL program to find the programmer who knows the programming language specified by the user.", "Parameterized cursor; FOR loop; PROGRAMMER table", [`
DECLARE
 CURSOR lang_search (p_lang VARCHAR2) IS
 SELECT NAME
 FROM PROGRAMMER
 WHERE PROF1 = p_lang OR PROF2 = p_lang;
BEGIN
 FOR r IN lang_search('&LANG')
 LOOP
 DBMS_OUTPUT.PUT_LINE(r.NAME);
 END LOOP;
END;
/`]);
E("5.3", "Search Employee by EmpNo (Name, Salary, Department)", "Write a PL/SQL program to search for an employee using EmpNo and display Employee Name, Salary and Department Name.", "%TYPE; SELECT INTO; table join; EMP DEPT", [`
DECLARE
 emp_no EMP.EMPNO%TYPE := &EMPNO;
 emp_name EMP.ENAME%TYPE;
 salary EMP.SAL%TYPE;
 dept_name DEPT.DNAME%TYPE;
BEGIN
 SELECT E.ENAME, E.SAL, D.DNAME
 INTO emp_name, salary, dept_name
 FROM EMP E, DEPT D
 WHERE E.EMPNO = emp_no
 AND E.DEPTNO = D.DEPTNO;
 DBMS_OUTPUT.PUT_LINE('Name = ' || emp_name);
 DBMS_OUTPUT.PUT_LINE('Salary = ' || salary);
 DBMS_OUTPUT.PUT_LINE('Department = ' || dept_name);
END;
/`]);
E("5.4", "Increase Employee Salary by 15% or 5% Based on Joining Date", "Write a PL/SQL program to increase an employee salary by 15% if Date of Joining is before the specified date, otherwise by 5%.", "%ROWTYPE; IF; UPDATE; EMP HIREDATE", [`
DECLARE
 e EMP.EMPNO%TYPE := &EMPNO;
 d EMP.HIREDATE%TYPE := '&HIREDATE';
 info EMP%ROWTYPE;
BEGIN
 SELECT * INTO info
 FROM EMP
 WHERE EMPNO = e;
 IF info.HIREDATE < d THEN
 UPDATE EMP
 SET SAL = SAL + (SAL * 0.15)
 WHERE EMPNO = e;
 ELSE
 UPDATE EMP
 SET SAL = SAL + (SAL * 0.05)
 WHERE EMPNO = e;
 END IF;
 DBMS_OUTPUT.PUT_LINE('Salary updated.');
END;
/`], "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: The supplied code missed INTO in SELECT and contained spelling errors such as WEHER. Those are corrected without changing the question. The exact comparison date is not specified in the material; the program therefore accepts it as input.");
E("5.5", "Place Table – Type of Place by Number of Seats", "Create a PLACE table with Room_Id, Building, No_of_Seats and Description. Comment on the type of place for a given Room_Id based on No_of_Seats.", "CREATE TABLE; %ROWTYPE; conditional classification; PLACE table", [
  ["Step 1 – Create table", `
CREATE TABLE PLACE (
 ROOM_ID NUMBER,
 BUILDING NUMBER,
 NO_OF_SEATS NUMBER,
 DESCRIPTION VARCHAR2(50)
);`],
  ["Step 2 – PL/SQL block (classification logic pattern)", `
DECLARE
 room_no NUMBER := &ROOM_ID;
 info PLACE%ROWTYPE;
BEGIN
 SELECT * INTO info
 FROM PLACE
 WHERE ROOM_ID = room_no;
 -- Insert the exact college seat conditions here.
 -- The supplied source does not establish all thresholds.
 DBMS_OUTPUT.PUT_LINE('Room seats = ' || info.NO_OF_SEATS);
END;
/`]],
  "INCOMPLETE / CORRUPTED SOURCE: The source contains corrupted conditions and table references (ROOM vs PLACE), so no threshold has been invented. Categories named in the source: Fairly Small, A Little Bigger, Lots Of Room. Exact seat cut-offs are NOT specified reliably in the provided material. Do not memorize a made-up seat range for this question. Get the exact threshold from your class material.", "inc");
E("5.6", "Supplier Table Using WHILE Loop", "Create a SUPPLIER table with Supplier_Id, Supplier_Name and Address, then insert the required values using a WHILE loop.", "CREATE TABLE; WHILE loop; INSERT; SUPPLIER table", [
  ["Step 1 – Create table", `
CREATE TABLE SUPPLIER (
 SUPP_ID NUMBER,
 SUPP_NAME VARCHAR2(50),
 SUPP_ADD VARCHAR2(100)
);`],
  ["Step 2 – Insert rows with WHILE loop", `
DECLARE
 n NUMBER := &N;
 i NUMBER := 1;
BEGIN
 WHILE i <= n LOOP
 INSERT INTO SUPPLIER
 VALUES (&SUPP_ID, '&SUPP_NAME', '&ADDRESS');
 i := i + 1;
 END LOOP;
END;
/`]],
  "The supplied source does not specify the number of rows or their values, so they are taken as input.");
const LECT_TABLE = `
CREATE TABLE LECTURER (
 NAME VARCHAR2(30),
 MAJOR_SUBJECT VARCHAR2(50)
);`;
E("5.7", "Lecturer and Course Name Using CASE", "Create a LECTURER table containing Name and MajorSubject and display the appropriate Course Name for the specified Lecturer using CASE WHEN.", "CREATE TABLE; SELECT INTO; CASE WHEN; LECTURER table", [
  ["Step 1 – Create table", LECT_TABLE],
  ["Step 2 – PL/SQL block", `
DECLARE
 lec_name LECTURER.NAME%TYPE := '&NAME';
 major LECTURER.MAJOR_SUBJECT%TYPE;
 course_name VARCHAR2(40);
BEGIN
 SELECT MAJOR_SUBJECT INTO major
 FROM LECTURER
 WHERE NAME = lec_name;
 course_name := CASE major
 WHEN 'ADV_JAVA' THEN 'JAVA'
 WHEN 'C++' THEN 'IT'
 WHEN 'OS' THEN 'COM_SCI'
 WHEN 'VB' THEN 'PROGRAMING IN .NET'
 WHEN 'C' THEN 'PROGRAMING LANGUAGES'
 WHEN 'CHEMISTRY' THEN 'BSC'
 ELSE 'NOT A VALID COURSE'
 END;
 DBMS_OUTPUT.PUT_LINE('COURSE NAME = ' || course_name);
END;
/`]],
  "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: The source incorrectly refers to a LEC_ID column even though the table definition lists only Name and MajorSubject. This version uses Name, matching the stated table structure.");
E("5.8", "Lecturer and Course Name Using CASE – DUPLICATE of 5.7", "Create a LECTURER table containing Name and MajorSubject and display the appropriate Course Name for the specified Lecturer using CASE WHEN.", "CASE; duplicate of Question 5.7", [`
-- DUPLICATE OF QUESTION 5.7
-- Study Question 5.7 only.`],
  "DUPLICATE: The supplied material repeats the same Lecturer/CASE question as 5.7. Study 5.7 once. Do not learn this as a second program.", "dup");

/* ---------- PRACTICAL 6 ---------- */
E("6.1", "Total Number of Records in Software Table", "Write a PL/SQL program using a cursor with a FOR loop to find the total number of records in the SOFTWARE table.", "Cursor FOR loop; counter; SOFTWARE table", [`
DECLARE
 c NUMBER := 0;
 CURSOR cur IS
 SELECT NAME FROM SOFTWARE;
BEGIN
 FOR r IN cur LOOP
 c := c + 1;
 END LOOP;
 DBMS_OUTPUT.PUT_LINE('Total records = ' || c);
END;
/`]);
E("6.2", "Programmer Knowing a Specified Language (Parameterized Cursor)", "Write a PL/SQL program using a parameterized cursor to find the programmer who knows the programming language specified by the user.", "Parameterized cursor; OR; FOR loop; PROGRAMMER table", [`
DECLARE
 CURSOR c1 (p_lang VARCHAR2) IS
 SELECT NAME
 FROM PROGRAMMER
 WHERE PROF1 = p_lang OR PROF2 = p_lang;
BEGIN
 FOR r IN c1('&LANG') LOOP
 DBMS_OUTPUT.PUT_LINE(r.NAME);
 END LOOP;
END;
/`]);
E("6.3", "Students Who Completed a Specified Course", "Write a PL/SQL program using a cursor to display students who have completed the course specified by the user.", "Explicit cursor; OPEN FETCH CLOSE; %NOTFOUND; STUDIES table", [`
DECLARE
 crs STUDIES.COURSE%TYPE := '&COURSE';
 student_name STUDIES.NAME%TYPE;
 CURSOR c1 IS
 SELECT NAME FROM STUDIES WHERE COURSE = crs;
BEGIN
 OPEN c1;
 LOOP
 FETCH c1 INTO student_name;
 EXIT WHEN c1%NOTFOUND;
 DBMS_OUTPUT.PUT_LINE(student_name);
 END LOOP;
 CLOSE c1;
END;
/`]);
E("6.4", "Total Students Enrolled for Each Course", "Write a PL/SQL program using a cursor to display the total number of students enrolled for each course.", "Nested cursors; parameterized cursor; FOR loop; DISTINCT; STUDIES table", [`
DECLARE
 total NUMBER;
 CURSOR c1 IS
 SELECT DISTINCT COURSE FROM STUDIES;
 CURSOR c2 (p_course STUDIES.COURSE%TYPE) IS
 SELECT NAME FROM STUDIES
 WHERE COURSE = p_course;
BEGIN
 FOR r IN c1 LOOP
 total := 0;
 FOR s IN c2(r.COURSE) LOOP
 total := total + 1;
 END LOOP;
 DBMS_OUTPUT.PUT_LINE('Course = ' || r.COURSE ||
 ' Students = ' || total);
 END LOOP;
END;
/`]);
E("6.5", "Software Developed in a Specified Language", "Write a PL/SQL program using a parameterized cursor to find software developed using the programming language specified by the user.", "Parameterized cursor; FOR loop; SOFTWARE DEV_IN", [`
DECLARE
 lang SOFTWARE.DEV_IN%TYPE := '&LANG';
 CURSOR c1 (p_lang VARCHAR2) IS
 SELECT TITLE FROM SOFTWARE
 WHERE DEV_IN = p_lang;
BEGIN
 FOR r IN c1(lang) LOOP
 DBMS_OUTPUT.PUT_LINE(r.TITLE);
 END LOOP;
END;
/`]);

/* ---------- PRACTICAL 7 ---------- */
E("7.1", "Swap Two Numbers (Procedure)", "Write a PL/SQL procedure to swap two numbers.", "Procedure; IN OUT parameters", [
  ["Step 1 – Create procedure", `
CREATE OR REPLACE PROCEDURE swap_num(
 a IN OUT NUMBER,
 b IN OUT NUMBER
)
IS
 temp NUMBER;
BEGIN
 temp := a;
 a := b;
 b := temp;
END;
/`],
  ["Step 2 – Call the procedure", `
DECLARE
 x NUMBER := &A;
 y NUMBER := &B;
BEGIN
 swap_num(x, y);
 DBMS_OUTPUT.PUT_LINE('A = ' || x);
 DBMS_OUTPUT.PUT_LINE('B = ' || y);
END;
/`]],
  "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: The supplied procedure used IN parameters but then tried to modify them. It is corrected to IN OUT. Do not call an IN OUT parameter with a fixed literal.");
E("7.2", "Insert Data into Software Table (Procedure)", "Write a PL/SQL procedure to insert data into the SOFTWARE table.", "Procedure; INSERT; SOFTWARE table", [
  ["Step 1 – Create procedure", `
CREATE OR REPLACE PROCEDURE soft
IS
BEGIN
 INSERT INTO SOFTWARE
 VALUES (
 '&NAME', '&TITLE', '&DEV_IN',
 &SCOST, &DCOST, &SOLD
 );
END;
/`],
  ["Step 2 – Execute", `EXEC soft`]]);
E("7.3", "Display Employee Details (Procedure)", "Create a PL/SQL procedure to display employee details.", "Procedure; cursor FOR loop; EMP table", [
  ["Step 1 – Create procedure", `
CREATE OR REPLACE PROCEDURE employee
IS
 CURSOR c1 IS SELECT * FROM EMP;
BEGIN
 DBMS_OUTPUT.PUT_LINE('EMPNO ENAME JOB MGR HIREDATE SAL COMM DEPTNO');
 FOR r IN c1 LOOP
 DBMS_OUTPUT.PUT_LINE(
 r.EMPNO || ' ' || r.ENAME || ' ' || r.JOB || ' ' ||
 r.MGR || ' ' || r.HIREDATE || ' ' || r.SAL || ' ' ||
 r.COMM || ' ' || r.DEPTNO
 );
 END LOOP;
END;
/`],
  ["Step 2 – Execute", `EXEC employee`]]);
E("7.4", "Display Employees of a Particular Department", "Write a PL/SQL procedure to display the names of employees belonging to a particular department.", "Procedure parameter; cursor; join; EMP DEPT", [
  ["Step 1 – Create procedure", `
CREATE OR REPLACE PROCEDURE emp1(p_dept IN VARCHAR2)
IS
 CURSOR c1 IS
 SELECT E.ENAME
 FROM EMP E, DEPT D
 WHERE D.DNAME = p_dept
 AND E.DEPTNO = D.DEPTNO;
BEGIN
 FOR r IN c1 LOOP
 DBMS_OUTPUT.PUT_LINE(r.ENAME);
 END LOOP;
END;
/`],
  ["Step 2 – Execute", `EXEC emp1('&DEPARTMENT')`]]);
E("7.5", "Employees with Salary Between 2000 and 5000", "Write a PL/SQL procedure to display the details of employees whose salary is between 2000 and 5000.", "Procedure; cursor; BETWEEN; salary; EMP table", [
  ["Step 1 – Create procedure", `
CREATE OR REPLACE PROCEDURE emp2
IS
 CURSOR c1 IS
 SELECT * FROM EMP
 WHERE SAL BETWEEN 2000 AND 5000;
BEGIN
 DBMS_OUTPUT.PUT_LINE('EMPNO ENAME JOB MGR HIREDATE SAL COMM DEPTNO');
 FOR r IN c1 LOOP
 DBMS_OUTPUT.PUT_LINE(
 r.EMPNO || ' ' || r.ENAME || ' ' || r.JOB || ' ' ||
 r.MGR || ' ' || r.HIREDATE || ' ' || r.SAL || ' ' ||
 r.COMM || ' ' || r.DEPTNO
 );
 END LOOP;
END;
/`],
  ["Step 2 – Execute", `EXEC emp2`]]);

/* ---------- PRACTICAL 8 ---------- */
E("8.1", "Factorial Using Recursive Function", "Write a recursive PL/SQL function to find the factorial of a number.", "Function; recursion; IF", [
  ["Step 1 – Create function", `
CREATE OR REPLACE FUNCTION f(n IN NUMBER)
RETURN NUMBER
IS
 fact NUMBER := 1;
BEGIN
 IF n <= 1 THEN
 fact := 1;
 ELSE
 fact := n * f(n - 1);
 END IF;
 RETURN fact;
END;
/`],
  ["Step 2 – Call the function", `SELECT f(5) FROM DUAL;`]],
  "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: The supplied function used N=1 as the only base case. Using n <= 1 safely includes 0! as well.");
E("8.2", "Count Number of Programmers (Function)", "Write a PL/SQL function to count the number of programmers and return the value.", "Function; SELECT COUNT; RETURN; PROGRAMMER table", [
  ["Step 1 – Create function", `
CREATE OR REPLACE FUNCTION fc
RETURN NUMBER
IS
 n NUMBER;
BEGIN
 SELECT COUNT(NAME) INTO n FROM PROGRAMMER;
 RETURN n;
END;
/`],
  ["Step 2 – Call the function", `SELECT fc FROM DUAL;`]]);
E("8.3", "Count Different Courses (Function)", "Write a PL/SQL function to count the number of different courses.", "Function; COUNT(DISTINCT); RETURN; STUDIES table", [
  ["Step 1 – Create function", `
CREATE OR REPLACE FUNCTION fc2
RETURN NUMBER
IS
 n NUMBER;
BEGIN
 SELECT COUNT(DISTINCT COURSE) INTO n FROM STUDIES;
 RETURN n;
END;
/`],
  ["Step 2 – Call the function", `SELECT fc2 FROM DUAL;`]]);
E("8.4", "Student Result Using Function and CASE", "Create a STUDENT table with Roll No, Name and Marks. Insert at least 2 records. Create a function using CASE to display Pass, First Class or Distinction according to the supplied practical.", "Function; CASE; SELECT INTO; STUDENT table; INSERT", [
  ["Step 1 – Create table and insert records", `
CREATE TABLE STUDENT (
 ROLLNO NUMBER,
 NAME VARCHAR2(15),
 MARKS NUMBER
);
INSERT INTO STUDENT VALUES (1, 'TRUPTI', 80);
INSERT INTO STUDENT VALUES (2, 'PRIYANKA', 82);`],
  ["Step 2 – Create function", `
CREATE OR REPLACE FUNCTION f6(r IN STUDENT.ROLLNO%TYPE)
RETURN VARCHAR2
IS
 m STUDENT.MARKS%TYPE;
BEGIN
 SELECT MARKS INTO m
 FROM STUDENT
 WHERE ROLLNO = r;
 RETURN CASE
 WHEN m < 35 THEN 'FAIL'
 WHEN m < 60 THEN 'PASS'
 WHEN m < 75 THEN 'FIRST CLASS'
 ELSE 'DISTINCTION'
 END;
END;
/`],
  ["Step 3 – Call the function", `SELECT NAME, f6(ROLLNO) FROM STUDENT;`]],
  "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: The supplied conditions were contradictory (overlapping CASE conditions). The manual uses a clean non-overlapping reading: below 35 = FAIL, 35-59 = PASS, 60-74 = FIRST CLASS, 75+ = DISTINCTION. This is the direct non-overlapping interpretation of the supplied boundary values, not a new grading scheme. The 80/82 sample output confirms Distinction is intended for these records.");
E("8.5", "Increase Employee Salary Using Function (IN OUT)", "Create a PL/SQL function with IN/OUT parameter to increase an employee salary and call the function from another PL/SQL block.", "Function; IN OUT parameter; SELECT INTO; IF / ELSIF; EMP table; salary", [
  ["Step 1 – Create function", `
CREATE OR REPLACE FUNCTION f1(
 p_no IN NUMBER,
 p_salary IN OUT NUMBER
)
RETURN NUMBER
IS
 old_sal NUMBER;
BEGIN
 SELECT SAL INTO old_sal
 FROM EMP
 WHERE EMPNO = p_no;
 IF old_sal > 1000 AND old_sal < 2000 THEN
 p_salary := old_sal * 1.2;
 ELSIF old_sal > 2000 AND old_sal < 3000 THEN
 p_salary := old_sal * 2.3;
 ELSE
 p_salary := old_sal * 2.4;
 END IF;
 RETURN p_salary;
END;
/`],
  ["Step 2 – Call from another PL/SQL block", `
DECLARE
 v_no EMP.EMPNO%TYPE := &EMPNO;
 v_salary EMP.SAL%TYPE;
 pre_salary EMP.SAL%TYPE;
 v_new EMP.SAL%TYPE;
BEGIN
 SELECT SAL INTO v_salary
 FROM EMP
 WHERE EMPNO = v_no;
 pre_salary := v_salary;
 v_new := f1(v_no, v_salary);
 DBMS_OUTPUT.PUT_LINE('Old Salary = ' || pre_salary);
 DBMS_OUTPUT.PUT_LINE('New Salary = ' || v_new);
END;
/`]],
  "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: The supplied function code was not executable as written. It was corrected while keeping the function, IN OUT parameter and multiplier rules. The exact multipliers 1.2, 2.3 and 2.4 are preserved from the supplied source. The source statement \"SELECT SAL FROM EMP\" was missing INTO and used an undeclared SAL; both are corrected.");
E("8.6", "Find Employee Name (Function)", "Write a PL/SQL function to find the name of a specified employee.", "Function; SELECT INTO; RETURN; EMP table", [
  ["Step 1 – Create function", `
CREATE OR REPLACE FUNCTION f2(p_no IN EMP.EMPNO%TYPE)
RETURN VARCHAR2
IS
 emp_name EMP.ENAME%TYPE;
BEGIN
 SELECT ENAME INTO emp_name
 FROM EMP
 WHERE EMPNO = p_no;
 RETURN emp_name;
END;
/`],
  ["Step 2 – Call the function", `SELECT f2(&EMPNO) FROM DUAL;`]],
  "CLEANED / CORRECTED FROM SUPPLIED MATERIAL: The fixed employee number in the supplied solution was generalized to an input parameter because the question asks for a specified employee. The supplied source hard-coded EMPNO 7369; this version accepts the specified employee number as input.");

/* fix flags + search index */
DATA.forEach(e => {
  if (!e.flag && e.note.startsWith("CLEANED")) e.flag = "fix";
  e.h = [e.n, "practical " + e.p, PN[e.p], e.t, e.q, e.c, e.flag === "dup" ? "duplicate" : "", e.blocks.map(b => b.l + " " + b.code).join(" ")].join(" ").toLowerCase();
});

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
};
let favs = store.get("plsql_favs", []);
let recent = store.get("plsql_recent", []);
let view = "all", query = "";
const shut = new Set();

const KW = "DECLARE|BEGIN|END|IF|THEN|ELSE|ELSIF|CASE|WHEN|LOOP|WHILE|FOR|IN|OUT|EXIT|RETURN|CURSOR|OPEN|FETCH|CLOSE|IS|AS|SELECT|FROM|WHERE|INTO|INSERT|VALUES|UPDATE|SET|CREATE|OR|REPLACE|PROCEDURE|FUNCTION|TABLE|AND|BETWEEN|LIKE|DISTINCT|EXEC|MOD|COUNT|NOT|NULL";
const TYPES = "NUMBER|VARCHAR2|CHAR|DATE|DUAL";
const RX = new RegExp("(--.*)|('(?:[^']|'')*')|(&\\w+)|\\b(" + KW + ")\\b|\\b(" + TYPES + ")\\b|(\\w+(?:\\.\\w+)?%(?:TYPE|ROWTYPE|NOTFOUND))|\\b(\\d+(?:\\.\\d+)?)\\b|(DBMS_OUTPUT\\.PUT_LINE)", "gi");
function hl(code) {
  let out = "", last = 0, m;
  RX.lastIndex = 0;
  while ((m = RX.exec(code))) {
    out += esc(code.slice(last, m.index));
    const cls = m[1] ? "c" : m[2] ? "s" : m[3] ? "v" : m[4] ? "k" : m[5] ? "v" : m[6] ? "v" : m[7] ? "n" : "f";
    out += '<span class="' + cls + '">' + esc(m[0]) + "</span>";
    last = m.index + m[0].length;
  }
  return out + esc(code.slice(last));
}

function match(e, s) {
  s = s.trim().toLowerCase().replace(/^q\s*(?=\d)/, "");
  if (!s) return true;
  let m = s.match(/^(?:practical|prac|p)\s*(\d)$/);
  if (m) return e.p === +m[1];
  if (/^\d\.\d+$/.test(s)) return e.n === s;
  return s.split(/\s+/).every(w => e.h.includes(w));
}
const current = () => DATA.filter(e => (view === "all" || (view === "fav" ? favs.includes(e.n) : e.p === +view)) && match(e, query));

/* ---------- render ---------- */
function renderNav() {
  const btn = (k, label, n) => `<button class="nv ${view === k ? "on" : ""}" data-view="${k}"><span>${label}</span><b>${n}</b></button>`;
  let h = btn("all", "All Practicals", DATA.length);
  for (let i = 1; i <= 8; i++) h += btn(i, `Practical ${i} – ${PN[i]}`, DATA.filter(e => e.p === i).length);
  h += '<div class="sep"></div>' + btn("fav", "★ Favourites", favs.length);
  $("nav").innerHTML = h;
  $("recent").innerHTML = recent.length ? recent.map(n => {
    const e = DATA.find(x => x.n === n);
    return e ? `<button class="chip" data-open="${n}"><i>${n}</i>${esc(e.t)}</button>` : "";
  }).join("") : '<span class="none">Nothing yet</span>';
}
function cardHtml(e) {
  const multi = e.blocks.length > 1;
  const flags = (e.flag === "dup" ? '<span class="badge dup">DUPLICATE</span>' : "") +
    (e.flag === "inc" ? '<span class="badge inc">INCOMPLETE SOURCE</span>' : "") +
    (e.flag === "fix" ? '<span class="badge fix">CLEANED / CORRECTED</span>' : "");
  const blocks = e.blocks.map((b, i) => {
    const lines = b.code.split("\n");
    return `<div class="blk"><div class="bh"><span class="bl"><span class="dots"><s></s><s></s><s></s></span>${esc(b.l || "PL/SQL")}</span>
<button class="cp" data-act="copy" data-b="${i}">Copy Code</button></div>
<div class="ed"><pre class="g">${lines.map((_, i) => i + 1).join("\n")}</pre><pre class="cd">${hl(b.code)}</pre></div></div>`;
  }).join("");
  return `<article class="card ${shut.has(e.n) ? "shut" : ""}" id="c-${e.n}" data-n="${e.n}">
<header class="ch"><div class="ti"><div class="meta"><span class="qn">${e.n}</span><span class="badge">Practical ${e.p}</span>${flags}</div><h3>${esc(e.t)}</h3></div>
<button class="ib fav ${favs.includes(e.n) ? "on" : ""}" data-act="fav" title="Favourite" aria-label="Toggle favourite">${favs.includes(e.n) ? "★" : "☆"}</button>
<button class="ib" data-act="tog" title="Expand / collapse" aria-label="Expand or collapse"><span class="chev">▾</span></button></header>
<div class="body"><p class="qtext"><strong>Question:</strong> ${esc(e.q)}</p>
${e.note ? `<p class="note ${e.flag === "dup" ? "d" : ""}">${esc(e.note)}</p>` : ""}
${multi ? '<div class="allrow"><button class="cp" data-act="copy" data-b="all">Copy All (in order)</button></div>' : ""}${blocks}</div></article>`;
}
function render() {
  const list = current();
  $("list").innerHTML = list.map(cardHtml).join("");
  $("empty").hidden = list.length > 0;
  const name = view === "all" ? "all practicals" : view === "fav" ? "favourites" : "Practical " + view;
  $("counter").innerHTML = `Showing <strong>${list.length}</strong> of ${DATA.length} codes · ${name}`;
  renderNav();
}

/* ---------- copy ---------- */
function toast(msg) {
  const t = $("toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 1800);
}
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text; ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
  document.body.appendChild(ta); ta.select();
  let ok = false; try { ok = document.execCommand("copy"); } catch (e) { }
  ta.remove(); return ok;
}
async function copyText(text) {
  try { if (navigator.clipboard && window.isSecureContext !== false) { await navigator.clipboard.writeText(text); return true; } } catch (e) { }
  return fallbackCopy(text);
}
async function doCopy(btn, e, which) {
  const text = which === "all" ? e.blocks.map(b => b.code).join("\n\n") : e.blocks[+which].code;
  const ok = await copyText(text);
  const old = btn.textContent;
  if (ok) {
    btn.textContent = "Copied!"; btn.classList.add("done"); toast("Code copied successfully!");
    setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 1600);
    pushRecent(e.n);
  } else toast("Copy failed – select the code manually");
}

/* ---------- state ---------- */
function pushRecent(n) {
  recent = [n, ...recent.filter(x => x !== n)].slice(0, 6);
  store.set("plsql_recent", recent); renderNav();
}
function setView(v) { view = v; query = ""; $("search").value = ""; syncSearch(); render(); closeMenu(); window.scrollTo(0, 0); }
function openQ(n) {
  const e = DATA.find(x => x.n === n); if (!e) return;
  query = ""; $("search").value = ""; syncSearch();
  if (view !== "all" && view !== "fav" && view !== e.p) view = e.p;
  if (view === "fav" && !favs.includes(n)) view = e.p;
  shut.delete(n); render(); closeMenu(); pushRecent(n);
  const c = $("c-" + n);
  if (c) { c.scrollIntoView({ behavior: "smooth", block: "start" }); c.classList.add("flash"); setTimeout(() => c.classList.remove("flash"), 1800); }
}
function closeMenu() { document.body.classList.remove("open"); }

/* ---------- search ---------- */
let hlIdx = -1;
function syncSearch() {
  $("clearBtn").hidden = !$("search").value;
  const box = $("results");
  if (!query.trim()) { box.hidden = true; box.innerHTML = ""; return; }
  const hits = DATA.filter(e => match(e, query));
  box.hidden = false; hlIdx = -1;
  box.innerHTML = hits.length
    ? hits.slice(0, 8).map(e => `<button class="res" data-open="${e.n}"><span class="qn">${e.n}</span><span class="badge">Practical ${e.p}</span><span class="t">${esc(e.t)}</span></button>`).join("") +
      (hits.length > 8 ? `<div class="more">+ ${hits.length - 8} more shown in the list below</div>` : "")
    : '<div class="more">No matching codes found</div>';
}
$("search").addEventListener("input", ev => { query = ev.target.value; syncSearch(); render(); });
$("search").addEventListener("keydown", ev => {
  const items = [...document.querySelectorAll("#results .res")];
  if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
    ev.preventDefault(); if (!items.length) return;
    hlIdx = (hlIdx + (ev.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    items.forEach((x, i) => x.classList.toggle("hl", i === hlIdx));
  } else if (ev.key === "Enter" && items.length) { openQ(items[Math.max(hlIdx, 0)].dataset.open); }
  else if (ev.key === "Escape") { $("search").value = ""; query = ""; syncSearch(); render(); }
});
$("clearBtn").onclick = () => { $("search").value = ""; query = ""; syncSearch(); render(); $("search").focus(); };
document.addEventListener("click", ev => { if (!ev.target.closest(".searchwrap")) $("results").hidden = true; });
$("search").addEventListener("focus", () => { if (query.trim()) $("results").hidden = false; });

/* ---------- events ---------- */
document.addEventListener("click", ev => {
  const t = ev.target.closest("[data-view],[data-open],[data-act]"); if (!t) return;
  if (t.dataset.view) return setView(t.dataset.view);
  if (t.dataset.open) return openQ(t.dataset.open);
  const card = t.closest(".card"); if (!card) return;
  const n = card.dataset.n, e = DATA.find(x => x.n === n);
  if (t.dataset.act === "copy") doCopy(t, e, t.dataset.b);
  else if (t.dataset.act === "fav") {
    favs = favs.includes(n) ? favs.filter(x => x !== n) : [...favs, n];
    store.set("plsql_favs", favs);
    if (view === "fav") render();
    else { t.classList.toggle("on"); t.textContent = favs.includes(n) ? "★" : "☆"; renderNav(); }
  } else if (t.dataset.act === "tog") {
    card.classList.toggle("shut");
    card.classList.contains("shut") ? shut.add(n) : (shut.delete(n), pushRecent(n));
  }
});
$("showAll").onclick = () => setView("all");
$("expAll").onclick = () => { shut.clear(); document.querySelectorAll(".card").forEach(c => c.classList.remove("shut")); };
$("colAll").onclick = () => { document.querySelectorAll(".card").forEach(c => { c.classList.add("shut"); shut.add(c.dataset.n); }); };
$("menuBtn").onclick = () => document.body.classList.toggle("open");
$("overlay").onclick = closeMenu;
$("topBtn").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.addEventListener("scroll", () => { $("topBtn").hidden = window.scrollY < 500; }, { passive: true });
document.addEventListener("keydown", ev => { if (ev.key === "/" && document.activeElement.tagName !== "INPUT") { ev.preventDefault(); $("search").focus(); } });

render();
