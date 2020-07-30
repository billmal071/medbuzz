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
let formId = "5f1d4a9b1314b40008a0b272";
let testForm = document.querySelector("#contact form");

function emailValidation(e) {
  //console.log(document.getElementById("emailTxt").value);
  let emailForm = document.getElementById("emailTxt").value;
  if (emailForm == "" || !emailForm.match(mailFormat)) {
    document.getElementById("errorMsg").classList.add("show-error");
    document.getElementById("errorMsg").classList.remove("d-none");
  } else {
    e.preventDefault();
    checkForEmail();
    // check for the mail function
    function checkForEmail() {
      fetch(`https://api.netlify.com/api/v1/forms/${formId}/submissions`, {
          method: 'get',
          headers: {
            Authorization: 'Bearer e2bf9307635011f6eaf4849f4c96d4cc5365823d4d66188652eb0c91ddcc48e1'
          }
        })
        .then(res => res.json())
        .then(data => {
          //console.log(data);
          //Extract all mails into an array
          let emails = data.map(val => val.email)
          console.log(emails);
          if (emails.includes(emailForm)) {
            document.getElementById("submission").innerHTML = `${emailForm} already exists`;
            //alert(`${emailForm} already exists`)
            $("#emailMatch").modal();
          } else {
            submitForm();
          }
        })
        .catch(err => console.log(err));
    }
    // sumbit form if email not in database
    function submitForm() {
      const formData = new FormData(testForm);
      fetch(testForm.getAttribute('action'), {
          method: 'POST',
          headers: {
            'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: new URLSearchParams(formData).toString()
        })
        .then(res => {
          if (res) {
            console.log(res);
            //alert("Thank you for your submission")
            //console.log(`thank you for your submission`)
            $("#emailSuccess").modal();
          }
        })
    }
  }
  document.getElementById("closeErr").addEventListener("click", () => {
    document.getElementById("errorMsg").classList.remove("show-error");
    document.getElementById("errorMsg").classList.add("d-none");
  })
}