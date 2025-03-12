import Student from "../model/student.js";

export default class dataService {

    constructor() {}

    getStudentData() {
        const data = [
			{
				"name": "Lorenzo",
				"surname": "Puppo",
				"yob": 1995,
				"nationality": "Italy",
				"gender": "M",
				"marks": [
					8,
					9,
					10
				]
			},
			{
				"name": "Jan",
				"surname": "Stigliani",
				"yob": 2000,
				"nationality": "Italy",
				"gender": "M",
				"marks": [
					7,
					7,
					8
				]
			},
			{
				"name": "Giovanni",
				"surname": "Sussarellu",
				"yob": 1981,
				"nationality": "Italy",
				"gender": "M",
				"marks": [
					7,
					6,
					8
				]
			},
			{
				"name": "Sara",
				"surname": "De Prà",
				"yob": 1989,
				"nationality": "Italy",
				"gender": "Fluid",
				"marks": [
					9,
					6,
					8
				]
			},
			{
				"name": "Jeremias",
				"surname": "Cedeno",
				"yob": 2003,
				"nationality": "Ecuador",
				"gender": "M",
				"marks": [
					6,
					10,
					7
				]
			},
			{
				"name": "Laura",
				"surname": "Mazza",
				"yob": 1984,
				"nationality": "Italy",
				"gender": "F",
				"marks": [
					4,
					2,
					6
				]
			},
			{
				"name": "Eusebio",
				"surname": "Veizi",
				"yob": 1993,
				"nationality": "Albanese",
				"gender": "Peanut",
				"marks": [
					5,
					7,
					6
				]
			},
			{
				"name": "Hugo",
				"surname": "Martinez",
				"yob": 1994,
				"nationality": "ElSalvador",
				"gender": "F",
				"marks": [
					10,
					10,
					8
				]
			}
		];

		// const orderedData = this.sortStudent

		const students = this.createStudentFromRowData(data);
		return students;

		// const richData = this.addAge(data);
		// return richData;
        // // return data;
    }

	getStudentsByName() {

		const students = this.getStudentData();
		const studentsClone = students.slice();

		studentsClone.sort((s1, s2) => s1.compareByName(s2));

		return studentsClone;
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