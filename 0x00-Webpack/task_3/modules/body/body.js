import $ from "jquery"
import _ from "lodash"
import "./body.css"
let counter = 0;
$(document).ready(function() {
	$( "body" ).append("<p>Dashboard data for the students</p>");
	$( "body" ).append("<button>Click here to get started</button>");
	$( "body" ).append("<p id='count'></p>");
	$( "button" ).on("click", _.debounce(updateCounter, 150));
});

function updateCounter() {
	counter += 1;
	$( "#count" ).text(`{${counter}} clicks on the button`);
}
