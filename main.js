
let coll = document.getElementsByClassName("collapse");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let open = this.nextElementSibling;
    if (open.style.display === "block") {
      open.style.display = "none";
    } else {
      open.style.display = "block";
    }
  });
}

// let show = document.getElementsByClassName("collapse")
//
// function pop() {
//  show.addEventListener('click', function() {
//    this.classList.toggle("active");
//    // let content = this.nextElementSibling;
//    // if (content.style.display ==="block") {
//    //   content.style.display = "none";
//    // } else {
//    //   content.style.display ="block"
//    // }
//  })
// }
//
// function myFunction() {
//   document.getElementsByClassName()
// }
