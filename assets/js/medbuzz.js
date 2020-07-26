window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("bg-dark");
    //document.querySelector("svg#door").replaceWith("door");
  } else {
    document.getElementById("navbar").classList.remove("bg-dark");
  }
}

//email validation
document.getElementById("submitBtn").addEventListener("click", emailValidation);
let mailFormat = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

function emailValidation() {
  //console.log(document.getElementById("emailTxt").value);
  let emailForm = document.getElementById("emailTxt").value;
  if (emailForm == "" || !emailForm.match(mailFormat)) {
    //alert("Please enter a valid email");
    document.getElementById("errorMsg").classList.add("show-error");
    document.getElementById("errorMsg").classList.remove("d-none");
  }
  document.getElementById("closeErr").addEventListener("click", () => {
    document.getElementById("errorMsg").classList.remove("show-error");
    document.getElementById("errorMsg").classList.add("d-none");
  })
}