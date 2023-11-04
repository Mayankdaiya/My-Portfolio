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

// Get the button and card overlay elements
const showCardButton = document.getElementById('nav-button');
const cardOverlay = document.getElementById('card-overlay');
const closeCard = document.querySelectorAll('.close-card');

// Function to show the card overlay
function showCard() {
  cardOverlay.style.display = 'flex';
}

// Function to hide the card overlay
function hideCard() {
  cardOverlay.style.display = 'none';
}

// Add click event listeners to the button and close button
showCardButton.addEventListener('click', showCard);
closeCard.forEach(button => {
    button.addEventListener('click', hideCard);
});

