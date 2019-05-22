//When the button is clicked...
$("#factButton").on("click", function() {
	//Generate number between 0-4
	var number = Math.floor((Math.random() * booFacts.length));
	// We display the fact from the catFactArray that is in the random position we just generated.
	$("#factText").text(booFacts[number])
})

//Boofacts List
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//make the text pink
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})
//make the text orange
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})
//make the text green
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//Make the pic grow
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})
//Makt the pic shrink
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})