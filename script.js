function myFunction() {
    alert('Button was clicked!');
  }
function myClick() {
    console.log('sup');
}

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function (){
  this.classList.toggle('is-active')
})
//alert("this is alert");