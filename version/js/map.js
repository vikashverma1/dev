var locations = [
     /* ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3], */
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];
	var map;
$(document).ready(function(){
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
})
 

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    function marker(i) {
        if (i > locations.length) return;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          animation: 1,
            map: map
            });
      
        var t=setTimeout("marker("+(i+1)+")",500); 
    }
    marker(0); 


var poll;
var ntrvl = setInterval(function(){
 poll = $("div[style*=' _gm']");
  if(poll.length > 0){
   craftNewAnimation(poll.css('-webkit-animation-name')); 
    clearInterval(ntrvl);
  }

}, 10);

function craftNewAnimation(name){
 console.log(name);
  var markup = ['<style>',
                '@-webkit-keyframes ' + name +' {',
                '0%{ opacity: 0; }',
                '100%{ opacity: 1; }',
                '}',
                '</style'];
  $('body').append(markup.join(""));
}
