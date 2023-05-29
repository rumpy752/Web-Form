/*
   Author: Jaime Rump
   Date:  2023-02-01   

   Filename:  formsubmit.js
*/

// This function sets the display of the nav bar 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// This function adds an eventlistener to the submit button and validates the form requirements
form.addEventListener("submit", validateForm);
function validateForm() {
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const poscode = document.getElementById("poscode").value;
    const phone = document.getElementById("phone").value;
	
	if (!validatePhone()) {
		  return false;
	}
    if (!validatePostalCode(poscode)) {
          return false;
    }
    if (!fName) {
        alert("First name is required");
        event.preventDefault();
        return false;
    }
    if (!lName) {
        alert("Last name is required");
        event.preventDefault();
        return false;
    }
    if (!street) {
        alert("Street is required");
        event.preventDefault();
        return false;
    }
    if (!city) {
        alert("City is required");
        event.preventDefault();
        return false;
    }
    if (!province) {
        alert("Province is required");
        event.preventDefault();
        return false;
    }
    if (!poscode) {
        alert("Poscode is required");
        event.preventDefault();
        return false;
    }
    if (!phone) {
        alert("Phone number is required");
        event.preventDefault();
        return false;
    }
    if (fName, lName, street, city, province, poscode, phone) {
        alert("Form submited successfully");
        event.preventDefault();
    }
}

// This function validates the phone number against the pattern 777-777-7777
function validatePhone() {
    var phone = document.getElementById("phone").value;
    var phonePattern = /^\d{3} \d{3} \d{4}$/;
    if (!phonePattern.test(phone)) {
      alert("Invalid phone number format. Please enter the number in the format '777 777 7777'");
      return false;
    }
    return true;
}

// This function validates the postal code against the pattern A1A 1A1
function validatePostalCode(postalCode) {
     var postalCodePattern = /^[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]$/;
	 if (!postalCodePattern.test(postalCode)) {
		 alert("Invalid postal code format. Please enter the number in the format A1A 1A1");
	 } else {
     return postalCodePattern.test(postalCode);
	 }
}

