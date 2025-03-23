import dataService from "./services/data-service.js";

document.getElementById('add-student-form').addEventListener('submit', async function(event) {
	event.preventDefault();

	const name = document.getElementById('name').value;
	const surname = document.getElementById('surname').value;
	const yob = parseInt(document.getElementById('yob').value);
    const nationality = document.getElementById('nationality').value;
    const gender = document.getElementById('gender').value;

	const newStudent = {name, surname, yob, nationality, gender};

	// prendo gli studenti esistenti in localStorage
	const storedStudents = localStorage.getItem('students');
	let students = [];
	if (storedStudents) {
		students = JSON.parse(storedStudents);
	} else {
		// fetcha gli studenti dal json se non presenti nel localStorage
		const response = await fetch("../assets/students.json");
		const jsonData = await response.json();
		students = jsonData;
	}

	// aggiungi nuovo studente all'array
	students.push(newStudent);
	// salva l'array aggiornato nel localStorage
	localStorage.setItem('students', JSON.stringify(students));
	// reindirizza all'homepage
	window.location.href = 'index.html';
});