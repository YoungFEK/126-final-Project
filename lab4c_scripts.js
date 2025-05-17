let students = [];


function display_list() {
    let studentListContainer = document.getElementById("studentList");

    studentListContainer.innerHTML = "";

    if (students.length === 0) {
        studentListContainer.innerHTML = "<p>No students available.</p>";
        return;
    }


    let table = document.createElement("table");
    table.border = "1";     //style in css


    let headerRow = table.insertRow();
    let headers = ["Student Number", "Name", "Age", "Email", "Course"];

    headers.forEach(headerText => {
        let th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });


    students.forEach(student => {
        let row = table.insertRow();
        Object.values(student).forEach(text => {
            let cell = row.insertCell();
            cell.innerText = text;
        });
    });

    // Append table to the container
    studentListContainer.appendChild(table);
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
function Student(){
    studentNumber:"";
    name:"";
    age:"";
    email:"";
    course:"";

}


// Function to add a student
function add_student(e) {
    e.preventDefault();
    let valid=true;
    const studentDetails=new Student()

        studentDetails.studentNumber= generateStudentNumber();
        studentDetails.name         = document.getElementById("name").value.trim();
        studentDetails.age          = parseInt(document.getElementById("age").value);
        studentDetails.email        = document.getElementById("email").value.trim();
        studentDetails.course       = document.getElementById("course").value;



    // Input validation
    if (studentDetails.name.length <= 5 || !studentDetails.name.includes(" ")) {
        alert("Name must be more than 5 characters and contain a space.");
        valid=false;
    }
    if (isNaN(studentDetails.age) || studentDetails.age < 18 || studentDetails.age > 99) {
        alert("Age must be a number between 18 and 99.");
        valid=false;
    }
    if (!studentDetails.email.endsWith("@up.edu.ph")||studentDetails.email.startsWith("@up.edu.ph")) {
        alert("Enter a valid Email ending with @up.edu.ph.");
        valid=false;
    }

    if(valid){
        students.push(studentDetails);
        alert('The Following Details has been added:' +
            `\nStudent Number: ${studentDetails.studentNumber}`+
            `\nName: ${studentDetails.name}`+
            `\nAge: ${studentDetails.age}`+
            `\nEmail: ${studentDetails.email}`+
            `\nCourse: ${studentDetails.course}`);
        console.log(students);
    }
    document.getElementById("studentForm").reset()
}

// Function to find a student
function find_student() {
    let searchId = document.getElementById("searchId").value;
    let student = students.find(s => s.studentNumber === searchId);
    let studentListContainer = document.getElementById("searchResult");

    if (student) {


        studentListContainer.innerHTML = "";

        let table = document.createElement("table");
        table.border = "1";     //style in css




        // let headerRow = table.insertRow();
        let headers = ["Student Number", "Name", "Age", "Email", "Course"];
        let studentSearch=[]
        let i=0
        Object.values(student).forEach(text => {
            studentSearch.push(text)
        });




        headers.forEach(headerText => {
            let headerRow = table.insertRow();
            let th = document.createElement("th");
            let td = document.createElement("td")
            th.innerText = headerText;
            td.innerText=studentSearch[i]
            i+=1;
            headerRow.appendChild(th);
            headerRow.appendChild(td);
        });





        // Append table to the container
        studentListContainer.appendChild(table);
    } else {
        studentListContainer.innerHTML = "Student record does not exist.";
    }


}
