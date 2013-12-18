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
//console.log(dates);
//console.log(desc);

var daysWithShows = dates.unique();
var showtitles = desc;

$("#datepicker").datepicker({

     	
	    dateFormat: 'yyyy-mm-dd',
	    altField: "#search",
	    altFormat: "yy-mm-dd",
	    minDate: 0,

	    beforeShowDay: function (date) {
	        var m = date.getMonth(),
	            d = date.getDate(),
	            y = date.getFullYear();
	        for (var i = 0; i < daysWithShows.length; i++) {
	            if ($.inArray(y + '-' + (m + 1) + '-' + d, daysWithShows) != -1) {
	                return [true, 'highlight', showtitles[daysWithShows.indexOf(y + '-' + (m + 1) + '-' + d)]];
	            }
	        }
	        return [true];
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

$('#datepicker td.highlight a').tooltip({
	title: $(this).attr("title"),

});
	
};

jqRestore();


	
	


 