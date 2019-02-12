function sendMail(contactForm) {
    emailjs.send("gmail", "action_inequality", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "web_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error)

            });

}

function submitEmailSubscription(emailSubscribe) {
    emailjs.send("gmail", "ai_email_subscribe", {
            "first_name": emailSubscribe.first_name.value,
            "last_name": emailSubscribe.last_name.value,
            "email_subscribed": emailSubscribe.email_subscribed.value


        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error)

            });
}
