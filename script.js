console.log("asd")
let aboutme= document.getElementById("about").innerText;

var typed = new Typed('#about1', {
    strings: aboutme.split("~"),
    typeSpeed: 10,
    backSpeed: 0,
    loop: true
  });


function showDetails(element) {

    document.getElementsByClassName("popupwindw")[0].classList.toggle("d-none");
    let name = element.parentElement.children[0].innerHTML;
    document.getElementsByClassName("popheader")[0].innerHTML = name;
    let cont = element.parentElement.children[1].innerHTML
    document.getElementsByClassName("popbody")[0].innerHTML = cont;


}

function closeDetails(element) {
    element.parentElement.parentElement.classList.toggle("d-none");

}



function sendDataToServer() {

    let cname = document.getElementById("cname").value;
    let cmail = document.getElementById("cmail").value;
    let cmsg = document.getElementById("cmsg").value;
    let formData = new FormData();
    formData.append('name', cname);
    formData.append('email', cmail);
    formData.append('message', cmsg);

    fetch("api/SampleData",
        {
            body: formData,
            method: "post"
        });
        alert("Submitted Successfully")
}
function submitMessage() {
let status = " ";
    let cnamev = document.getElementById("cname");
    let cmailv = document.getElementById("cmail") ;
    let cmsgv = document.getElementById("cmsg").value ;

    if (cnamev.length ===0 && cmailv===0&&cmsgv===0){

        alert("Please fill all fields.")
    }

    
    if(cmailv.checkValidity() && cnamev.checkValidity()&& cmsgv.length>=2){
        sendDataToServer()

    }
    else{
       
         if(!cnamev.checkValidity()){

              status = "Please enter valid Name"
         }
         if(!cmailv.checkValidity()){

             status =status+  '\nPlease enter valid email'
         }
         if(cmsgv.length < 2){

           status =status+  '\nPlease enter valid Message'
         }
         alert(status)
    }


    




}