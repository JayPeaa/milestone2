function sendMail(contactForm){
    emailjs.send("gmail", "action_inequality", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "web_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error)
        
        });
}