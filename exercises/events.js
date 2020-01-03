// //Events listener
// step 1. go get something ex butts
// step 2. listen for something ex 'click'
// step 3. do something ex. console.log('IT GOT CLICKED!!!!');
// look up Callbacks
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!!! 🐛');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
  console.log('Iam an anon!');
});
coolButton.addEventListener('click', hooray);

// remove eventslistener
// remove event and function its listening for
butts.removeEventListener('click', handleClick);
