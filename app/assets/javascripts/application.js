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


Array.prototype.unique =
  function() {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
      for(var j=i+1; j<l; j++) {
        // If this[i] is found later in the array
        if (this[i] === this[j])
          j = ++i;
      }
      a.push(this[i]);
    }
    return a;
  };
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

var daysWithShows = ["2013-12-14", "2013-12-16", "2013-12-16", "2013-12-16", "2013-12-14", "2013-12-16", "2013-12-17", "2013-12-16", "2013-12-19", "2013-12-16", "2013-12-15", "2013-12-18", "2013-12-19", "2013-12-20", "2013-12-21", "2013-12-22", "2013-12-23", "2013-12-21", "2013-12-22", "2013-12-25", "2013-12-26", "2013-12-27", "2013-12-28", "2013-12-28", "2013-12-31", "2014-01-01", "2014-01-02", "2014-01-06", "2014-01-07", "2014-01-08"];
console.log(daysWithShows);
var showtitles = desc;

var dateHighlight =  function (date) {
	        var 
	        y = date.getFullYear(), m = date.getMonth(),
	            d = date.getDate(),
	            
	        for (var i = 0; i < daysWithShows.length; i++) {
	            if ($.inArray(y + '-' + (m + 1) + '-' + d, daysWithShows) != -1) {
	                return [true, 'highlight', showtitles[daysWithShows.indexOf(y + '-' + (m + 1) + '-' + d)]];
	            }
	        }
	        return [true];
	    };

$("#datepicker").datepicker({

     	
	    dateFormat: 'yyyy-mm-dd',
	    altField: "#search",
	    altFormat: "yy-mm-dd",
	    minDate: 0,



	    beforeShowDay: dateHighlight,
	    
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
	
};

jqRestore();


	
	


 