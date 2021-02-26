/*
	Name: 					Adah Burke
	Created: 				2021-02-25
	Most Recent Revision:	2021-02-25

*/


function clearErrors(){
	for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++) {
		if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function validateItems() {
	
	clearErrors();
	
	var customerFullName = document.forms["contactForm"]["customerFullName"].value;
	var customerEmail = document.forms["contactForm"]["customerEmail"].value;
	var customerPhoneNumber = document.forms["contactForm"]["customerPhoneNumber"].value;

	if (customerFullName == "") {
		alert("Please Provide Us Your Name");
		document.forms["contactForm"]["customerFullName"]
		   .parentElement.className = "form-group has-error";
		document.forms["contactForm"]["customerFullName"].focus();
		return false;
	}

	if (customerEmail == "" || customerEmail.includes("@") == false || customerEmail.includes(".") == false) {
		alert("Valid Email Is Required");
		document.forms["contactForm"]["customerEmail"]
		   .parentElement.className = "form-group has-error";
		document.forms["contactForm"]["customerEmail"].focus();
		return false;
	}

// needs WAY more validation
if (customerPhoneNumber == "") {
		alert("Valid Phone Number Is Required");
		document.forms["contactForm"]["customerPhoneNumber"]
		   .parentElement.className = "form-group has-error";
		document.forms["contactForm"]["customerPhoneNumber"].focus();
		return false;
	}
}