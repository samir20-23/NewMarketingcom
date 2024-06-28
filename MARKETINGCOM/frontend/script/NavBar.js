let allNavBar = document.getElementById("allNavBar");
let iconNavBar = document.getElementById("iconNavBar");
let click = "";
iconNavBar.addEventListener("click", () => {
    click = "click";
    
    if(click=="click"){
        allNavBar.setAttribute("style"," animation: moveNavBar 0.01s alternate")
        allNavBar.innerHTML = `
    <div id="navBar" class="navBar"> 
  <div id="divIconNavBar"><i class="fa fa-times" id="clossNavBar" aria-hidden="true"></i></div> 
  <div id="contentNavBar">
    <button id="home">Home</button>
    <button id="logIn">Log In</button>
    <button id="contact">Contact Us</button>
  </div> 
</div>
    `;

// click home login contact 
let home = document.getElementById("home");
  home.addEventListener("click", () => {
    window.location="index.html";
  });
  let logIn = document.getElementById("logIn");
  logIn.addEventListener("click", () => {
    window.location="";
  });
  let contact = document.getElementById("contact");
  contact.addEventListener("click", () => {
    window.location="";
  });
}else{
    allNavBar.innerHTML = "";
}

  let clossNavBar = document.getElementById("clossNavBar");
  clossNavBar.addEventListener("click", () => {
    allNavBar.setAttribute("style","")
    click="";
    if(click == ""){allNavBar.innerHTML = "";}
  }); 
});
