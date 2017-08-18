var places=[{
placename:'Subway',
location: {lat: 28.997697, lng: 77.700379},
show:true,
selected:false,
venueId:'4e69c507d22d0e4cf5bf4753'
},
{
placename:'Gole Market Saket',
location: {lat: 28.987894, lng: 77.727413},
show:true,
selected:false,
venueId:'4e07328cc65b5bf2778e411d'
},
{
placename:'Sagar Ratna',
location: {lat: 28.995091, lng: 77.703918},
show:true,
selected:false,
venueId:'4d51703d9ffc236a851623a7'
},
{
placename:'Sadar',
location: {lat: 28.994047, lng: 77.700851},
show:true,
selected:false,
venueId:'4b9a3f45f964a5201ea735e3'
},
{
placename:'The Cake Factory',
location: {lat: 28.989508, lng: 77.724683},
show:true,
selected:false,
venueId:'4f929163e4b04d6ccb0b003c'
}
];// array of places to found on map
function error_display()
{
  document.getElementById('map').innerHTML="There is some problem in loading the map";//error message will display
}
var map;

function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  var styledMapType = new google.maps.StyledMapType(
           [
             {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
             {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
             {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
             {
               featureType: 'administrative',
               elementType: 'geometry.stroke',
               stylers: [{color: '#c9b2a6'}]
             },
             {
               featureType: 'administrative.land_parcel',
               elementType: 'geometry.stroke',
               stylers: [{color: '#dcd2be'}]
             },
             {
               featureType: 'administrative.land_parcel',
               elementType: 'labels.text.fill',
               stylers: [{color: '#ae9e90'}]
             },
             {
               featureType: 'landscape.natural',
               elementType: 'geometry',
               stylers: [{color: '#dfd2ae'}]
             },
             {
               featureType: 'poi',
               elementType: 'geometry',
               stylers: [{color: '#dfd2ae'}]
             },


             {
               featureType: 'road',
               elementType: 'geometry',
               stylers: [{color: '#f5f1e6'}]
             },

             {
               featureType: 'water',
               elementType: 'labels.text.fill',
               stylers: [{color: '#92998d'}]
             }
           ],
           {name: 'Styled Map'});
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 28.984462, lng: 77.706414},
    zoom: 14,
    mapTypeControl:false,
    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                   'styled_map']
  });
  map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
    InfoWindow = new google.maps.InfoWindow();
    ko.applyBindings(new model());
}

  //var bounds=new.google.maps.LatLngBounds();

  // The following group uses the location array to create an array of markers on initialize.
var model=function(){



    var that=this;
    that.markers=[];
    that.errorDisplay=ko.observable("");
  for (var i = 0; i < places.length; i++) {

  var position=places[i].location;
  var title=places[i].placename;
  var marker=new google.maps.Marker({
    map:map,
    position:position,
    title:title,
    show: ko.observable(places[i].show),
    selected: ko.observable(places[i].selected),
    id : places[i].venueId,
    animation: google.maps.Animation.DROP
  });
  that.markers.push(marker);
}
that.jump=function(marker)
{
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function()
{
  marker.setAnimation(null);
},900);
}

that.request_ajax=function(marker)//request the ajax to retrieve the likes of the location
{
  $.ajax({
    url:"https://api.foursquare.com/v2/venues/"+ marker.id +"?client_id=YAIZDKIO3O1Q3OBP4KOJ2ZQXXMU1L2QM3U45I4ECIBLFCURW&client_secret=JFPVGLFG2E1XEGRER0GOVDGLNVFGOSX13TSZ2QZC2BGHXJHI&v=20170208",
    dataType:"json",
    success:function(info){
      var res=info.response.venue;
      marker.rating=res.hasOwnProperty('rating') ? res.rating : '';

    },
    error:function(e)
    {
      that.errorDisplay("Nothing has recieved");//error message when map will not appear
    }

  });
};

var info_marker=function(marker)//detail of marker
{
  that.request_ajax(marker);
  marker.addListener('click',function() {
    that.marker_detail(marker);
  });
};
that.pres_loc=that.markers[0];
that.marker_detail=function(location)
{
  that.uall();
  location.selected(true);
  that.pres_loc=location;
  rating=function()//it will help to find out the rating of particular location
  {
    if(that.pres_loc.rating===""||that.pres_loc.rating===undefined)
    return "Not available!!!";
    else {
      return "Location is having:"+ that.pres_loc.rating;
    }
  }
  var content="<h4>"+ that.pres_loc.title +"<br>"+ rating()+" Rating";
  InfoWindow.setContent(content);
  InfoWindow.open(map,location);
  that.jump(location);

}

for(var i=0 ;i<that.markers.length;i++)
{
  info_marker(that.markers[i]); // information of marker_detail
}
that.search=ko.observable("");
that.filteration=function()      //use for filteration when user enter the place
{
  var infor = that.search();
  InfoWindow.close();

  if(infor.length === 0)
  {
    that.s_all();
  }
  else {
    for(var i=0;i<that.markers.length;i++)
    {
      if(that.markers[i].title.toLowerCase().indexOf(infor.toLowerCase()) > -1)
      {
        that.markers[i].show(true);
        that.markers[i].setVisible(true);
      }
      else {
      that.markers[i].show(false);
      that.markers[i].setVisible(false);
      }
    }
  }
InfoWindow.close();
};
that.s_all=function()
{
  for(var i=0;i<that.markers.length;i++)
  {
    that.markers[i].show(true);
    that.markers[i].setVisible(true);
  }
}
that.uall=function()
{
  for(var i=0;i<that.markers.length;i++)
  {
    that.markers[i].selected(false);

  }
}
}
