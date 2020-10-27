function multiplication(){
	var table = parseInt(prompt("Welke tafel wilt u uit rekenen?"));
	// !isNaN(table) zorgt ervoor dat er word gekeken of table een number is. ! betekent niet (false).
	//  Er word ook gekeken of tafel kleiner/gelijk aan 10 is en groter/gelijk aan 1.
	if (!isNaN(table) && table <= 10 && table >= 1) {
		for(i = 1; i <= table; i++){
			for(t = 1; t <= 10; t++){
				document.write(i + " x " + t + " = " + (i * t) + "<br>");
			}
		document.write("<br><br>");
		}
	} else {
		if (isNaN(table)) {
			alert("U dient een getal in te voeren!");
		} else {
			alert("Bereik van getal moet zijn: 1 t/m 10!");
		}
		multiplication();
	}
}

multiplication();