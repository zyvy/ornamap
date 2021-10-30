// [START maps_map_simple]


var map,
    gridstyle = { strokeColor: 'blue', strokeWeight: 2 };  
    grid = [],
	markers = []
var gridsize = 10; //Grid size in degrees

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.751244, lng: 37.618423 },
    zoom: 5,
    scaleControl:true 
  });

   var gridsize = 10; //Grid size in degrees

  google.maps.event.addListener(map,'bounds_changed', function() {
	  var gridline,
	      gridlat,
	  	  gridlon,
	  	  n = map.getBounds().getNorthEast().lat(),
	      s = map.getBounds().getSouthWest().lat();
	      e = map.getBounds().getNorthEast().lng(),	
	      w = map.getBounds().getSouthWest().lng()
       
	   // If a previous grid and markers are set, we remove them.
	   if (grid.length > 0) {
		  for (var i = 0; i < grid.length; i++) { grid[i].setMap(null);	 }
	    }	  
		
		if (markers.length > 0)
	    {
	      for (var i = 0; i < markers.length; i++) { markers[i].setMap(null); }
	  	}
		
	  var sgrid = Math.round(s/gridsize)*gridsize;
	  var wgrid = Math.round(w/gridsize)*gridsize;
	  
	  // Here we create the grid.
	  for (gridlat = sgrid; gridlat < n; gridlat = gridlat + gridsize)
         {
		  var gridline = new google.maps.Polyline({
		   path: [{lat: gridlat, lng: e}, {lat: gridlat, lng: w}],
		   map: map
		   });
		   gridline.setOptions(gridstyle);
		   grid.push(gridline);
	    }

	  for (gridlng = wgrid; gridlng < e; gridlng = gridlng + gridsize)
         {
		  var gridline = new google.maps.Polyline({
		   path: [{lat: n, lng: gridlng}, {lat: s, lng: gridlng}],
		   map: map
		   });
		   gridline.setOptions(gridstyle);
           grid.push(gridline);
	    }
     
	 // Here we create the markers.    
	 
  });
}

;



// [END maps_map_simple]
