//DOM SELECTION

//1).document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc'; //background-color
judul.innerHTML = 'Sasangka';


//2).document.getElementsByTagName() -> HTMLCollection
const paragraf = document.getElementsByTagName('p');
//paragraf[0].style.backgroundColor = 'lightblue';
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = 'lightblue';
}
//untuk mengubah ukuran font pada h1
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//3).document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';

//4).document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';
//mengubah warna background pada section b
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

//5).document.querySelectorAll() -> NodeList
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightgreen';
}