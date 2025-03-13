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

// const studentData = service.getStudentsByAge();
// const studentData = service.getStudentsByName();
// const studentData = service.getShuffledStudents();

// funzione sort per ordinare alfabeticamente
// studentData.sort((a, b) => a.name.localeCompare(b.name));

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

        // const nameContainer = document.createElement('span');
        // nameContainer.classList.add('name-container');
        // const nameNode = document.createTextNode(student.name + ' ' + student.surname);
        // nameContainer.appendChild(nameNode);

        const countryContainer = createTextElement('span', 'Nazionalità: ' + student.nationality);
    
        // const countryContainer = document.createElement('span');
        // countryContainer.classList.add('country-container');
        // const countryNode = document.createTextNode('Nazionalità: ' + student.nationality);
        // countryContainer.appendChild(countryNode);

        const genderContainer = createTextElement('span', 'Gender: ' + student.gender);

        // const genderContainer = document.createElement('span');
        // genderContainer.classList.add('gender-container');
        // const genderNode = document.createTextNode('Gender: ' + student.gender);
        // genderContainer.appendChild(genderNode);

        const ageContainer = createTextElement('span', 'Age: ' + student.getAge());
    
        // const now = new Date();
        // const year = now.getFullYear();
        // const age = year - student.yob;
        // const ageNode = document.createTextNode('Age: ' + age);
        
        // const ageContainer = document.createElement('span');
        // ageContainer.classList.add('age-container');
        // const ageNode = document.createTextNode('Age: ' + student.getAge());
        // ageContainer.appendChild(ageNode);
    
        studentContainer.appendChild(nameContainer);
        studentContainer.appendChild(countryContainer);
        studentContainer.appendChild(genderContainer);
        studentContainer.appendChild(ageContainer);
    
        container.appendChild(studentContainer);
    }
}

function createTextElement(elementType, text) {

    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;

}

//// random background color palette
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const randomColor = getRandomColor();
document.body.style.backgroundColor = randomColor;


///////////////// 1 ///////////////// 
// aggiungere genere
// FATTO

///////////////// 2 /////////////////
// aggiungere età
// FATTO

///////////////// 3 /////////////////
// allineare le schede degli studenti due a due
// FATTO

///////////////// 4 /////////////////
// rendere il sito molto bello per il docente
// BOH

///////////////// 5 /////////////////
// ordinare studenti alfabeticamente by name
// FATTO