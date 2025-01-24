// script.js
function showAlert() {
    alert("Button Clicked!");
    document.getElementById("demo").innerHTML = "Hello Javascript!";
}

//Example of using Javascript to manipulate the DOM
document.addEventListener('DOMContentLoaded', function() {
    const contentSection = document.getElementById('content');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This paragraph was added by JavaScript!";
    contentSection.appendChild(newParagraph);
});