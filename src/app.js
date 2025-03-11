import dataService from "./services/data-service.js";

const service = new dataService();

const studentData = service.getStudentData();

const container = document.getElementById('students-container');

for (let i = 0; i < studentData.length; i++) {

    const student = studentData[i];

    const studentContainer = document.createElement('div');
    // .innerHTML
    // .textContent
    studentContainer.classList.add('student-container');

    const nameContainer = document.createElement('h3');
    // nameContainer.innerText = student.name + ' ' + student.surname;
    const nameNode = document.createTextNode(student.name + ' ' + student.surname);
    nameContainer.appendChild(nameNode);

    const countryContainer = document.createElement('span');
    // countryContainer.innerText = "Nazionalità: " + student.nationality;
    const countryNode = document.createTextNode("Nazionalità: " + student.nationality);
    countryContainer.appendChild(countryNode);

    const genderContainer = document.createElement('span');
    const genderNode = document.createTextNode("Genere: " + student.gender);
    genderContainer.appendChild()


    studentContainer.appendChild(nameContainer);
    studentContainer.appendChild(countryContainer);
    container.appendChild(studentContainer);
}

// const student1 = studentData[0];


///////////////// 1 /////////////////
// aggiungere genere

///////////////// 2 /////////////////
// aggiungere età

///////////////// 3 /////////////////
// allineare le schede degli studenti due a due

///////////////// 4 /////////////////
// rendere il sito molto bello per il docente

///////////////// 5 /////////////////
// ordinare studenti alfabeticamente by name