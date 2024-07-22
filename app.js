const sections = document.querySelectorAll(".section");
const sectbtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const aLLSelections = document.querySelector(".main-content");

function PageTransistions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //Sections active
  aLLSelections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //removes seLected fromt the other gtns
      sectbtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((sections) => {
        sections.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
      if (element) {
        element.classList.add("active");
      } else {
        console.error("Ingen element funnet med ID: ${id");
      }
    }
  });
}

PageTransistions();
