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
    let command = document.getElementById("command");
    let log = document.getElementById("log");

    home.addEventListener("click", () => {
      window.location = "adminPage.html";
    });

    command.addEventListener("click", () => {
      window.location = "commands.php";
    });
    
    log.addEventListener("click", () => {
      let request = new XMLHttpRequest();
      request.open("POST", "adminPage.php");
      request.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      request.send("logout=" + "logout");
      request.onload = () => {
        let response = JSON.parse(request.response);
        console.log(response);
        if (response = "getout") {
          window.location = "index.php";
        }
      };
    });

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
