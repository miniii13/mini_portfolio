var typed = new Typed(".text", {
    strings: ["Full-Stack Developer", "Fronted Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});



const section = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

   
    if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
      section.classList.add("show");
    } 
    
    else {
      section.classList.remove("show");
    }
  });
});

const scriptURL = "https://script.google.com/macros/s/AKfycbwHDvC0nCH-FhFIGYNkjhg5a6pq6o5DmCwMU4Icor41ca23bKKj1y8oSShdRJtvFJ51LA/exec";
const form = document.getElementById("contactForm");
const response = document.getElementById("responseMsg"); 

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      response.innerHTML = "✅ Message sent successfully!";
      response.style.color = "green";
      form.reset();
    })
    .catch(error => {
      response.innerHTML = "❌ Error sending message. Try again!";
      response.style.color = "red";
      console.error("Error!", error.message);
    });
});
