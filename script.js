// function using in hamburger
function showsidebar() {
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'block'
}
function hidesidebar() {
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    sidebar.style.transition = '0.5s'
}
window.addEventListener("load", function () {
  document.getElementById(".sidebar").style.display = "none";
});


