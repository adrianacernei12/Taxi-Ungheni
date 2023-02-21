function show() {
    document.getElementById("side-menu").classList.toggle("show");
}
function show() {
    document.getElementById("nav-text").classList.toggle("show");
}
function sendEmail(){
        Email.send({
        Username : "adrianacernei96@gmail.com",
        Password : "adrianacernei",
        To : 'adrianacernei96@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Feedback",
        Body : "de la:"+document.getElementById("name").value
        +"<br> Email:"+document.getElementById("email").value
        +"<br> Message:"+document.getElementById("message").value

        }).then(
        message => alert(message)
        );

    }