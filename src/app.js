import dataService from "./services/data-service.js";

const service = new dataService();

function getStudents() {
    const studentPromise = service.getStudentData();
    studentPromise.then(studentsData => render(studentsData));
}

function orderByName() {
    const studentPromise = service.getStudentsByName();
    studentPromise.then(studentsData => render(studentsData));
}

function orderByAge() {
    service.getStudentsByAge().then(studentsData => render(studentsData));
}

async function shuffle() {
    const studentData = await service.getShuffledStudents();
    render(studentData);
}

window.orderByName = orderByName;
window.orderByAge = orderByAge;
window.shuffle = shuffle;
window.getStudents = getStudents;

function render(studentData) {
    const container = document.getElementById('students-container');

    container.innerHTML = '';

    for (let i = 0; i < studentData.length; i++) {
        const student = studentData[i];
    
        const studentContainer = document.createElement('div');
        if(i % 2 === 0){
            studentContainer.classList.add('student-container');
        } else {
            studentContainer.classList.add('student-container2');
        }
        
        const nameContainer = createTextElement('span', student.name + ' ' + student.surname);
        const countryContainer = createTextElement('span', 'Nazionalità: ' + student.nationality);
        const genderContainer = createTextElement('span', 'Gender: ' + student.gender);
        const ageContainer = createTextElement('span', 'Age: ' + student.getAge());

		const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Elimina';
        deleteBtn.addEventListener('click', () => deleteStudent(i));

		const editBtn = document.createElement('button');
		editBtn.textContent = 'Modifica';
		editBtn.addEventListener('click', () => {
			window.location.href = `student-card.html?index=${i}`;
		  });

        studentContainer.appendChild(nameContainer);
        studentContainer.appendChild(countryContainer);
        studentContainer.appendChild(genderContainer);
        studentContainer.appendChild(ageContainer);
        studentContainer.appendChild(deleteBtn);
		studentContainer.appendChild(editBtn);
    
        container.appendChild(studentContainer);
    }
}

function deleteStudent(index) {
    const stored = localStorage.getItem('students');
    if (!stored) return;

    const students = JSON.parse(stored);
    students.splice(index, 1);                    // rimuovi l’elemento
    localStorage.setItem('students', JSON.stringify(students));
    getStudents();                                // aggiorna la lista sullo schermo
}

window.deleteStudent = deleteStudent;

function createTextElement(elementType, text) {

    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;

}

document.addEventListener('DOMContentLoaded', getStudents);

//// random background color palette
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const randomColor = getRandomColor();
document.body.style.backgroundColor = randomColor;