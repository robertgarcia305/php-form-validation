document.addEventListener("DOMContentLoaded", ready);

function ready() {
    // specified variables
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let err = document.getElementById("error");
    let btn = document.querySelector("button");
    let form = document.getElementById("form");

    // of course this will be on a db later
    let secret_word = "solana";

    // error messages
    let name_error = document.createElement("p");
    name_error.innerHTML = "You need to add a name";

    let pass_error = document.createElement("p");
    pass_error.innerHTML = "You need your password";

    let email_error = document.createElement("p");
    email_error.innerHTML = "You need your email";

    // new one 
    form.addEventListener("submit", (e) => {
        if (name.value === "" || name.value == null) {
            err.appendChild(name_error);
            e.preventDefault();
        }
        
        if (!email.value.includes("@")) {
            err.appendChild(email_error);
            e.preventDefault();
        }
        
        if (password.value == "" || password.value !== secret_word) {
            err.appendChild(pass_error);
            e.preventDefault();
        }
        
        // main if statement that will let the validation to come through
        if (name.value !== "" && name.value != null && email.value.includes("@") && password.value !== "" && password.value === secret_word) {
            console.log("success");
        }
    });
      
      // different submits so that the error gets deleted
    name.addEventListener("input", (e) => {
        if (name.value !== "" && name.value != null) {
            name_error.remove();
        }
    });
      
    email.addEventListener("input", (e) => {
        if (email.value.includes("@")) {
            email_error.remove();
        }
    });
    
    password.addEventListener("input", (e) => {
        if (password.value !== "" && password.value === secret_word) {
            pass_error.remove();
        }
    });
      

    // this logic works incredibly well
    // form.addEventListener("submit", (e) => {
    //   if (name.value === "" || name.value == null) {
    //     e.preventDefault();
        
    //   } else if (!email.value.includes("@")) {
    //     e.preventDefault();
        
    //   } else if (password.value == "" || password.value !== secret_word) {
    //     e.preventDefault();
        
    //   } else {
    //     console.log("success");
    //   }
    // });
}