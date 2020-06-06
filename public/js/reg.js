//jshint esversion:6

var imageUrl = "";
var imgUrl = "";
$('.hollow').click(function() {
  imageUrl = $(this).attr("id");
  imgUrl = `/images/${imageUrl}.png`;
  sessionStorage.setItem("storageName", imgUrl);
});
imgUrl = sessionStorage.getItem("storageName");
$('#card-img').css('background-image', `url(${imgUrl})`);

$('#next').click(function() {
  let ticket = document.getElementById("tickets").value
  sessionStorage.setItem("no_tickets", ticket);
});
let tik = sessionStorage.getItem("no_tickets");
$('#input5').html(tik);


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
$('#input4').html(category);






var name1 = "";
var namef = "";
$('#next').click(function() {
  name1 = document.getElementById('fname').value;
  sessionStorage.setItem("firstname", name1);
});
namef = sessionStorage.getItem("firstname");
$('#inputs').html(namef);





var name2 = "";
var namel = "";
$('#next').click(function() {
  name2 = document.getElementById('lname').value;
  sessionStorage.setItem("lastname", name2);
});
namel = sessionStorage.getItem("lastname");
$('#input1').html(namel);





var eml = "";
var email = "";
$('#next').click(function() {
  eml = document.getElementById('email').value;
  sessionStorage.setItem("Email", eml);
});
email = sessionStorage.getItem("Email");
$('#input2').html(email);




var ph = "";
var phno = "";
$('#next').click(function() {
  ph = document.getElementById('contact').value;
  sessionStorage.setItem("Phone", ph);
});
phno = sessionStorage.getItem("Phone");
$('#input3').html(phno);



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
