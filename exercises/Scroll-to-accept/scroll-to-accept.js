const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

// Payload is the data that is carried on behalf of an application
function obCallback(payload) {
  //   removes the disbaled attribute on the button
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}

// IntersectionObserver will watch if an element is on or off the page or partly on or off the page
// pass in a callback (a function that will get called back at a certain point)
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
  // this tells me when im 100% on the page
});

// lastElementChild is way to get the last Element in the terms and conditions div
ob.observe(terms.lastElementChild);

// take the observer then call the observe method then pass it something to watch for. ex. (watch)
