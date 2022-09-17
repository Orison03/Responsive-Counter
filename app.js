const btns = document.querySelectorAll(".btn");
// console.log(btns);
const value = document.querySelector("#value");
let initailNumber = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;
    if (classes.contains("increase")) {
      initailNumber++;
    } else if (classes.contains("decrease")) {
      initailNumber--;
    } else if (classes.contains("reset")) {
      initailNumber = 0;
    }
    
    if (initailNumber > 0) {
      value.style.color = "green";
    }
    if (initailNumber < 0) {
      value.style.color = "red";
    }
    if (initailNumber === 0) {
      value.style.color = "black";
    }
    value.textContent = initailNumber;
  });
});
