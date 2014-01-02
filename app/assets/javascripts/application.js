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
<<<<<<< HEAD
	
	$('.flexslider').flexslider();
	$('.seat').popover({html:true});
	$('.tool-trig').tooltip();
	$('.popover-trig').popover();
	$(".alert").addClass("in");
	$(document.body).on('hidden.bs.modal', function () {
	    $('#myModal').removeData('bs.modal')
	});
	function alertTimeout(wait){
	    setTimeout(function(){
	        $('#flash').children('.alert:first-child').animate({ opacity: "0", height: '0px' }, 600 ,'linear', function(){
	        $('#flash').children('.alert:first-child').remove();
	        });
=======
	
	$('.flexslider').flexslider();
	$('.seat').popover({html:true});
	$('.tool-trig').tooltip();
	$('.popover-trig').popover();
	$(".alert").addClass("in");
	$(document.body).on('hidden.bs.modal', function () {
	    $('#myModal').removeData('bs.modal')
	});

	
	var dates = [];
	var shows = [];
	var showjson = {};

	$.ajax({
		url: 'http://localhost:3000/showtimes',
		type: "GET",
		dataType: "json",
		async: false,
		success: function (data) {
			$.each( data, function() {
				dates.push(this.date);
				if (this.date)
				var x = {};
				x[this.date] = this.showitem.name;
				showjson.push(x);
				shows.push(this.showitem.name);
			});
		}
	});

>>>>>>> e7086e4378f5ec31b1afed5e3210195c266f3514

	    }, wait);
	};
	alertTimeout(2500);

<<<<<<< HEAD
	
	var dates = [];
	var shows = [];
	
	

	$.ajax({
		url: 'http://localhost:3000/showtimes',
		type: "GET",
		dataType: "json",
		async: false,
		success: function (data) {
			var d = [];
			$.each( data, function() {
				d.push(this.date);
				//shows.push(this.showitem.name);
			});
			dates = $.unique(d);
			for(i=0;i<dates.length;i++)
				{
					var s =[];
					$.each( data, function() {

						if(dates[i] == this.date && $.inArray(this.showitem.name, s))
							{
								s.push(this.showitem.name)
							}
						
					});
					
					shows.push(s);
				}
		}
	});

	
	
	console.log(dates);
	
	console.log(shows);
	
	var daysWithShows = dates;
	var showtitles = shows;


=======
	console.log(dates);
	var daysWithShows = jQuery.unique(dates);
	console.log(daysWithShows);
	console.log(showjson);
	var showtitles = shows;


>>>>>>> e7086e4378f5ec31b1afed5e3210195c266f3514
	var dateHighlight =  function (date) {
	        var d = ('0' + date.getDate()).slice(-2),
	        	y = date.getFullYear(), 
	        	m = ('0' + (date.getMonth()+1)).slice(-2);
	            
			//console.log(y + '-' + m  + '-' + d);
	            
	        for (var i = 0; i < daysWithShows.length; i++) {
	        		
	            if ($.inArray(y + '-' + m + '-' + d, daysWithShows) != -1) {
<<<<<<< HEAD
	                return [true, 'highlight', showtitles[daysWithShows.indexOf(y + '-' + m  + '-' + d)].join(' + ')];
=======
	                return [true, 'highlight', showtitles[daysWithShows.indexOf(y + '-' + m  + '-' + d)]];
>>>>>>> e7086e4378f5ec31b1afed5e3210195c266f3514
	            }
	        }
	        return [true];
	    };
 

	$("#datepicker").datepicker({
	     	
		    dateFormat: 'yyyy-mm-d',
		    altField: "#search",
		    altFormat: "yy-mm-dd",
		    minDate: 0,
		    beforeShowDay: dateHighlight,
		    onSelect: function(){
		       $('#datesel').submit();},

		   /* onChangeMonthYear:function(){
			$('#datepicker td a').each(function(){
				 //var tit = $(this).closest('td').attr('title');
				 console.log(this);
				 if(typeof tit != 'undefined'){
				 	$(this).attr('title', tit)
				 }else
				 {
				 	$(this).attr('title', 'no shows');
				 }
				 $(this).closest('td').removeAttr('title');
			});	    
		$('#datepicker td a ').tooltip();}   */ 
	});

	var datepicTips = function(){
			$('#datepicker td a').each(function(){
				 var tit = $(this).closest('td').attr('title');
				 if(typeof tit != 'undefined'){
				 	$(this).attr('title', tit)
				 }else
				 {
				 	$(this).attr('title', 'no shows');
				 }
				 $(this).closest('td').removeAttr('title');
			});	    
		$('#datepicker td a ').tooltip();}
	
	datepicTips();
	$('#datepicker').click(function(){
		datepicTips();
	});

};


jqRestore();



	


	
	


