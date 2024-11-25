var tablinks=document.getElementsByClassName("tab-link");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// side menue scripting---->
var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";

    }
    function closemenu(){
        sidemenu.style.right = "-200px";

    }
    //<---google sheet scripting----->
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw2vB6p3hl7EcVE3qx3SBTrZsCmhFUigMw-17MTokA1dqzMma0XK3OpZqu6GN-rXjOU/exec'
    const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
                
            
        })
        .catch(error => console.error('Error!', error.message))
    })