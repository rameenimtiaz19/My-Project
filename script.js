let students = [];

function addStudent() {

    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const department = document.getElementById("department").value;
    const semester = document.getElementById("semester").value;

    if (name === "" || rollNumber === "" || department === "" || semester === "") {
        alert("Please fill all fields.");
        return;
    }

    const student = {
        name: name,
        rollNumber: rollNumber,
        department: department,
        semester: semester
    };

    students.push(student);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("rollNumber").value = "";
    document.getElementById("department").value = "";
    document.getElementById("semester").value = "";
}

function displayStudents() {

    const studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    students.forEach((student, index) => {

        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.rollNumber}</td>
                <td>${student.department}</td>
                <td>${student.semester}</td>
                <td>
                    <button onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

        studentList.innerHTML += row;
    });
}

function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}
