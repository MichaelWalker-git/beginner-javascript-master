console.log('it works');

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  console.log('YOU CLICKED IT');
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
  event.preventDefault();
});

const signupForm = document.querySelector('[name="signup]');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event.currentTarget);
});
