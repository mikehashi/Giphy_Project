//link to Api


//create button and arrays

var topics = ["Tom Brady", "Matt Ryan", "Cam Newton", "Marshawn Lynch", "Randy Moss", "Antonio Brown", "Calvin Johnson"];

for (var i = 0; i < topics.length; i++) {
	$(".animalButtons").html("<button>" + topics[i] + "</button>");
}

$(".animals").html("hey");