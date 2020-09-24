function myFunction() {

	var x = document.getElementById("inTwo");

	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}

}