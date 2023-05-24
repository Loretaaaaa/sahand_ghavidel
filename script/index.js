//----------------------- step ------------
function activateStep(stepNumber) {
    let steps = document.getElementsByClassName('step');
    let buttons = document.getElementsByClassName('active');
  
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
  
  
    for (let i = 0; i < steps.length; i++) {
      steps[i].style.display = 'none';
    }
  
    let selectedStep = document.getElementById('step' + stepNumber);
    selectedStep.style.display = 'block';
  
  
    let selectedButton = document.getElementById('step' + stepNumber + 'button');
    selectedButton.classList.add('active');
  }
  
  //Activate Step 1 by default
  activateStep(1);
  
