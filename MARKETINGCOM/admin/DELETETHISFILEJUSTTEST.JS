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
                     document.getElementById("totall").style.background="green";
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
           document.getElementById("totall").style.background="black";
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
                           document.getElementById("totall").style.background="blue";
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
                   document.getElementById("totall").style.background="hotpink";
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
 document.getElementById("totall").style.background="coral";
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
document.getElementById("totall").style.background="blue";

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
           document.getElementById("totall").style.background="blue";

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
     // ????????????????????????????????????
   }