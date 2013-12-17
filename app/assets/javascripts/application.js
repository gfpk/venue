// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.datepicker
//= require_tree .

function jqRestore(){
	

//$('.seat').popover({html:true});
	$('.tool-trig').tooltip();

	$('.popover-trig').popover();

	
	$("#datepicker").datepicker({
	    showButtonPanel: false,
	    firstDay: 1,
	    dateFormat: 'yyyy-mm-dd',
	    altField: "#search",
	    altFormat: "yy-mm-dd",
	    minDate: 0,
	    onSelect: function(){
	       $('#datesel').submit();
	    }
	});

	//$(".alert").alert();

	$(".alert").addClass("in");
	$('.flexslider').flexslider();
	$(document.body).on('hidden.bs.modal', function () {
		$('#myModal').removeData('bs.modal');
	});

	
};

jqRestore();


	
	


 