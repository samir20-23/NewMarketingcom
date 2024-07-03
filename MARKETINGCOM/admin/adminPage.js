let selectedImageDiv = document.getElementById("selectedImage");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
let manage = document.getElementById("manage");
let hr = document.getElementById("hr");
let croud = document.getElementById("croud");
let back = document.getElementById("back");
let add = document.getElementById("add");
let closet = document.getElementById("closet");
let background = document.getElementById("background");
let allcrodtableselecte = document.getElementById("allcrodtableselecte");
let total = document.getElementById("total_services");
let mainPage = document.getElementById("mainPage");

closet.addEventListener("click", (e) => {
  background.style.display = "none";
  mainPage.style.filter = "blur(0px)";
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

let request = new XMLHttpRequest();
request.open("POST", "adminPage.php");
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();
request.onload = () => {
  let response = JSON.parse(request.response);
  console.log(response);
  total.innerHTML = response.length;
  response.services.forEach((item) => {
    // editinggg
    let tcheckType = "";
    if (item.service_price === null) {
      tcheckType = "service";
    } else {
      tcheckType = "sebservice";
    }
    //  tcheckType
    //                                              editinggg
    allcrodtableselecte.innerHTML += `<div id="${item.service_id}" name="${item.service_price}" class="selectedService">
    <p class="serName">${item.service_name}</p>
    <div class="form_btns">
      <a href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
      <a id="${item.service_id}" class="delete">Delete</a>
    </div>
  </div>`;
    //                                              editinggg
  });
  add.addEventListener("click", () => {
    const url = `adminAdd.html?&name=${"service"}`;
    window.location = url;
  });
  // new-----------------------------------------
  let Service = document.querySelectorAll(".selectedService");
  Service.forEach((forService) => {
    forService.addEventListener("click", () => {
      // xxxxx

      let request2 = new XMLHttpRequest();
      request2.open("POST", "serServices/serservices.php");
      request2.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      //
      request2.send(
        "id=" + forService.id + "&price=" + forService.getAttribute("name")
      );
      //

      request2.onload = () => {
        let response = JSON.parse(request2.response);
        console.log(response);
        total.innerHTML = response.length;
        allcrodtableselecte.innerHTML = "";
        response.serservices.forEach((item) => {
          // editinggg
          let tcheckType = "";
          if (item.service_price === null) {
            tcheckType = "service";
          } else {
            tcheckType = "sebservice";
          }
          //  tcheckType
          //                                              editinggg
          allcrodtableselecte.innerHTML += `
          <div id="${item.service_id}" name="${item.service_price}" class="selectedService">
          
          <p class="serName">${item.service_name}</p>  <p class="serName">${item.service_price}</p>
          <div class="form_btns">
            <a href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
            <a id="${item.service_id}" class="delete">Delete</a>
          </div>
        </div>`;
        });

        // ------------------------

        let confirmDeleteButton = document.getElementById("confirmDelete");
        let deleteServices = document.querySelectorAll(".delete");

        console.log(deleteServices);

        deleteServices.forEach((button) => {
          button.addEventListener("click", function (event) {
            event.stopPropagation();
            background.style.display = "flex";
            mainPage.style.filter = "blur(5px)";
            confirmDeleteButton.id = button.id;
          });
        });

        // ------------------------

        // seb services  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        let sebService = document.querySelectorAll(".selectedService");
        sebService.forEach((forSebService) => {
          forSebService.addEventListener("click", () => {
            // xxxxx

            let request3 = new XMLHttpRequest();
            request3.open("POST", "serServices/serservices.php");
            request3.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            );
            //

            request3.send(
              "id=" +
                forSebService.id +
                "&price=" +
                forSebService.getAttribute("name")
            );
            //
            let typeId = forSebService.id;

            request3.onload = () => {
              let response = JSON.parse(request3.response);
              console.log(response);
              total.innerHTML = response.length;
              allcrodtableselecte.innerHTML = "";

              // OPTIONSTART1
              // OPTIONSTART
              if (response.service == "service") {
                response.serservices.forEach((item) => {
                  // editinggg
                  let tcheckType = "";
                  if (item.service_price === null) {
                    tcheckType = "service";
                  } else {
                    tcheckType = "sebservice";
                  }
                  //   href="adminEdit.html?id=${item.service_id}&name=${tcheckType}"
                  //                                              editinggg
                  allcrodtableselecte.innerHTML += `
           <div id="${item.service_id}" name="${item.service_price}"  class="selectedService">
           
           <p class="serName">${item.service_name}</p> 
           <p class="serName">${item.service_price}</p>
           <div class="form_btns">
            <a  href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
            <a id="${item.service_id}" class="delete">Delete</a>
           </div>
           </div>`;
                });
           
                // ------------------------
           
                let confirmDeleteButton =
                  document.getElementById("confirmDelete");
                let deleteServices = document.querySelectorAll(".delete");
           
                console.log(deleteServices);
           
                deleteServices.forEach((button) => {
                  button.addEventListener("click", function (event) {
                    event.stopPropagation();
                    background.style.display = "flex";
                    mainPage.style.filter = "blur(5px)";
                    confirmDeleteButton.id = button.id;
                  });
                });
           
                // ------------------------
           
                // ????????????????????????????????????
                let sebService = document.querySelectorAll(".selectedService");
                sebService.forEach((forSebService) => {
                  forSebService.addEventListener("click", () => {
                    // optiooooo
           
                    let request3 = new XMLHttpRequest();
                    request3.open("POST", "serServices/serservices.php");
                    request3.setRequestHeader(
                      "Content-type",
                      "application/x-www-form-urlencoded"
                    );
                    //
           
                    request3.send(
                      "id=" +
                        forSebService.id +
                        "&price=" +
                        forSebService.getAttribute("name")
                    );
                    //
           
                    request3.onload = () => {
                      let response = JSON.parse(request3.response);
                      console.log(response);
                      total.innerHTML = response.length;
                      allcrodtableselecte.innerHTML = "";
                      // OPTIONSTART
                      if (response.service == "service") {
                        let idd = "";
                        response.serservices.forEach((item) => {
                          // editinggg
                          let tcheckType = "";
                          if (item.service_price === null) {
                            tcheckType = "service";
                          } else {
                            tcheckType = "sebservice";
                          }
                          idd = item.service_id;
                          //   href="adminEdit.html?id=${item.service_id}&name=${tcheckType}"
                          //                                              editinggg
                          allcrodtableselecte.innerHTML += `
           <div id="${item.service_id}" name="${item.service_price}"  class="selectedService">
           
           <p class="serName">${item.service_name}</p>  <p class="serName">${item.service_price}</p>
           <div class="form_btns">
            <a href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
            <a id="${item.service_id}" class="delete">Delete</a>
           </div>
           </div>`;
                        });
           
                        // ------------------------
           
                        let confirmDeleteButton =
                          document.getElementById("confirmDelete");
                        let deleteServices =
                          document.querySelectorAll(".delete");
           
                        console.log(deleteServices);
           
                        deleteServices.forEach((button) => {
                          button.addEventListener("click", function (event) {
                            event.stopPropagation();
                            background.style.display = "flex";
                            mainPage.style.filter = "blur(5px)";
                            confirmDeleteButton.id = button.id;
                          });
                        });
           
                        // ------------------------
           //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           let iddidd = idd;
                        let sebService =
                          document.querySelectorAll(".selectedService");
                          //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           
                        sebService.forEach((forSebService) => {
                         forSebService.addEventListener("click", () => {
                            // heeeeeeeeeeeeaaar
                              
           
                            let request3 = new XMLHttpRequest();
                            request3.open(
                              "POST",
                              "serServices/serservices.php"
                            );
                            request3.setRequestHeader(
                              "Content-type",
                              "application/x-www-form-urlencoded"
                            );
                            //
                            request3.send( "id=" +forSebService.id +"&price=" +forSebService.getAttribute("name") );
                            let typeId = forSebService.id;
                            request3.onload = () => {
                              let response = JSON.parse(request3.response);
                              console.log(response);
                              total.innerHTML = response.length;
                              allcrodtableselecte.innerHTML = "";
                             
                              response.optionn.forEach((item) => {
                                // <<<<<<< HEAD
                                const last_options = item.last_options.replace( /,/g, " " );
                                const primary_options =
                                  item.primary_options.replace(/,/g, " ");
                                const secondary_options =
                                  item.secondary_options.replace(/,/g, " ");
           
                               
           
                                allcrodtableselecte.innerHTML += `
            <div id="${item.option_id}" name="${item.service_price}"  class="selectedService"> 
               <p class="serName">${primary_options}</p>
               <p class="serName">${secondary_options}</p>
               <p class="serName">${last_options}</p> 
               <div class="form_btns">
                  <a href="adminEdit.html?id=${
                    item.option_id
                  }&name=${"option"}" class="edit">Edit</a>
                  <a id="${item.option_id}" class="deleteop">Delete</a>
               </div>
            </div>`;
            
                              });
                              add.addEventListener("click", () => {
                                const url = `adminAdd.html?typeId=${typeId}&name=${"option"}`;
                                window.location = url;
                              });
                              let confirmDeleteButton =
                                document.getElementById("confirmDelete");
                              let deleteServices =
                                document.querySelectorAll(".deleteop");
           
                              console.log(deleteServices);
           
                              deleteServices.forEach((button) => {
                                button.addEventListener(
                                  "click",
                                  function (event) {
                                    event.stopPropagation();
                                    background.style.display = "flex";
                                    mainPage.style.filter = "blur(5px)";
                                    confirmDeleteButton.id = button.id;
                                  }
                                );
                              });
           
                              confirmDeleteButton.addEventListener(
                                "click",
                                function () {
                                  let request = new XMLHttpRequest();
                                  request.open("POST", "adminPage.php");
                                  request.setRequestHeader(
                                    "Content-type",
                                    "application/x-www-form-urlencoded"
                                  );
                                  request.send(
                                    "id=" +
                                      confirmDeleteButton.id +
                                      "&deleteOption=" +
                                      "deleteOption"
                                  );
                                  request.onload = () => {
                                    let response = request.response;
                                    console.log(response);
                                    if (response == "verified") {
                                      window.location.reload();
                                    }
                                  };
                                }
                              );
                            };
                            //
                            // heeeeeeeeeeeeaaar
                          
                          });
                          
                        });
                        
                      }
                   
                    };
           
                    // teeeeeeeexts
                    document.getElementById("title").innerHTML =
                      "Manage Sub-Services >";
                    document.getElementById("totall").innerHTML =
                      "Total Sub-Services";
                    document.getElementById("add").innerHTML =
                      "Add New Sub-Services";
           
                    // back
                    back.addEventListener("click", () => {
                      window.location = "adminPage.html";
                    });
                    // add
           
                    let serviceId = forSebService.id;
                    add.addEventListener("click", () => {
                      const url = `adminAdd.html?serviceId=${serviceId}&sebserviceId=${"sebserviceId"}&name=${"sebservice"}`;
                      window.location = url;
                    });
                    
                  });
                  
                });
           //  GOOOP
           let sebServicee = document.querySelectorAll(".selectedService");
           sebServicee.forEach((forSebService) => {
            forSebService.addEventListener("click", () => {
              // xxxxx
           
              let request3 = new XMLHttpRequest();
              request3.open("POST", "serServices/serservices.php");
              request3.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              );
              //
           
              request3.send(
                "id=" +
                  forSebService.id +
                  "&price=" +
                  forSebService.getAttribute("name")
              );
              //
              let typeId = forSebService.id;
           
              request3.onload = () => {
                let response = JSON.parse(request3.response);
                console.log(response);
                total.innerHTML = response.length;
                allcrodtableselecte.innerHTML = "";
                // OPTIONSTART
                if (response.service == "service") {
                  response.serservices.forEach((item) => {
                    // editinggg
                    let tcheckType = "";
                    if (item.service_price === null) {
                      tcheckType = "service";
                    } else {
                      tcheckType = "sebservice";
                    }
                    //   href="adminEdit.html?id=${item.service_id}&name=${tcheckType}"
                    //                                              editinggg
                    allcrodtableselecte.innerHTML += `
            <div id="${item.service_id}" name="${item.service_price}"  class="selectedService">
            
            <p class="serName">${item.service_name}</p> 
             <p class="serName">${item.service_price}</p>
            <div class="form_btns">
              <a  href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
              <a id="${item.service_id}" class="delete">Delete</a>
            </div>
           </div>`;
                  });
           
                  // ------------------------
           
                  let confirmDeleteButton =
                    document.getElementById("confirmDelete");
                  let deleteServices = document.querySelectorAll(".delete");
           
                  console.log(deleteServices);
           
                  deleteServices.forEach((button) => {
                    button.addEventListener("click", function (event) {
                      event.stopPropagation();
                      background.style.display = "flex";
                      mainPage.style.filter = "blur(5px)";
                      confirmDeleteButton.id = button.id;
                    });
                  });
           
                  // ------------------------
           
                  // ????????????????????????????????????
                  let sebService = document.querySelectorAll(".selectedService");
                  sebService.forEach((forSebService) => {
                    forSebService.addEventListener("click", () => {
                      // xxxxx
           
                      let request3 = new XMLHttpRequest();
                      request3.open("POST", "serServices/serservices.php");
                      request3.setRequestHeader(
                        "Content-type",
                        "application/x-www-form-urlencoded"
                      );
                      //
           
                      request3.send(
                        "id=" +
                          forSebService.id +
                          "&price=" +
                          forSebService.getAttribute("name")
                      );
                      //
           
                      request3.onload = () => {
                        let response = JSON.parse(request3.response);
                        console.log(response);
                        total.innerHTML = response.length;
                        allcrodtableselecte.innerHTML = "";
                        // OPTIONSTART
                        if (response.service == "service") {
                          let idd = "";
                          response.serservices.forEach((item) => {
                            // editinggg
                            let tcheckType = "";
                            if (item.service_price === null) {
                              tcheckType = "service";
                            } else {
                              tcheckType = "sebservice";
                            }
                            idd = item.service_id;
                            //   href="adminEdit.html?id=${item.service_id}&name=${tcheckType}"
                            //                                              editinggg
                            allcrodtableselecte.innerHTML += `
            <div id="${item.service_id}" name="${item.service_price}"  class="selectedService">
            
            <p class="serName">${item.service_name}</p>  <p class="serName">${item.service_price}</p>
            <div class="form_btns">
              <a href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
              <a id="${item.service_id}" class="delete">Delete</a>
            </div>
           </div>`;
                          });
           
                          // ------------------------
           
                          let confirmDeleteButton =
                            document.getElementById("confirmDelete");
                          let deleteServices =
                            document.querySelectorAll(".delete");
           
                          console.log(deleteServices);
           
                          deleteServices.forEach((button) => {
                            button.addEventListener("click", function (event) {
                              event.stopPropagation();
                              background.style.display = "flex";
                              mainPage.style.filter = "blur(5px)";
                              confirmDeleteButton.id = button.id;
                            });
                          });
           
                          // ------------------------
           //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           let iddidd = idd;
                          let sebService =
                            document.querySelectorAll(".selectedService");
                            //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           
                          sebService.forEach((forSebService) => {
                           forSebService.addEventListener("click", () => {
                              // heeeeeeeeeeeeaaar
                                
           
                              let request3 = new XMLHttpRequest();
                              request3.open(
                                "POST",
                                "serServices/serservices.php"
                              );
                              request3.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                              );
                              //
                              request3.send( "id=" +forSebService.id +"&price=" +forSebService.getAttribute("name") );
                              let typeId = forSebService.id;
                              request3.onload = () => {
                                let response = JSON.parse(request3.response);
                                console.log(response);
                                total.innerHTML = response.length;
                                allcrodtableselecte.innerHTML = "";
                               
                                response.optionn.forEach((item) => {
                                  // <<<<<<< HEAD
                                  const last_options = item.last_options.replace( /,/g, " " );
                                  const primary_options =
                                    item.primary_options.replace(/,/g, " ");
                                  const secondary_options =
                                    item.secondary_options.replace(/,/g, " ");
           
                                 
           
                                  allcrodtableselecte.innerHTML += `
              <div id="${item.option_id}" name="${item.service_price}"  class="selectedService"> 
                 <p class="serName">${primary_options}</p>
                 <p class="serName">${secondary_options}</p>
                 <p class="serName">${last_options}</p> 
                 <div class="form_btns">
                    <a href="adminEdit.html?id=${
                      item.option_id
                    }&name=${"option"}" class="edit">Edit</a>
                    <a id="${item.option_id}" class="deleteop">Delete</a>
                 </div>
              </div>`;
                                });
                                add.addEventListener("click", () => {
                                  const url = `adminAdd.html?typeId=${typeId}&name=${"option"}`;
                                  window.location = url;
                                });
                                let confirmDeleteButton =
                                  document.getElementById("confirmDelete");
                                let deleteServices =
                                  document.querySelectorAll(".deleteop");
           
                                console.log(deleteServices);
           
                                deleteServices.forEach((button) => {
                                  button.addEventListener(
                                    "click",
                                    function (event) {
                                      event.stopPropagation();
                                      background.style.display = "flex";
                                      mainPage.style.filter = "blur(5px)";
                                      confirmDeleteButton.id = button.id;
                                    }
                                  );
                                });
           
                                confirmDeleteButton.addEventListener(
                                  "click",
                                  function () {
                                    let request = new XMLHttpRequest();
                                    request.open("POST", "adminPage.php");
                                    request.setRequestHeader(
                                      "Content-type",
                                      "application/x-www-form-urlencoded"
                                    );
                                    request.send(
                                      "id=" +
                                        confirmDeleteButton.id +
                                        "&deleteOption=" +
                                        "deleteOption"
                                    );
                                    request.onload = () => {
                                      let response = request.response;
                                      console.log(response);
                                      if (response == "verified") {
                                        window.location.reload();
                                      }
                                    };
                                  }
                                );
                              };
                              //
                              // heeeeeeeeeeeeaaar
                            });
                          });
                        }
                        document.getElementById("title").innerHTML =
                        "Manage option >";
                      document.getElementById("totall").innerHTML = "Total option";
                      document.getElementById("add").innerHTML = "Add New option";
                      };
           
                      // teeeeeeeexts
                      document.getElementById("title").innerHTML =
                        "Manage OPTION >";
                      document.getElementById("totall").innerHTML =
                        "Total OPTION";
                      document.getElementById("add").innerHTML =
                        "Add New OPTION";
           
                      // back
                      back.addEventListener("click", () => {
                        window.location = "adminPage.html";
                      });
                      // add
           
                      let serviceId = forSebService.id;
                      add.addEventListener("click", () => {
                        const url = `adminAdd.html?serviceId=${serviceId}&sebserviceId=${"sebserviceId"}&name=${"sebservice"}`;
                        window.location = url;
                      });
                    });
                  });
                  let sebServicee = document.querySelectorAll(".selectedService");
                  sebServicee.forEach((forSebService) => {
                    forSebService.addEventListener("click", () => {
                      // xxxxx
           
                      let request3 = new XMLHttpRequest();
                      request3.open("POST", "serServices/serservices.php");
                      request3.setRequestHeader(
                        "Content-type",
                        "application/x-www-form-urlencoded"
                      );
                      //
           
                      request3.send(
                        "id=" +
                          forSebService.id +
                          "&price=" +
                          forSebService.getAttribute("name")
                      );
                      //
                      let typeId = forSebService.id;
           
                      request3.onload = () => {
                        let response = JSON.parse(request3.response);
                        console.log(response);
                        total.innerHTML = response.length;
                        allcrodtableselecte.innerHTML = "";
                        // OPTIONSTART
                        if (response.service == "service") {
                          response.serservices.forEach((item) => {
                            // editinggg
                            let tcheckType = "";
                            if (item.service_price === null) {
                              tcheckType = "service";
                            } else {
                              tcheckType = "sebservice";
                            }
                            //   href="adminEdit.html?id=${item.service_id}&name=${tcheckType}"
                            //                                              editinggg
                            allcrodtableselecte.innerHTML += `
                    <div id="${item.service_id}" name="${item.service_price}"  class="selectedService">
                    
                    <p class="serName">${item.service_name}</p> 
                     <p class="serName">${item.service_price}</p>
                    <div class="form_btns">
                      <a  href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
                      <a id="${item.service_id}" class="delete">Delete</a>
                    </div>
                  </div>`;
                          });
           
                          // ------------------------
           
                          let confirmDeleteButton =
                            document.getElementById("confirmDelete");
                          let deleteServices = document.querySelectorAll(".delete");
           
                          console.log(deleteServices);
           
                          deleteServices.forEach((button) => {
                            button.addEventListener("click", function (event) {
                              event.stopPropagation();
                              background.style.display = "flex";
                              mainPage.style.filter = "blur(5px)";
                              confirmDeleteButton.id = button.id;
                            });
                          });
           
                          // ------------------------
           
                          // ????????????????????????????????????
                          let sebService = document.querySelectorAll(".selectedService");
                          sebService.forEach((forSebService) => {
                            forSebService.addEventListener("click", () => {
                              // xxxxx
           
                              let request3 = new XMLHttpRequest();
                              request3.open("POST", "serServices/serservices.php");
                              request3.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                              );
                              //
           
                              request3.send(
                                "id=" +
                                  forSebService.id +
                                  "&price=" +
                                  forSebService.getAttribute("name")
                              );
                              //
           
                              request3.onload = () => {
                                let response = JSON.parse(request3.response);
                                console.log(response);
                                total.innerHTML = response.length;
                                allcrodtableselecte.innerHTML = "";
                                // OPTIONSTART
                                if (response.service == "service") {
                                  let idd = "";
                                  response.serservices.forEach((item) => {
                                    // editinggg
                                    let tcheckType = "";
                                    if (item.service_price === null) {
                                      tcheckType = "service";
                                    } else {
                                      tcheckType = "sebservice";
                                    }
                                    idd = item.service_id;
                                    //   href="adminEdit.html?id=${item.service_id}&name=${tcheckType}"
                                    //                                              editinggg
                                    allcrodtableselecte.innerHTML += `
                    <div id="${item.service_id}" name="${item.service_price}"  class="selectedService">
                    
                    <p class="serName">${item.service_name}</p>  <p class="serName">${item.service_price}</p>
                    <div class="form_btns">
                      <a href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
                      <a id="${item.service_id}" class="delete">Delete</a>
                    </div>
                  </div>`;
                                  });
           
                                  // ------------------------
           
                                  let confirmDeleteButton =
                                    document.getElementById("confirmDelete");
                                  let deleteServices =
                                    document.querySelectorAll(".delete");
           
                                  console.log(deleteServices);
           
                                  deleteServices.forEach((button) => {
                                    button.addEventListener("click", function (event) {
                                      event.stopPropagation();
                                      background.style.display = "flex";
                                      mainPage.style.filter = "blur(5px)";
                                      confirmDeleteButton.id = button.id;
                                    });
                                  });
           
                                  // ------------------------
           //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           let iddidd = idd;
                                  let sebService =
                                    document.querySelectorAll(".selectedService");
                                    //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           
                                  sebService.forEach((forSebService) => {
                                   forSebService.addEventListener("click", () => {
                                      // heeeeeeeeeeeeaaar
                                        
           
                                      let request3 = new XMLHttpRequest();
                                      request3.open(
                                        "POST",
                                        "serServices/serservices.php"
                                      );
                                      request3.setRequestHeader(
                                        "Content-type",
                                        "application/x-www-form-urlencoded"
                                      );
                                      //
                                      request3.send( "id=" +forSebService.id +"&price=" +forSebService.getAttribute("name") );
                                      let typeId = forSebService.id;
                                      request3.onload = () => {
                                        let response = JSON.parse(request3.response);
                                        console.log(response);
                                        total.innerHTML = response.length;
                                        allcrodtableselecte.innerHTML = "";
                                       
                                        response.optionn.forEach((item) => {
                                          // <<<<<<< HEAD
                                          const last_options = item.last_options.replace( /,/g, " " );
                                          const primary_options =
                                            item.primary_options.replace(/,/g, " ");
                                          const secondary_options =
                                            item.secondary_options.replace(/,/g, " ");
           
                                         
           
                                          allcrodtableselecte.innerHTML += `
                      <div id="${item.option_id}" name="${item.service_price}"  class="selectedService"> 
                         <p class="serName">${primary_options}</p>
                         <p class="serName">${secondary_options}</p>
                         <p class="serName">${last_options}</p> 
                         <div class="form_btns">
                            <a href="adminEdit.html?id=${
                              item.option_id
                            }&name=${"option"}" class="edit">Edit</a>
                            <a id="${item.option_id}" class="deleteop">Delete</a>
                         </div>
                      </div>`;
                                        });
                                        add.addEventListener("click", () => {
                                          const url = `adminAdd.html?typeId=${typeId}&name=${"option"}`;
                                          window.location = url;
                                        });
                                        let confirmDeleteButton =
                                          document.getElementById("confirmDelete");
                                        let deleteServices =
                                          document.querySelectorAll(".deleteop");
           
                                        console.log(deleteServices);
           
                                        deleteServices.forEach((button) => {
                                          button.addEventListener(
                                            "click",
                                            function (event) {
                                              event.stopPropagation();
                                              background.style.display = "flex";
                                              mainPage.style.filter = "blur(5px)";
                                              confirmDeleteButton.id = button.id;
                                            }
                                          );
                                        });
           
                                        confirmDeleteButton.addEventListener(
                                          "click",
                                          function () {
                                            let request = new XMLHttpRequest();
                                            request.open("POST", "adminPage.php");
                                            request.setRequestHeader(
                                              "Content-type",
                                              "application/x-www-form-urlencoded"
                                            );
                                            request.send(
                                              "id=" +
                                                confirmDeleteButton.id +
                                                "&deleteOption=" +
                                                "deleteOption"
                                            );
                                            request.onload = () => {
                                              let response = request.response;
                                              console.log(response);
                                              if (response == "verified") {
                                                window.location.reload();
                                              }
                                            };
                                          }
                                        );
                                        document.getElementById("title").innerHTML =
                                        "Manage option >";
                                      document.getElementById("totall").innerHTML = "Total option";
                                      document.getElementById("add").innerHTML = "Add New option";
                                      };
                                      //
                                      // heeeeeeeeeeeeaaar
                                    });
                                  });
                                }
                                document.getElementById("title").innerHTML =
                                "Manage option >";
                              document.getElementById("totall").innerHTML = "Total option";
                              document.getElementById("add").innerHTML = "Add New option";
                              };
           
                              // teeeeeeeexts
                              document.getElementById("title").innerHTML =
                                "Manage Sub-Services >";
                              document.getElementById("totall").innerHTML =
                                "Total Sub-Services";
                              document.getElementById("add").innerHTML =
                                "Add New Sub-Services";
           
                              // back
                              back.addEventListener("click", () => {
                                window.location = "adminPage.html";
                              });
                              // add
           
                              let serviceId = forSebService.id;
                              add.addEventListener("click", () => {
                                const url = `adminAdd.html?serviceId=${serviceId}&sebserviceId=${"sebserviceId"}&name=${"sebservice"}`;
                                window.location = url;
                              });
                            });
                          });
                          // ????????????????????????????????????
                          let sebServicee = document.querySelectorAll(".selectedService");
           sebServicee.forEach((forSebService) => {
           forSebService.addEventListener("click", () => {
           // xxxxx
           
           let request3 = new XMLHttpRequest();
           request3.open("POST", "serServices/serservices.php");
           request3.setRequestHeader(
           "Content-type",
           "application/x-www-form-urlencoded"
           );
           //
           
           request3.send(
           "id=" +
           forSebService.id +
           "&price=" +
           forSebService.getAttribute("name")
           );
           //
           let typeId = forSebService.id;
           
           request3.onload = () => {
           let response = JSON.parse(request3.response);
           console.log(response);
           total.innerHTML = response.length;
           allcrodtableselecte.innerHTML = "";
           // OPTIONSTART
           if (response.service == "service") {
           response.serservices.forEach((item) => {
           // editinggg
           let tcheckType = "";
           if (item.service_price === null) {
            tcheckType = "service";
           } else {
            tcheckType = "sebservice";
           }
           //   href="adminEdit.html?id=${item.service_id}&name=${tcheckType}"
           //                                              editinggg
           allcrodtableselecte.innerHTML += `
           <div id="${item.service_id}" name="${item.service_price}"  class="selectedService">
           
           <p class="serName">${item.service_name}</p> 
           <p class="serName">${item.service_price}</p>
           <div class="form_btns">
           <a  href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
           <a id="${item.service_id}" class="delete">Delete</a>
           </div>
           </div>`;
           });
           
           // ------------------------
           
           let confirmDeleteButton =
           document.getElementById("confirmDelete");
           let deleteServices = document.querySelectorAll(".delete");
           
           console.log(deleteServices);
           
           deleteServices.forEach((button) => {
           button.addEventListener("click", function (event) {
            event.stopPropagation();
            background.style.display = "flex";
            mainPage.style.filter = "blur(5px)";
            confirmDeleteButton.id = button.id;
           });
           });
           
           // ------------------------
           
           // ????????????????????????????????????
           let sebService = document.querySelectorAll(".selectedService");
           sebService.forEach((forSebService) => {
           forSebService.addEventListener("click", () => {
            // xxxxx
           
            let request3 = new XMLHttpRequest();
            request3.open("POST", "serServices/serservices.php");
            request3.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            );
            //
           
            request3.send(
              "id=" +
                forSebService.id +
                "&price=" +
                forSebService.getAttribute("name")
            );
            //
           
            request3.onload = () => {
              let response = JSON.parse(request3.response);
              console.log(response);
              total.innerHTML = response.length;
              allcrodtableselecte.innerHTML = "";
              // OPTIONSTART
              if (response.service == "service") {
                let idd = "";
                response.serservices.forEach((item) => {
                  // editinggg
                  let tcheckType = "";
                  if (item.service_price === null) {
                    tcheckType = "service";
                  } else {
                    tcheckType = "sebservice";
                  }
                  idd = item.service_id;
                  //   href="adminEdit.html?id=${item.service_id}&name=${tcheckType}"
                  //                                              editinggg
                  allcrodtableselecte.innerHTML += `
           <div id="${item.service_id}" name="${item.service_price}"  class="selectedService">
           
           <p class="serName">${item.service_name}</p>  <p class="serName">${item.service_price}</p>
           <div class="form_btns">
           <a href="adminEdit.html?id=${item.service_id}&name=${tcheckType}" class="edit">Edit</a>
           <a id="${item.service_id}" class="delete">Delete</a>
           </div>
           </div>`;
                });
           
                // ------------------------
           
                let confirmDeleteButton =
                  document.getElementById("confirmDelete");
                let deleteServices =
                  document.querySelectorAll(".delete");
           
                console.log(deleteServices);
           
                deleteServices.forEach((button) => {
                  button.addEventListener("click", function (event) {
                    event.stopPropagation();
                    background.style.display = "flex";
                    mainPage.style.filter = "blur(5px)";
                    confirmDeleteButton.id = button.id;
                  });
                });
           
                // ------------------------
           //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           let iddidd = idd;
                let sebService =
                  document.querySelectorAll(".selectedService");
                  //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           
                sebService.forEach((forSebService) => {
                 forSebService.addEventListener("click", () => {
                    // heeeeeeeeeeeeaaar
                      
           
                    let request3 = new XMLHttpRequest();
                    request3.open(
                      "POST",
                      "serServices/serservices.php"
                    );
                    request3.setRequestHeader(
                      "Content-type",
                      "application/x-www-form-urlencoded"
                    );
                    //
                    request3.send( "id=" +forSebService.id +"&price=" +forSebService.getAttribute("name") );
                    let typeId = forSebService.id;
                    request3.onload = () => {
                      let response = JSON.parse(request3.response);
                      console.log(response);
                      total.innerHTML = response.length;
                      allcrodtableselecte.innerHTML = "";
                     
                      response.optionn.forEach((item) => {
                        // <<<<<<< HEAD
                        const last_options = item.last_options.replace( /,/g, " " );
                        const primary_options =
                          item.primary_options.replace(/,/g, " ");
                        const secondary_options =
                          item.secondary_options.replace(/,/g, " ");
           
                       
           
                        allcrodtableselecte.innerHTML += `
           <div id="${item.option_id}" name="${item.service_price}"  class="selectedService"> 
           <p class="serName">${primary_options}</p>
           <p class="serName">${secondary_options}</p>
           <p class="serName">${last_options}</p> 
           <div class="form_btns">
           <a href="adminEdit.html?id=${
            item.option_id
           }&name=${"option"}" class="edit">Edit</a>
           <a id="${item.option_id}" class="deleteop">Delete</a>
           </div>
           </div>`;
                      });
                      add.addEventListener("click", () => {
                        const url = `adminAdd.html?typeId=${typeId}&name=${"option"}`;
                        window.location = url;
                      });
                      let confirmDeleteButton =
                        document.getElementById("confirmDelete");
                      let deleteServices =
                        document.querySelectorAll(".deleteop");
           
                      console.log(deleteServices);
           
                      deleteServices.forEach((button) => {
                        button.addEventListener(
                          "click",
                          function (event) {
                            event.stopPropagation();
                            background.style.display = "flex";
                            mainPage.style.filter = "blur(5px)";
                            confirmDeleteButton.id = button.id;
                          }
                        );
                      });
           
                      confirmDeleteButton.addEventListener(
                        "click",
                        function () {
                          let request = new XMLHttpRequest();
                          request.open("POST", "adminPage.php");
                          request.setRequestHeader(
                            "Content-type",
                            "application/x-www-form-urlencoded"
                          );
                          request.send(
                            "id=" +
                              confirmDeleteButton.id +
                              "&deleteOption=" +
                              "deleteOption"
                          );
                          request.onload = () => {
                            let response = request.response;
                            console.log(response);
                            if (response == "verified") {
                              window.location.reload();
                            }
                          };
                        }
                      );
                    };
                    //
                    // heeeeeeeeeeeeaaar
                  });
                });
              }
              document.getElementById("title").innerHTML =
              "Manage option >";
            document.getElementById("totall").innerHTML = "Total option";
            document.getElementById("add").innerHTML = "Add New option";
            };
           
            // teeeeeeeexts
            document.getElementById("title").innerHTML =
              "Manage Sub-Services >";
            document.getElementById("totall").innerHTML =
              "Total Sub-Services";
            document.getElementById("add").innerHTML =
              "Add New Sub-Services";
           
            // back
            back.addEventListener("click", () => {
              window.location = "adminPage.html";
            });
            // add
           
            let serviceId = forSebService.id;
            add.addEventListener("click", () => {
              const url = `adminAdd.html?serviceId=${serviceId}&sebserviceId=${"sebserviceId"}&name=${"sebservice"}`;
              window.location = url;
            });
           });
           });
           // ????????????????????????????????????
           }
           // ........
           if (response.service == "sebservice") {
           let idd = "";
           response.optionn.forEach((item) => {
           const last_options = item.last_options.replace(/,/g, " ");
           const primary_options = item.primary_options.replace(
            /,/g,
            " "
           );
           const secondary_options = item.secondary_options.replace(
            /,/g,
            " "
           );
           idd = item.service_id;
           allcrodtableselecte.innerHTML += `
           <div id="${item.option_id}" class="selectedService">
           
           <p class="serName">${primary_options}</p>
           <p class="serName">${secondary_options}</p> 
           <p class="serName">${last_options}</p> 
           <div class="form_btns">
           <a href="adminEdit.html?id=${
           item.option_id
           }&name=${"option"}" class="edit">Edit</a>
           <a id="${item.option_id}" class="deleteop">Delete</a>
           </div>
           </div>`;
           });
           add.addEventListener("click", () => {
           const url = `adminAdd.html?typeId=${typeId}&name=${"option"}`;
           window.location = url;
           });
           
           let confirmDeleteButton =
           document.getElementById("confirmDelete");
           let deleteServices = document.querySelectorAll(".deleteop");
           
           console.log(deleteServices);
           
           deleteServices.forEach((button) => {
           button.addEventListener("click", function (event) {
            event.stopPropagation();
            background.style.display = "flex";
            mainPage.style.filter = "blur(5px)";
            confirmDeleteButton.id = button.id;
           });
           });
           //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           let iddidd = idd;
           
           confirmDeleteButton.addEventListener("click", function () {
           console.log(iddidd);
           let request = new XMLHttpRequest();
           request.open("POST", "adminPage.php");
           request.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
           );
           request.send(
            "id=" +
              confirmDeleteButton.id +
              "&deleteOption=" +
              "deleteOption"
           );
           request.onload = () => {
            let response = request.response;
            console.log(response);
            if (response == "verified") {
              window.location.reload();
            }
            
           };
           });
           }
           // OPTIONSTART
           document.getElementById("title").innerHTML =
           "Manage Option >";
           document.getElementById("totall").innerHTML = "Total Option";
           document.getElementById("add").innerHTML = "Add New Option";
           
           };
           
           // teeeeeeeexts
           
           // back
           back.addEventListener("click", () => {
           window.location = "adminPage.html";
           });
           // add
           
           let serviceId = forSebService.id;
           add.addEventListener("click", () => {
           const url = `adminAdd.html?serviceId=${serviceId}&sebserviceId=${"sebserviceId"}&name=${"sebservice"}`;
           window.location = url;
           });
           });
           });
                        }
                        // ........
                        if (response.service == "sebservice") {
                          let idd = "";
                          response.optionn.forEach((item) => {
                            const last_options = item.last_options.replace(/,/g, " ");
                            const primary_options = item.primary_options.replace(
                              /,/g,
                              " "
                            );
                            const secondary_options = item.secondary_options.replace(
                              /,/g,
                              " "
                            );
                            idd = item.service_id;
                            allcrodtableselecte.innerHTML += `
                      <div id="${item.option_id}" class="selectedService">
                      
                       <p class="serName">${primary_options}</p>
                      <p class="serName">${secondary_options}</p> 
                      <p class="serName">${last_options}</p> 
                      <div class="form_btns">
                        <a href="adminEdit.html?id=${
                          item.option_id
                        }&name=${"option"}" class="edit">Edit</a>
                        <a id="${item.option_id}" class="deleteop">Delete</a>
                      </div>
                    </div>`;
                          });
                          add.addEventListener("click", () => {
                            const url = `adminAdd.html?typeId=${typeId}&name=${"option"}`;
                            window.location = url;
                          });
           
                          let confirmDeleteButton =
                            document.getElementById("confirmDelete");
                          let deleteServices = document.querySelectorAll(".deleteop");
           
                          console.log(deleteServices);
           
                          deleteServices.forEach((button) => {
                            button.addEventListener("click", function (event) {
                              event.stopPropagation();
                              background.style.display = "flex";
                              mainPage.style.filter = "blur(5px)";
                              confirmDeleteButton.id = button.id;
                            });
                          });
           //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           let iddidd = idd;
           
                          confirmDeleteButton.addEventListener("click", function () {
                            console.log(iddidd);
                            let request = new XMLHttpRequest();
                            request.open("POST", "adminPage.php");
                            request.setRequestHeader(
                              "Content-type",
                              "application/x-www-form-urlencoded"
                            );
                            request.send(
                              "id=" +
                                confirmDeleteButton.id +
                                "&deleteOption=" +
                                "deleteOption"
                            );
                            request.onload = () => {
                              let response = request.response;
                              console.log(response);
                              if (response == "verified") {
                                window.location.reload();
                              }
                            };
                          });
                        }
                        // OPTIONSTART
                        
                      };
           
                      // teeeeeeeexts
                      document.getElementById("title").innerHTML =
                      "Manage Option >";
                    document.getElementById("totall").innerHTML = "Total Option";
                    document.getElementById("add").innerHTML = "Add New Option";
                
           
                      // back
                      back.addEventListener("click", () => {
                        window.location = "adminPage.html";
                      });
                      // add
           
                      let serviceId = forSebService.id;
                      add.addEventListener("click", () => {
                        const url = `adminAdd.html?serviceId=${serviceId}&sebserviceId=${"sebserviceId"}&name=${"sebservice"}`;
                        window.location = url;
                      });
                    });
                  });
                  // ????????????????????????????????????
                }
                // ........
                if (response.service == "sebservice") {
                  let idd = "";
                  response.optionn.forEach((item) => {
                    const last_options = item.last_options.replace(/,/g, " ");
                    const primary_options = item.primary_options.replace(
                      /,/g,
                      " "
                    );
                    const secondary_options = item.secondary_options.replace(
                      /,/g,
                      " "
                    );
                    idd = item.service_id;
                    allcrodtableselecte.innerHTML += `
              <div id="${item.option_id}" class="selectedService">
              
               <p class="serName">${primary_options}</p>
              <p class="serName">${secondary_options}</p> 
              <p class="serName">${last_options}</p> 
              <div class="form_btns">
                <a href="adminEdit.html?id=${
                  item.option_id
                }&name=${"option"}" class="edit">Edit</a>
                <a id="${item.option_id}" class="deleteop">Delete</a>
              </div>
            </div>`;
                  });
                  add.addEventListener("click", () => {
                    const url = `adminAdd.html?typeId=${typeId}&name=${"option"}`;
                    window.location = url;
                  });
           
                  let confirmDeleteButton =
                    document.getElementById("confirmDelete");
                  let deleteServices = document.querySelectorAll(".deleteop");
           
                  console.log(deleteServices);
           
                  deleteServices.forEach((button) => {
                    button.addEventListener("click", function (event) {
                      event.stopPropagation();
                      background.style.display = "flex";
                      mainPage.style.filter = "blur(5px)";
                      confirmDeleteButton.id = button.id;
                    });
                  });
           //let idd = ""; 
           //idd = item.service_id;
           
           // let iddidd = idd;
           // console.log(iddidd);
           let iddidd = idd;
           
                  confirmDeleteButton.addEventListener("click", function () {
                    console.log(iddidd);
                    let request = new XMLHttpRequest();
                    request.open("POST", "adminPage.php");
                    request.setRequestHeader(
                      "Content-type",
                      "application/x-www-form-urlencoded"
                    );
                    request.send(
                      "id=" +
                        confirmDeleteButton.id +
                        "&deleteOption=" +
                        "deleteOption"
                    );
                    request.onload = () => {
                      let response = request.response;
                      console.log(response);
                      if (response == "verified") {
                        window.location.reload();
                      }
                    };
                  });
                }
                // OPTIONSTART
                document.getElementById("title").innerHTML =
                "Manage Option >";
              document.getElementById("totall").innerHTML = "Total Option";
              document.getElementById("add").innerHTML = "Add New Option";
              };
           
              // teeeeeeeexts
              

           
              // back
              back.addEventListener("click", () => {
                window.location = "adminPage.html";
              });
              // add
           
              let serviceId = forSebService.id;
              add.addEventListener("click", () => {
                const url = `adminAdd.html?serviceId=${serviceId}&sebserviceId=${"sebserviceId"}&name=${"sebservice"}`;
                window.location = url;
              });
            });
           });
                // ????????????????????????????????????
              }
              // ........
              if (response.service == "sebservice") {
                let idd = "";
                response.optionn.forEach((item) => {
                  const last_options = item.last_options.replace(/,/g, " ");
                  const primary_options = item.primary_options.replace(
                    /,/g,
                    " "
                  );
                  const secondary_options = item.secondary_options.replace(
                    /,/g,
                    " "
                  );
                  idd = item.service_id;
                  allcrodtableselecte.innerHTML += `
            <div id="${item.option_id}" class="selectedService">
            
             <p class="serName">${primary_options}</p>
            <p class="serName">${secondary_options}</p> 
            <p class="serName">${last_options}</p> 
            <div class="form_btns">
              <a href="adminEdit.html?id=${
                item.option_id
              }&name=${"option"}" class="edit">Edit</a>
              <a id="${item.option_id}" class="deleteop">Delete</a>
            </div>
          </div>`;
                });
                add.addEventListener("click", () => {
                  const url = `adminAdd.html?typeId=${typeId}&name=${"option"}`;
                  window.location = url;
                });

                let confirmDeleteButton =
                  document.getElementById("confirmDelete");
                let deleteServices = document.querySelectorAll(".deleteop");

                console.log(deleteServices);

                deleteServices.forEach((button) => {
                  button.addEventListener("click", function (event) {
                    event.stopPropagation();
                    background.style.display = "flex";
                    mainPage.style.filter = "blur(5px)";
                    confirmDeleteButton.id = button.id;
                  });
                });
//let idd = ""; 
//idd = item.service_id;

// let iddidd = idd;
// console.log(iddidd);
let iddidd = idd;

                confirmDeleteButton.addEventListener("click", function () {
                  console.log(iddidd);
                  let request = new XMLHttpRequest();
                  request.open("POST", "adminPage.php");
                  request.setRequestHeader(
                    "Content-type",
                    "application/x-www-form-urlencoded"
                  );
                  request.send(
                    "id=" +
                      confirmDeleteButton.id +
                      "&deleteOption=" +
                      "deleteOption"
                  );
                  request.onload = () => {
                    let response = request.response;
                    console.log(response);
                    if (response == "verified") {
                      window.location.reload();
                    }
                  };
                });
              }
              // OPTIONSTART
            };

            // teeeeeeeexts
            document.getElementById("title").innerHTML =
              "Manage Sub-Services >";
            document.getElementById("totall").innerHTML = "Total Sub-Services";
            document.getElementById("add").innerHTML = "Add New Sub-Services";

            // back
            back.addEventListener("click", () => {
              window.location = "adminPage.html";
            });
            // add

            let serviceId = forSebService.id;
            add.addEventListener("click", () => {
              const url = `adminAdd.html?serviceId=${serviceId}&sebserviceId=${"sebserviceId"}&name=${"sebservice"}`;
              window.location = url;
            });
          });
        });

        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      };

      // teeeeeeeexts
      document.getElementById("title").innerHTML = "Manage Sub-Services >";
      document.getElementById("totall").innerHTML = "Total Sub-Services";
      document.getElementById("add").innerHTML = "Add New Sub-Services";

      // back
      back.addEventListener("click", () => {
        window.location = "adminPage.html";
      });
      // add

      let serviceId = forService.id;
      add.addEventListener("click", () => {
        const url = `adminAdd.html?serviceId=${serviceId}&name=${"sebservice"}`;
        window.location = url;
      });
    });
  });

  let confirmDeleteButton = document.getElementById("confirmDelete");
  let deleteServices = document.querySelectorAll(".delete");

  console.log(deleteServices);

  deleteServices.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      background.style.display = "flex";
      mainPage.style.filter = "blur(5px)";
      confirmDeleteButton.id = button.id;
    });
  });

  confirmDeleteButton.addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.open("POST", "adminPage.php");
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    request.send("id=" + confirmDeleteButton.id + "&delete=" + "delete");
    request.onload = () => {
      let response = request.response;
      if (response == "verified") {
        window.location.reload();
      }
    };
  });
};
