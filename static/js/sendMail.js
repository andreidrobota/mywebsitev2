function sendMail(contactForm) {
    emailjs.send("service_es3955a", "mywebsite_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_company": contactForm.company.value,
        "content": contactForm.content.value,
    })
    .then(
        function(response) {
            console.log("Succes", response)
            alert("Your message has been sent successfully!");
        },
        function(error) {
            console.log("Failure", error)
            alert("Failure! Please try again later");
        }
    )
    setTimeout(function() {
        contactForm.reset();
    }, 3000); 
    return false;
}