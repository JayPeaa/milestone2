function sendMail(contactForm) {
    emailjs.send("gmail", "best_analytics", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "web_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                alert("Thank you for your message. We will be in touch shortly.", response);
            },
            function(error) {
                alert("Message not sent, please try again", error)

            });
    document.getElementById("contact-form").reset();

}

function submitEmailSubscription(emailSubscribe) {
    emailjs.send("gmail", "ba_email_subscribe", {
            "first_name": emailSubscribe.first_name.value,
            "last_name": emailSubscribe.last_name.value,
            "email_subscribed": emailSubscribe.email_subscribed.value,

        })
        .then(
            function(response) {
                alert("Thank you for subscribing.", response);
            },
            function(error) {
                alert("Ooops, something went wrong! Please try again.", error)
            });
    document.getElementById("subscribe-form").reset();
}
