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
    <button id="home">Admin DashBboard</button>
    <button id="command">Cmmands page</button>
    <button id="log">Log out</button>
  </div> 
</div>
    `;

    // click home command log
    let home = document.getElementById("home");
    home.addEventListener("click", () => {
      window.location = "adminPage.html";
    });
    let command = document.getElementById("command");
    command.addEventListener("click", () => {
      window.location = "commands.php";
    });
    let log = document.getElementById("log");
    log.addEventListener("click", () => {
      window.location = "index.php";
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
