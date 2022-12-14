
// function myFunction() {
//   let x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// no se puede porque no es una comparación, da le priemr arranque pero no renderiza el resto

const faqButtons = document.querySelectorAll('.faq-toggle');

faqButtons.forEach((btn) => {

    btn.addEventListener('click', () => btn.parentNode.classList.toggle('active'));
    
});