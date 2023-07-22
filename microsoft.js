var rettru =0
function validate () {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var enquiry = document.getElementById('enquiry');
    if(username.value==""){
        alert("Please enter a username");
        document.form.username.focus();
        rettru = 1
        return false;
    }
    if(password.value==""){
        alert("Please enter a password");
        document.form.password.focus();
        rettru = 1
        return false;
    }
    if(enquiry.value==""){
        alert("Please enter a query");
        document.form.enquiry.focus();
        rettru = 1
        return false;
    }
    subtrue();
    return true;
} 
function subtrue() {
    if(rettru==0){
        alert("Submitted")
    }
}