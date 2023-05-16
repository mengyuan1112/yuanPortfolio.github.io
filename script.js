document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var popup = document.getElementById("popup");
  
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

  document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton2");
    var popup = document.getElementById("popup2");
  
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