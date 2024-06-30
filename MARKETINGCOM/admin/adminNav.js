let allNavBar = document.getElementById("allNavBar");
let iconNavBar = document.getElementById("iconNavBar");
let selectedImageDiv = document.getElementById("selectedImage");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
let manage = document.getElementById("manage");
let hr = document.getElementById("hr");
let croud = document.getElementById("croud");
let back = document.getElementById("back");
let add = document.getElementById("add");
let closet = document.getElementById("closet");
let background = document.getElementById("background")
let allcrodtableselecte = document.getElementById("allcrodtableselecte");
let total = document.getElementById("total_services");

closet.addEventListener('click', e => {
  background.style.display = 'none'
  console.log(closet);
})

add.addEventListener("click", () => {
  window.location = "adminAdd.html";
});

manage.addEventListener("click", () => {
  hr.style.display = "block";
  croud.style.display = "flex";
  back.style.display = "inline-block";
  manage.style.display = "none";
  add.style.display = "inline-block";
  document.getElementById("title").innerHTML = "Manage Services >";
});

back.addEventListener("click", () => {
  hr.style.display = "none";
  croud.style.display = "none";
  back.style.display = "none";
  manage.style.display = "flex";
  add.style.display = "none";
  document.getElementById("title").innerHTML = "Admin Dashboard >";

});

let click = "";
iconNavBar.addEventListener("click", () => {
  click = "click";

  if (click == "click") {
    allNavBar.setAttribute("style", " animation: moveNavBar 0.01s alternate");
    allNavBar.innerHTML = `
    <div id="navBar" class="navBar"> 
  <div id="divIconNavBar"><i class="fa fa-times" id="clossNavBar" aria-hidden="true"></i></div> 
  <div id="contentNavBar">
    <button id="home">admin dashboard</button>
    <button id="logIn">Log In</button>
    <button id="contact">Contact Us</button>
  </div> 
</div>
    `;

    // click home login contact
    let home = document.getElementById("home");
    home.addEventListener("click", () => {
      window.location = "adminPage.html";
    });
    let logIn = document.getElementById("logIn");
    logIn.addEventListener("click", () => {
      window.location = "";

    });
    let contact = document.getElementById("contact");
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

// --------------------------------------------------------------------

let request = new XMLHttpRequest();
request.open("POST", "adminPage.php");
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();
request.onload = () => {
  let response = JSON.parse(request.response);
  console.log(response);
  total.innerHTML = response.length;
  response.services.forEach((item) => {
    allcrodtableselecte.innerHTML += `<div id="${item.service_id}" class="selectedService">
    <p class="serName">${item.service_name}</p>
    <div class="form_btns">
      <a href="adminEdit.html?id='${item.service_id}'" class="edit">Edit</a>
      <a id="${item.service_id}" class="delete">Delete</a>
    </div>
  </div>`;
  });
  let confirmDeleteButton = document.getElementById("confirmDelete");
  let deleteServices = document.querySelectorAll(".delete");
  deleteServices.forEach(button => {
    button.addEventListener("click", function () {
      background.style.display = "flex";
      confirmDeleteButton.id = button.id
    })
  })

  confirmDeleteButton.addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.open("POST", "adminPage.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("id=" + confirmDeleteButton.id + "&delete=" + "delete");
    request.onload = () => {
      let response = request.response;
      if (response == "verified") {
        window.location.reload();
      }
    }
  })
}

//delete services


// document.addEventListener("DOMContentLoaded", function () {
//   const deleteButtons = document.querySelectorAll(".deleteButton");
//   const background = document.getElementById("background");
//   const closetButton = document.getElementById("closet");
//   let currentServiceId;

//   deleteButtons.forEach(button => {
//     button.addEventListener("click", function () {
//       currentServiceId = this.getAttribute("data-id");
//       background.style.display = "flex";
//     });
//   });

//   closetButton.addEventListener("click", function () {
//     background.style.display = "none";
//   });

//   confirmDeleteButton.addEventListener("click", function () {
//     const form = document.createElement("form");
//     form.method = "POST";

//     const hiddenField = document.createElement("input");
//     hiddenField.type = "hidden";
//     hiddenField.name = "delete_" + currentServiceId;
//     hiddenField.value = "Delete";

//     form.appendChild(hiddenField);
//     document.body.appendChild(form);
//     form.submit();
//   });

// });