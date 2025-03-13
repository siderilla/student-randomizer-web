import Student from "../model/student.js";

export default class dataService {

    constructor() {}

	// useResponse(response) {
	// 	const jsonPromise = response.json();
	// 	jsonPromise.then((json) => console.log(json));
	// 	jsonPromise.catch((error) => console.log(error));
	// }

	// handleError(response) {
	// 	console.log('suca', response);
	// }

    async getStudentData() {

        // const responsePromise = fetch("../../assets/students.json")

		// responsePromise.then(this.useResponse);
		// responsePromise.catch(this.handleError);

		// ("/assets/students.json") - url relativo
		// ("http://127.0.0.1:5500/assets/students.json") - url assoluto

		// const orderedData = this.sortStudent

		const studentsPromise = fetch("../../assets/students.json")
		.then(resp => resp.json())
		.then(jsonData => {
			const students = this.createStudentFromRowData(jsonData);
		   	console.log(students);
			return students;
		}) // promise di studenti
		.catch(error => console.log(error));

		return studentsPromise;

		// const students = this.createStudentFromRowData(data);
		// return students;

		// const richData = this.addAge(data);
		// return richData;
        // // return data;
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

		// const newArray = array.slice();
		// // tre tipi di ritorno la funzione .sort negativo, positivo o 0
		// // va bene per array piccoli, quelli molto (ma molto) grandi invece ci metterebbe un'eternità
		// newArray.sort(() => Math.random() - 0.5);
		// return newArray;

		const cloneArray = array.slice();
		const newArray = [];

		while (cloneArray.length > 0) {
			const randomIndex = Math.round(Math.random() * (cloneArray.length - 1));
			// const randomStudent = cloneArray[randomIndex];
			// newArray.push(randomStudent);
			// cloneArray.splice(randomIndex, 1);
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

	// addAge(studentArray) {
	// 	// creo una nuova costante che prenderà il valore yob nell'array di ciascun studente
	// 	const newData = studentArray.map(student => {
	// 		// const now = new Date();
	// 		// const actualYear = now.getFullYear();
	// 		// const age = actualYear - student.yob;
	// 		// student.age = age;
	// 		student.age = this.calculateAge(student.yob);
	// 		return student;
	// 	})

	// 	return newData;
	// }

}