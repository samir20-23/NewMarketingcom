let whatsapp = document.getElementById("whatsapp");
let cancel = document.getElementById("cancel");

let mynumber = "+2120718087106";
whatsapp.addEventListener("click", () => {
  window.open(`https://web.whatsapp.com/send?phone=${mynumber}`, "_blank");
});

cancel.addEventListener("click", () => {
  localStorage.setItem("payment", "done");
  window.location = "index.html";
});