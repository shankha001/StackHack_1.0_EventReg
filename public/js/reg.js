//jshint esversion:6

var imageUrl = "";
var imgUrl = "";
$('.hollow').click(function() {
  imageUrl = $(this).attr("id");
  imgUrl = `/images/${imageUrl}.png`;
  sessionStorage.setItem("storageName", imgUrl);
});
imgUrl = sessionStorage.getItem("storageName");
$('#card-img').css('background-image', `linear-gradient(to right bottom, rgba(144, 43, 177, 0.8), rgba(76, 73, 93, 0.95)),url(${imgUrl})`);


$('#next').click(function() {
  let profileUrl = document.getElementById("pic").files[0].name;
   let imgUrl = `/uploads/${profileUrl}`;
  sessionStorage.setItem("Profile-img", imgUrl);
});
let imgs = sessionStorage.getItem("Profile-img");
$('#card-images').css('background-image',`url(${imgs})`);







$('.hollow').click(function() {
  let id = $(this).attr("id");
  // alert(id);
  if(id === "event1"){
  let add = document.getElementById("address").innerHTML;
  sessionStorage.setItem("address", add);
}
if(id === "event2"){
  let add = document.getElementById("address2").innerHTML;
  sessionStorage.setItem("address", add);
}
if(id === "event3"){
  let add = document.getElementById("address3").innerHTML;
  sessionStorage.setItem("address", add);
}
if(id === "event4"){
  let add = document.getElementById("address4").innerHTML;
  sessionStorage.setItem("address", add);
}
if(id === "event5"){
  let add = document.getElementById("address5").innerHTML;
  sessionStorage.setItem("address", add);
}
if(id === "event6"){
  let add = document.getElementById("address6").innerHTML;
  sessionStorage.setItem("address", add);
}
});
let address = sessionStorage.getItem("address");
$('#add').html(address);






$('.hollow').click(function() {
  let id = $(this).attr("id");
  // alert(id);
  if(id === "event1"){
  let name = document.getElementById("Event1").innerHTML;
  sessionStorage.setItem("event_name", name);
}
if(id === "event2"){
  let name = document.getElementById("Event2").innerHTML;
  sessionStorage.setItem("event_name", name);
}
if(id === "event3"){
  let name = document.getElementById("Event3").innerHTML;
  sessionStorage.setItem("event_name", name);
}
if(id === "event4"){
  let name = document.getElementById("Event4").innerHTML;
  sessionStorage.setItem("event_name", name);
}
if(id === "event5"){
  let name = document.getElementById("Event5").innerHTML;
  sessionStorage.setItem("event_name", name);
}
if(id === "event6"){
  let name = document.getElementById("Event6").innerHTML;
  sessionStorage.setItem("event_name", name);
}


});
let eve = sessionStorage.getItem("event_name");
$('#eventName').html(eve);



$('.hollow').click(function() {
  let id = $(this).attr("id");
  // alert(id);
  if(id === "event1"){
  let p = document.getElementById("para1").innerHTML;
  sessionStorage.setItem("about", p);
}
if(id === "event2"){
  let p = document.getElementById("para2").innerHTML;
  sessionStorage.setItem("about", p);
}
if(id === "event3"){
  let p = document.getElementById("para3").innerHTML;
  sessionStorage.setItem("about", p);
}
if(id === "event4"){
  let p = document.getElementById("para4").innerHTML;
  sessionStorage.setItem("about", p);
}
if(id === "event5"){
  let p = document.getElementById("para5").innerHTML;
  sessionStorage.setItem("about", p);
}
if(id === "event6"){
  let p = document.getElementById("para6").innerHTML;
  sessionStorage.setItem("about", p);
}
});
let paragraph = sessionStorage.getItem("about");
$('#about').html(paragraph);




$('#next').click(function() {
  let ticket = document.getElementById("tickets").value
  sessionStorage.setItem("no_tickets", ticket);
});
let tik = sessionStorage.getItem("no_tickets");
$('#no_tik').html(tik);


var ele = "";
var i = 0;
var category = "";
$('#next').click(function() {
  ele=document.getElementsByName('group1');
  for(i = 0; i < ele.length; i++) {
                if(ele[i].checked) {
                  sessionStorage.setItem("category",ele[i].value);
                }

            }
});
category = sessionStorage.getItem("category");
$('#category').html(category);






var name1 = "";
var namef = "";
$('#next').click(function() {
  name1 = document.getElementById('fname').value;
  sessionStorage.setItem("firstname", name1);
});
namef = sessionStorage.getItem("firstname");
$('#fname').html(namef);





var name2 = "";
var namel = "";
$('#next').click(function() {
  name2 = document.getElementById('lname').value;
  sessionStorage.setItem("lastname", name2);
});
namel = sessionStorage.getItem("lastname");
$('#lname').html(namel);





var eml = "";
var email = "";
$('#next').click(function() {
  eml = document.getElementById('email').value;
  sessionStorage.setItem("Email", eml);
});
email = sessionStorage.getItem("Email");
$('#email').html(email);




var ph = "";
var phno = "";
$('#next').click(function() {
  ph = document.getElementById('contact').value;
  sessionStorage.setItem("Phone", ph);
});
phno = sessionStorage.getItem("Phone");
$('#phno').html(phno);



// Counter

var x = 1;

if ($('#self').is(':checked') === true) {

} else {
  function button1() {
    document.getElementById('output-area').innerHTML = ++x;
  }

  function button2() {
    if (x > 1) {
      document.getElementById('output-area').innerHTML = --x;
    }
  }
}

function register(k) {
  alert(document.getElementById(k).innerHTML);
}
//Reg Btn
