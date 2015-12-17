/**
**
**	BUTTONS / DECISION
**
**
**
*/

document.addEventListener('DOMContentLoaded',function() {
  	console.log('DOM loaded');
  	Buttons.init();
});


var Buttons = (function(){
	

	var body;
	var Navigation = {};


	function init(){
		console.log("Initialize buttons!");

		body = document.querySelector("body");

		var button1 = CreateButton("nav");
		var button2 = CreateButton("nav");
		var button3 = CreateButton("nav");





		console.log("button1");
		console.log(button1);

		console.log("button2");
		console.log(button2);




		$( button1 ).appendTo( "nav" );
		$( button2 ).appendTo( "nav" );
		$( button3 ).appendTo( "nav" );
	}



	function CreateButton( category ){

		var CSS = "";

		if( category==="nav" ){
			CSS = CSS_navigation();
		}

		return $('button');///*button( CSS ); //*/"<button></button>";
	}


	function button( cssClass ){
		var element = $('button');
		element.addClass( cssClass );
		return element; //"<button></button>";
	}



	/*
	*
	*	CSS NAMES
	*
	*/
	function CSS_navigation(){

		return "navigation";
	}







	return {
		init:init
	}
})(); // why ?
