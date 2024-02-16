const tab1=document.getElementById("a1");
const tab2=document.getElementById("a2");
const content1=document.getElementById("tc1");
const content2=document.getElementById("tc2");
tab1.addEventListener("click",()=>{
    content2.style.display="none";
    content1.style.display="flex";
    tab1.style.borderBlockWidth="3.1px";
    tab2.style.borderBlockWidth="0px";
});
tab2.addEventListener("click",()=>{
    content2.style.display="flex";
    content1.style.display="none";
    tab2.style.borderBlockWidth="3.1px";
    tab1.style.borderBlockWidth="0px";
})

// for typingWords in section-1
var typed = new Typed('#element', {
  strings: ['Web Developer.','Problem Solver.','Programmer.'],
  typeSpeed: 80,
});

// Get the button and card overlay elements
const cardOverlay = document.getElementById('navul');
const closeCard = document.querySelectorAll('.navli');
const navbtn1 = document.getElementById('navbtn1');
const navbtn2 = document.getElementById('navbtn2');
const navul2 = document.getElementById('navul2');
// Function to show the card overlay
function showCard() {
  cardOverlay.style.display = 'flex';
  navul2.style.display = 'none';
  navbtn1.style.display = 'block';
  console.log("executed");
}
const computedStyle = window.getComputedStyle(navbtn2);
const displayValue = computedStyle.getPropertyValue('display');
// Function to hide the card overlay
function hideCard() {
  if(displayValue==='block'){
    cardOverlay.style.display = 'none';
    navul2.style.display = 'flex';
    navbtn1.style.display = 'none';
  }
  else console.log(displayValue);
}

// Add click event listeners to the button and close button
navbtn2.addEventListener('click', showCard);
closeCard.forEach(button => {
  button.addEventListener('click',hideCard);
});

// Google sheets and contact form data - https://docs.google.com/spreadsheets/d/1Zzb3F7R1qjoIE9lWH0Q7oUqbBxpks5joBQqeCpABsy4/edit#gid=0

const scriptURL = 'https://script.google.com/macros/s/AKfycbzXCHY5che_FJA8KJpZt8p8cJZXKqLzHEmoBnB8bhQcVpzTQNzbifY-KHcFuWFWLOf9/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully!";
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})