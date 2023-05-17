document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var popup = document.getElementById("popup");
    var company = document.getElementById("company");
    var position = document.getElementById("position");
    var timeline = document.getElementById("timeline");
  
    popup.style.display = "none";

    toggleButton.addEventListener("click", function() {
      if (popup.style.display === "none") {
        popup.style.display = "block";
        company.style.display = "none";
        position.style.display = "none";
        timeline.style.display = "none";
        toggleButton.innerText = "😊";
      } else {
        popup.style.display = "none";
        company.style.display = "block";
        position.style.display = "block";
        timeline.style.display = "block";
        toggleButton.innerText = "?";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton2");
    var popup = document.getElementById("popup2");
    var company = document.getElementById("company2");
    var position = document.getElementById("position2");
    var timeline = document.getElementById("timeline2");
    popup.style.display = "none";

    toggleButton.addEventListener("click", function() {
      if (popup.style.display === "none") {
        popup.style.display = "block";
        company.style.display = "none";
        position.style.display = "none";
        timeline.style.display = "none";
        toggleButton.innerText = "😊";
      } else {
        popup.style.display = "none";
        company.style.display = "block";
        position.style.display = "block";
        timeline.style.display = "block";
        toggleButton.innerText = "?";
      }
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton3");
    var popup = document.getElementById("popup3");

    popup.style.display = "none";
  
    toggleButton.addEventListener("click", function() {
      if (popup.style.display === "none") {
        popup.style.display = "block";
        toggleButton.innerText = "😊";
      } else {
        popup.style.display = "none";
        toggleButton.innerText = "?";
      }
    });
  });