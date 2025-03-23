import dataService from './services/data-service.js';
const service = new dataService();

const params = new URLSearchParams(window.location.search);
const index = Number(params.get('index'));
const form = document.getElementById('edit-form');

function loadStudent() {
  const students = JSON.parse(localStorage.getItem('students')) || [];
  const student = students[index];
  if (!student) return window.location.href = 'index.html';

  document.getElementById('name').value = student.name;
  document.getElementById('surname').value = student.surname;
  document.getElementById('yob').value = student.yob;
  document.getElementById('nationality').value = student.nationality;
  document.getElementById('gender').value = student.gender;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const students = JSON.parse(localStorage.getItem('students'));
  students[index] = {
    name: form.name.value.trim(),
    surname: form.surname.value.trim(),
    yob: Number(form.yob.value),
    nationality: form.nationality.value.trim(),
    gender: form.gender.value.trim()
  };
  localStorage.setItem('students', JSON.stringify(students));
  window.location.href = 'index.html';
});

document.getElementById('delete-btn').addEventListener('click', () => {
  const students = JSON.parse(localStorage.getItem('students'));
  students.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(students));
  window.location.href = 'index.html';
});

document.getElementById('cancel-btn').addEventListener('click', () => {
  window.location.href = 'index.html';
});

loadStudent();
