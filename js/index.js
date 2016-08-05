function rps(clicked_id) {
	document.getElementById("computer").disabled = true;
	var temp = document.getElementById(clicked_id).value;
	console.log(temp);
	var userchoice = 0;
	var computerchoice = Math.round(Math.random()*3)+1;

	if((temp == null) || (temp != "rock" && temp != "paper" && temp != "scissors")){
		while(true){
			temp = prompt("Invalid entry. Enter rock, paper, or scissors.");
			console.log(temp);
			if(temp == "rock" || temp == "paper" || temp == "scissors") break;
		}
	}

	if(temp == "rock") userchoice = 0;
	else if(temp == "paper") userchoice = 1;
	else userchoice = 2;

	//testing purposes
	console.log("user: "+userchoice);
	console.log("computer: "+computerchoice);

	var draws = document.getElementById("draws").innerHTML;
	var losses = document.getElementById("losses").innerHTML;
	var wins = document.getElementById("wins").innerHTML;
	var result = (3+userchoice-computerchoice)%3;

	if(result == 0) {
		if(temp == "rock") document.getElementById("computer").value = "rock";
		else if(temp == "paper") document.getElementById("computer").value = "paper";
		else document.getElementById("computer").value = "scissors";
		draws++;
		document.getElementById("draws").innerHTML=draws;
	}
	else if(result == 2) {
		if(temp == "rock") document.getElementById("computer").value = "paper";
		else if(temp == "paper") document.getElementById("computer").value = "scissors";
		else document.getElementById("computer").value = "rock";
		losses++;
		document.getElementById("losses").innerHTML=losses;
	}
	else {
		if(temp == "rock") document.getElementById("computer").value = "scissors";
		else if(temp == "paper") document.getElementById("computer").value = "rock";
		else document.getElementById("computer").value = "paper";
		wins++;
		document.getElementById("wins").innerHTML=wins;
	}
}//end of rps