let allNavBar = document.getElementById("allNavBar");
let iconNavBar = document.getElementById("iconNavBar");
let click = "";
iconNavBar.addEventListener("click", () => {
  click = "click";

  if (click == "click") {
    allNavBar.setAttribute("style", " animation: moveNavBar 0.01s alternate");
    allNavBar.innerHTML = `
    <div id="navBar" class="navBar"> 
  <div id="divIconNavBar"><i class="fa fa-times" id="clossNavBar" aria-hidden="true"></i></div> 
  <div id="contentNavBar">
    <button id="home">Home</button>
    <button id="contact">Contact Us</button>
    <button id="logIn">Log In</button>
  </div> 
</div>
    `;

    // click home login contact
    let logIn = document.getElementById("logIn");
    let contact = document.getElementById("contact");
    let home = document.getElementById("home");

    if (localStorage.getItem("userPhone") && localStorage.getItem("userName")) {
      logIn.innerHTML = "Log-Out";
      logIn.addEventListener("click", () => {
        localStorage.removeItem("userPhone");
        localStorage.removeItem("userName");
        window.location = "index.html";
      });
    } else {
      logIn.style.display = "none";
    }

    home.addEventListener("click", () => {
      window.location = "index.html";
    });

    contact.addEventListener("click", () => {
      window.location = "";
    });
  } else {
    allNavBar.innerHTML = "";
  }

  let clossNavBar = document.getElementById("clossNavBar");
  clossNavBar.addEventListener("click", () => {
    allNavBar.setAttribute("style", "");
    click = "";
    if (click == "") {
      allNavBar.innerHTML = "";
    }
  });
});
