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
