function showMenu() {
    const nav = document.getElementById("mobile-nav")
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
}

setTimeout(() => {
  document.getElementById('road1').style.display = "none";
  document.getElementById('road2').style.display = "flex";
  document.getElementById('road2').style.opacity = "1";
  document.getElementById('road2').style.zIndex = "2";
  document.getElementById('road2').style.visibility = "unset";
  document.getElementById('span').innerHTML = "15%"
}, 1500);