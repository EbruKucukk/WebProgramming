var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
window.onload = function() {
    document.getElementById("myModal").style.display = "none";
  };

  function showModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("modal-open");
  }
  
  function hideModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("modal-open");
  }