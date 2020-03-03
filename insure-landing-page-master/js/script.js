
const hamburgerMenu = document.querySelector('#hamburger');
const close = document.querySelector('.mobile-nav-close');
const navigation = document.querySelector('.nav-links');
hamburger.addEventListener('click', () =>{
  hamburger.style.display = "none";
  close.style.display = "block";
  navigation.style.top = "60px";
} );

close.addEventListener('click', ()=>{
  hamburger.style.display = "block";
  close.style.display = "none";
  navigation.style.top = "-900px";
})
