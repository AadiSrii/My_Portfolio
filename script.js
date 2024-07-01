// typing script

document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById("typing-text");
    const originalText = typingText.innerText.split("");
    
    function typeEffect() {
        typingText.innerText = "";
        let i = 0;
        const typeInterval = setInterval(function() {
            if (i < originalText.length) {
                typingText.innerText += originalText[i];
                if (originalText[i] === " ") {
                    typingText.innerText += "\u00A0";
                }
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(function() {
                    typeEffect();
                }, 1000);
            }
        }, 100);
    }
    
    typeEffect();
});



// typng script end here


var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-containts");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add( "active-link" );
    document.getElementById(tabname).classList.add("active-tab");
}


// about section is closing here


// menu 

var sidemen = document.getElementById("sidemenu");

function openmenu(){
    sidemen.style.right = "0";

}
function closemenu(){
    sidemen.style.right = "-200px";
    
}


// contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw1-9dWo7hqFwonGwN7VOnF_QlfRxQ1g7u7YB5Ce1STjtdsnq8SDEAh9lqrzg9iCycTdw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = "";
      },5000)
      form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })
