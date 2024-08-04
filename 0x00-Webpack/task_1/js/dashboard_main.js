import $ from "jquery";
import _ from "lodash"

let counter = 0;
$(document).ready(function() {
	$( "body" ).append("<p>Holberton Dashboard</p>");
	$( "body" ).append("<p>Dashboard data for the students</p>");
	$( "body" ).append("<button>Click here to get started</button>");
	$( "body" ).append("<p id='count'></p>");
	$( "body" ).append("<p>Copyright - Holberton School</p>");

	$( "button" ).on("click", _.debounce(updateCounter, 500));
});

function updateCounter() {
	counter += 1;
	$( "#count" ).text(`{${counter}} clicks on the button`);
}

