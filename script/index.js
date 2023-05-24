//----------------------- step ------------
function activateStep(stepNumber) {
    let steps = document.getElementsByClassName('step');
    let buttons = document.getElementsByClassName('active');
  
    //for removing the "active" class from all buttons
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
  
    //hide all steps
    for (let i = 0; i < steps.length; i++) {
      steps[i].style.display = 'none';
    }
  
    let selectedStep = document.getElementById('step' + stepNumber);
    selectedStep.style.display = 'block';
  
    
    let selectedButton = document.getElementById('step' + stepNumber + 'button');
    // Add the "active" class to the selected button
    selectedButton.classList.add('active');
  }
  
  //Activate Step 1 by default
  activateStep(1);

    //------------------------ menu ----------------


    function toggleNavbar() {
        let navbar = document.getElementById("navbar");
        navbar.classList.toggle("open");
      }
      
      function closeNavbar() {
        let navbar = document.getElementById("navbar");
        navbar.classList.remove("open");
      }
  
