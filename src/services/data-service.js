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
        return data;
    }
}