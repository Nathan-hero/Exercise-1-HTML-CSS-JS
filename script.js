function done() {
  alert("Your message was submitted");
  return false; // Prevent actual form submission

}


function changeBackgroundColor() {
  const section = document.querySelector('.portfolio-section');
  section.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function revertbackground() {
  const section = document.querySelector('.portfolio-section');
  section.style.backgroundColor = "";
}


  document.getElementById("contact").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Show confetti
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.8 },
    });

    e.target.reset();
  });
