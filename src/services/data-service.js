import Student from "../model/student.js";

export default class dataService {

    constructor() {}

    async getStudentData() {
		const storedStudents = localStorage.getItem('students');
		if (storedStudents) {
			// se gli studenti sono già nel localstorage, faccio il parse del json
			const students = JSON.parse(storedStudents);
			return this.createStudentFromRowData(students);
		} else {
			// altrimenti faccio la fetch normale
			const studentsPromise = fetch("../../assets/students.json")
			.then(resp => resp.json())
			.then(jsonData => {
				// salvo la stringa JSON in localstorage
				localStorage.setItem('students', JSON.stringify(jsonData));
	
				const students = this.createStudentFromRowData(jsonData);
				console.log(students);
				return students; // promise di studenti
	
			})
			.catch(error => console.log(error));
	
			return studentsPromise;
		}
    }

	getStudentsByAge() {
		return this.getStudentData().then(students => {
			const studentsClone = students.slice();
			studentsClone.sort((s1, s2) => s1.compareByAge(s2));
			return studentsClone;
		})
	}

	getStudentsByName() {
		return this.getStudentData().then(students => {
			const studentsClone = students.slice();
			studentsClone.sort((s1, s2) => s1.compareByName(s2));
			return studentsClone;
		})
	}

	async getShuffledStudents() {

		const students = await this.getStudentData();
		const studentsClone = students.slice();

		const shuffledStudents = this.shuffleArray(studentsClone);

		return shuffledStudents;

	}

	shuffleArray(array) {

		const cloneArray = array.slice();
		const newArray = [];

		while (cloneArray.length > 0) {
			const randomIndex = Math.round(Math.random() * (cloneArray.length - 1));
			const randomStudent = cloneArray.splice(randomIndex, 1)[0];
			newArray.push(randomStudent);
		}
		return newArray;
	}

	createStudentFromRowData(data) {

		const students = [];
		for (let i = 0; i < data.length; i++) {
			const element = data[i];
			// così creo l'istanza per ciascuno studente
			const newStudent = new Student(element.name, element.surname, element.yob, element.gender, element.nationality, element.marks);
			students.push(newStudent);
		}

		return students;

	}

	calculateAge(yob) {
		const now = new Date();
			const actualYear = now.getFullYear();
			const age = actualYear - yob;
			return age;
	}
}