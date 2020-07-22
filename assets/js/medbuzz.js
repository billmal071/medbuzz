window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("bg-dark");
    //document.querySelector("svg#door").replaceWith("door");
  } else {
    document.getElementById("navbar").classList.remove("bg-dark");
  }
}