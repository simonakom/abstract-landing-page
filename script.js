let searchButton = document.getElementById('search-button')
let searchInput = document.querySelector('.nav-search-input');
let nav = document.querySelector('.nav');
let closeButton = document.querySelector('.bi.bi-x');

searchButton.addEventListener('click', function() {
  searchInput.style.display = (searchInput.style.display == 'block') ? 'none' : 'block';
  nav.style.display = 'none'
});
closeButton.addEventListener('click', function() {
  searchInput.style.display = 'none';
  nav.style.display = 'block'
});

function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
    nav.style.backgroundColor = 'black';
  } else {
    x.style.display = "block";
    nav.style.backgroundColor = '#191a1b';
  }
}