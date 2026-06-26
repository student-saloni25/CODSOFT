// Student Data
let students = JSON.parse(localStorage.getItem("students")) || [];

let selectedIndex = -1;

// Load Data When Page Opens
displayStudents();


// Add Student
function addStudent() {

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();
    let grade = document.getElementById("grade").value.trim();

    // Validation
    if(name=="" || roll=="" || course=="" || grade==""){
        alert("Please fill all fields.");
        return;
    }

    let student = {
        name:name,
        roll:roll,
        course:course,
        grade:grade
    };

    students.push(student);

    saveData();

    displayStudents();

    clearFields();

    alert("Student Added Successfully!");

}



// Display Students
function displayStudents(){

    let table = document.getElementById("studentTable");

    table.innerHTML="";

    students.forEach((student,index)=>{

        table.innerHTML += `

        <tr>

        <td>${student.name}</td>

        <td>${student.roll}</td>

        <td>${student.course}</td>

        <td>${student.grade}</td>

        <td>

        <button class="edit-btn"
        onclick="editStudent(${index})">

        Edit

        </button>

        <button class="delete-btn"
        onclick="deleteStudent(${index})">

        Delete

        </button>

        </td>

        </tr>

        `;

    });

}



// Save Data
function saveData(){

    localStorage.setItem("students",JSON.stringify(students));

}



// Clear Fields
function clearFields(){

    document.getElementById("name").value="";
    document.getElementById("roll").value="";
    document.getElementById("course").value="";
    document.getElementById("grade").value="";

    selectedIndex=-1;

}
// Edit Student
function editStudent(index){

    selectedIndex = index;

    document.getElementById("name").value = students[index].name;
    document.getElementById("roll").value = students[index].roll;
    document.getElementById("course").value = students[index].course;
    document.getElementById("grade").value = students[index].grade;

}


// Update Student
function updateStudent(){

    if(selectedIndex==-1){
        alert("Please select a student to update.");
        return;
    }

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();
    let grade = document.getElementById("grade").value.trim();

    if(name=="" || roll=="" || course=="" || grade==""){
        alert("Please fill all fields.");
        return;
    }

    students[selectedIndex] = {
        name:name,
        roll:roll,
        course:course,
        grade:grade
    };

    saveData();
    displayStudents();
    clearFields();

    alert("Student Updated Successfully!");

}


// Delete Student
function deleteStudent(index){

    if(confirm("Are you sure you want to delete this student?")){

        students.splice(index,1);

        saveData();

        displayStudents();

    }

}


// Search Student
function searchStudent(){

    let search = document.getElementById("search").value.toLowerCase();

    let table = document.getElementById("studentTable");

    table.innerHTML="";

    students.forEach((student,index)=>{

        if(

            student.name.toLowerCase().includes(search) ||

            student.roll.toLowerCase().includes(search)

        ){

            table.innerHTML += `

            <tr>

            <td>${student.name}</td>

            <td>${student.roll}</td>

            <td>${student.course}</td>

            <td>${student.grade}</td>

            <td>

            <button class="edit-btn"
            onclick="editStudent(${index})">

            Edit

            </button>

            <button class="delete-btn"
            onclick="deleteStudent(${index})">

            Delete

            </button>

            </td>

            </tr>

            `;

        }

    });

}