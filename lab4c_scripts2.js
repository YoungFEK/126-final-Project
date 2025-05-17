let students = [];

// Function to display all students
function display_list() {
    while (studentList.hasChildNodes()) {
        studentList.removeChild(studentList.firstChild);
    }
    students.forEach(student => {
        let li = document.createElement("li");
        li.innerText = `${student.studentNumber} - ${student.name} - ${student.age} - ${student.email} - ${student.course}`;
        studentList.appendChild(li);
    });
}

// Function to display current date and time
function time_now() {
    let now = new Date();
    let options = now.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    let splits=options.split(',');
    let dateStr = `Today is ${splits[1]},${splits[2]},${splits[0]}.`;
    let timeStr = `The current time is ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}.`;
    document.getElementById("currentDate").innerText = dateStr + "\n" + timeStr;
}

// Function to generate a unique student number
function generateStudentNumber() {
    let unique = false;
    let studentNumber;
    while (!unique) {
        studentNumber = "2023" + Math.floor(10000 + Math.random() * 90000);
        unique = !students.some(student => student.studentNumber === studentNumber);
    }
    return studentNumber;
}

function Student(name,){

    student.push()
}

// Function to add a student
function add_student() {
    let studentNumber = generateStudentNumber();
    let name = document.getElementById("name").value.trim();
    let age = parseInt(document.getElementById("age").value);
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;

    // Input validation
    if (name.length <= 5 || !name.includes(" ")) {
        alert("Name must be more than 5 characters and contain a space.");
        return;
    }
    if (isNaN(age) || age < 18 || age > 99) {
        alert("Age must be a number between 18 and 99.");
        return;
    }
    if (!email.endsWith("@up.edu.ph")) {
        alert("Email must end with @up.edu.ph.");
        return;
    }

    let student = { studentNumber, name, age, email, course };
    students.push(student);
    alert('The Following Details has been added:' +
          `\nStudent Number: ${studentNumber}`+
          `\nName: ${name}`+
          `\nAge: ${age}`+
          `\nEmail: ${email}`+
          `\nCourse: ${course}`);
    console.log(students);

    document.getElementById("studentForm").reset();
}

// Function to find a student
function find_student() {
    let searchId = document.getElementById("searchId").value;
    let student = students.find(s => s.studentNumber === searchId);

    if (student) {
        document.getElementById("searchResult").innerText = `Student Number: ${student.studentNumber}\nName: ${student.name}\nAge: ${student.age}\nEmail: ${student.email}\nCourse: ${student.course}`;
    } else {
        document.getElementById("searchResult").innerText = "Student record does not exist.";
    }
}
