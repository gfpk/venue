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



$('.flexslider').flexslider();
$('.seat').popover({html:true});
$('.tool-trig').tooltip();

$('.popover-trig').popover();

	
	/*$("#datepicker").datepicker({
	    showButtonPanel: false,
	    firstDay: 1,
	    dateFormat: 'yyyy-mm-dd',
	    altField: "#search",
	    altFormat: "yy-mm-dd",
	    minDate: 0,
	    beforeShowDay: highlightDays,
        //onChangeMonthYear: fetchFreeDays,
	    onSelect: function(){
	       $('#datesel').submit();
	    }
	   
	});*/

	
/*$.getJSON( "http://localhost:3000/showtimes", function( data ) {
	var items = [];
	console.log(data);
	$.each( data, function( key, val ) {
		items.push(  this.date  );
	});
	alert (items);

});*/
var dates = [];
var desc = [];


$.ajax({
	url: 'http://localhost:3000/showtimes',
	type: "GET",
	dataType: "json",
	async: false,
	success: function (data) {

		

	    $.each( data, function( key, val ) {
			dates.push( this.date  );
			desc.push( this.showitem.name  );
		});
	   
	}
});

//console.log(desc);

var daysWithShows = jQuery.unique(dates);
console.log(daysWithShows);
var showtitles = desc;

var dateHighlight =  function (date) {
	        var d = ('0' + date.getDate()).slice(-2),
	        	y = date.getFullYear(), 
	        	m = ('0' + (date.getMonth()+1)).slice(-2);
	            


	            //console.log(y + '-' + m  + '-' + d);
	            
	        for (var i = 0; i < daysWithShows.length; i++) {
	        		
	            if ($.inArray(y + '-' + m + '-' + d, daysWithShows) != -1) {

	                return [true, 'highlight', showtitles[daysWithShows.indexOf(y + '-' + m  + '-' + d)]];
	            }
	        }
	        return [true];
	    };
 

$("#datepicker").datepicker({

     	
	    dateFormat: 'yyyy-mm-d',
	    altField: "#search",
	    altFormat: "yy-mm-dd",
	    minDate: 0,

	    //numberOfMonths: 2,



	    beforeShowDay: dateHighlight,
	    afterAdjustDate: function(){
	       $('#datepicker td a').each(function() {
    
    var tit = $(this).closest('td').attr('title');
 	if(typeof tit != 'undefined'){
    	$(this).attr('title', tit);}
    else{
    	$(this).attr('title', 'no shows');
    }
    
});


$('#datepicker td a ').tooltip({

});
	    },
	    
	    onSelect: function(){
	       $('#datesel').submit();
	    }
	    /*onSelect: function(dateText, inst) {        
	        var date = new Date(dateText.slice(4)),
	            m = date.getMonth(),
	            d = date.getDate(),
	            y = date.getFullYear();        
	        if ($.inArray(y + '-' + (m + 1) + '-' + d, daysWithShows) != -1) {
	            window.location = hrefs[daysWithShows.indexOf((y + '-' + (m + 1) + '-' + d))];
	        }
	    }*/
});

var dateInter = function(){
$('#datepicker td a').each(function() {
    
    var tit = $(this).closest('td').attr('title');
 	if(typeof tit != 'undefined'){
    	$(this).attr('title', tit);}
    else{
    	$(this).attr('title', 'no shows');
    }
    
});

$('#datepicker td a ').tooltip({

});
dateInter();
	}
};

jqRestore();


	
	


 