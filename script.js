function validation(){
    var fullName = document.querySelector('input[name="full-name"]').value;
    var username = document.querySelector('input[name="username"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phoneNumber = document.querySelector('input[name="phone"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirmPassword = document.querySelector('input[name="confirm-password"]').value;
    var gender = document.querySelector('input[name="gender"]:checked');


    // if( !fullName || !username || !email || !phoneNumber || !password || !confirmPassword || !gender){
        alert("please fill the all input")
    }
//     else

    
//     {
//         alert("form submitted successfully")
//     }

// }
console.log()