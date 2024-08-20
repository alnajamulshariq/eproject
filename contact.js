function validation() {
    event.preventDefault()
    let fn = document.getElementById("fn").value;
    let ln = document.getElementById("ln").value;
    let age = document.getElementById("age").value;
    let ea = document.getElementById("ea").value;
    let ps = document.getElementById("ps").value;
    let cp = document.getElementById("cp").value;
    let mb = document.getElementById("mb").value;
    let ta = document.getElementById("ta").value;


    var usercheck = /^[a-zA-Z. ]{3,20}$/;
    var emailcheck = /^[a-zA-Z_]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
    var passcheck = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    var mobilecheck = /^[0-9]{11}$/;
    var agecheck = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
    var txtareacheck = /^[a-zA-Z. ]{10,300}$/;
    if (usercheck.test(fn)) {
        document.getElementById("fnerror").innerHTML = "";
    }
    else {
        document.getElementById("fnerror").innerHTML = " **Your First Name Is Invalid** ";
        return false;
    }

    if (usercheck.test(ln)) {
        document.getElementById("lnerror").innerHTML = "";
    }
    else {
        document.getElementById("lnerror").innerHTML = " **Your Last Name Is Invalid** ";
        return false;
    }

    if (agecheck.test(age)) {
        document.getElementById("ageerror").innerHTML = "";
    }
    else {
        document.getElementById("ageerror").innerHTML = " **Your Age Is Invalid** ";
        return false;
    }

    if (mobilecheck.test(mb)) {
        document.getElementById("mberror").innerHTML = "";
    }
    else {
        document.getElementById("mberror").innerHTML = " **Your Mobile Number Is Invalid** ";
        return false;
    }

    if (emailcheck.test(ea)) {
        document.getElementById("eaerror").innerHTML = "";
    }
    else {
        document.getElementById("eaerror").innerHTML = " **Your Email ID Is Invalid** ";
        return false;
    }
    if (passcheck.test(ps)) {
        document.getElementById("pserror").innerHTML = "";
    }
    else {
        document.getElementById("pserror").innerHTML = " **Password Must Contain One uppercase, One Digit & One Special Character** ";
        return false;
    }
    if (passcheck.test(cp)) {
        document.getElementById("cperror").innerHTML = "";
    }
    else {
        document.getElementById("cperror").innerHTML = " **Your Confirm Password Is Not Same As Your Password** ";
        return false;
    }
    if (txtareacheck.test(ta)) {
        document.getElementById("taerror").innerHTML = "";
    }
    else {
        document.getElementById("taerror").innerHTML = " **Your Text Should Be Between In 10 To 300 Characters** "
        return false;

    }
    console.log(document.getElementById("submitBtn"))
    document.getElementById("submitBtn").setAttribute("data-bs-toggle", "modal")
    document.getElementById("submitBtn").setAttribute("data-bs-target", "#staticBackdrop")
}