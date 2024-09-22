document.getElementById("thankyou-card").style.display = "none";
document.getElementById("newsletter-desktop").style.display = "";
const email = document.getElementById("email");

const validateEmailInput = (event) =>{ 
  const emailInput = document.getElementById('email').value;
  const falseEmail = document.getElementById('emailFeedback');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  event.preventDefault();
  if (emailRegex.test(emailInput)) {
    document.getElementById("thankyou-card").style.display="";
    document.getElementById("newsletter-desktop").style.display = "none";
    document.getElementById("p-email-thanks").innerHTML = `A confirmation email has been sent to <b>${emailInput}</b>. Please open it and click the button inside to confirm your subscription.`;
  } else {
    falseEmail.textContent = "Valid email required";
    document.getElementById("email").style.color = "hsla(4, 100%, 67%, 1)";
    document.getElementById("email").style.background = "hsla(4, 100%, 67%, 0.2)";
  }
};

// IMPORTANT button to verify email and show thankyou-card!!
document.getElementById("input-button").addEventListener("click", validateEmailInput);
//This is for dismiss message button
document.getElementById("thankyou-button").addEventListener("click", function(){
  document.getElementById("thankyou-card").style.display = "none";
  document.getElementById("newsletter-desktop").style.display = "";
  
});
