function anwser(){
	var name = prompt("Welkom! Wat is uw naam?");
	if (name == "stop") {
		return "";
	} else {
		var age = prompt("Wat is uw leeftijd?");
		document.write("Hallo " + name + ", " + "je leeftijd is : " + age + "<br>");
		anwser();
	}
}

anwser();