function multiplication(table){
	for(i = 1; i <= table; i++){
		for(j = 1; j <= 10; j++){
			document.write(i + ' x ' + j + ' = ' + (i * j) + '<br />');
		}
		document.write('<br /><br />');
	}
}

var table = prompt("Welke tafel wilt u uit rekenen?");
multiplication(table);
