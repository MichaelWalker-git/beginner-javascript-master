console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// oh shoot we need to add something to the top like a heading!

const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');
list.textContent = 'Dogs';
console.log(list);

const myList = document.createElement('li');
myList.textContent = 'Pitbull';

const myList1 = document.createElement('li');
myList1.textContent = 'Rottie';

const myList2 = document.createElement('li');
myList2.textContent = 'Dobberman';

const myList3 = document.createElement('li');
myList3.textContent = 'Pomski';

const myList4 = document.createElement('li');
myList4.textContent = 'Chihuaha';

myDiv.appendChild(list);
myDiv.appendChild(myList);
myDiv.appendChild(myList1);
myDiv.appendChild(myList2);
myDiv.appendChild(myList3);
myDiv.appendChild(myList4);
