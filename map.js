
var foresters = [
	{
		"firstName" : "Bob",
		"lastName" : "Blair", 
		"address1" : "21885 E County Road 1300 N",
		"city": "Ashmore",
		"state": "Illinois",
		"zip": "61912",
		"phone": "217-349-8688", 
		"email": "bblair@consolidated.net",
		"lat" : "39.564849", 
		"lng": "-88.065103"
	},
	{
		"firstName" : "Bill",
		"lastName" : "Calvert", 
		"address1" : "14419 Rod and Gun Road",
		"city": "Breese",
		"state": "Illinois",
		"zip": "62230",
		"phone": "618-526-4251", 
		"email": "treedude@netwitz.net",
		"lat" : "38.640819", 
		"lng": "-89.501353"
	},
		{
		"firstName" : "John W.",
		"lastName" : "Dickson", 
		"company" : "Dickson Resource Alternatives",
		"address1" : "57 Dickson Road",
		"city": "Makanda",
		"state": "Illinois",
		"zip": "62958",
		"phone": "618-457-4871", 
		"email": "jwd4ra@frontier.com",
		"lat" : "37.635783", 
		"lng": "-89.247480 "
	},
	{
		"firstName" : "Greg",
		"lastName" : "Gordon", 
		"address1" : "RR2, Box 203",
		"city": "Beecher City",
		"state": "Illinois",
		"zip": "62414",
		"phone": "618-553-2508", 
		"email": "gngtimber622@hotmail.com",
		"lat" : "39.187222", 
		"lng": "-88.787004" 
	},
	{
		"firstName" : "Mark",
		"lastName" : "Holmgren",
		"company": "TimberMark", 
		"address1" : "120 Pearson Road",
		"city": "Harrisburg",
		"state": "Illinois",
		"zip": "62946",
		"phone": "618-252-4647", 
		"email": "timbermark@hotmail.com",
		"lat" : "37.732005", 
		"lng": "-88.566712" 
	},
	{
		"firstName" : "Michael C.",
		"lastName" : "Karcher",
		"company": "Karcher's Forestry Services", 
		"address1" : "4731 Dahlgren Road E",
		"city": "Dahlgren",
		"state": "Illinois",
		"zip": "62828",
		"phone": "618-736-2341", 
		"email": "karcher@hamiltoncom.net",
		"website": "www.illinoisforestry.com",
		"lat" : "38.196933", 
		"lng": "-88.681887" 
	},
	{
		"firstName" : "Brent",
		"lastName" : "Lecher",
		"address1" : "PO Box 183",
		"city": "Eddyville",
		"state": "Illinois",
		"zip": "62928",
		"phone": "618-499-1362", 
		"email": "brent_lecher@yahoo.com",
		"lat" : "37.501172", 
		"lng": "-88.587050" 
	},
	{
		"firstName" : "Mike",
		"lastName" : "Long",
		"company": "Long Forestry Consultation",
		"address1" : "2220 Spanish Bluff Road",
		"city": "Anna",
		"state": "Illinois",
		"zip": "62906",
		"phone": "618-893-2307", 
		"email": "mike@longforestry.com",
		"website": "www.longforestry.com",
		"lat" : "37.515010",  
		"lng": "-89.229970" 
	},
	{
		"firstName" : "Joe",
		"lastName" : "Newcomb",
		"address1" : "585 County Road 1050 East",
		"city": "Norris City",
		"state": "Illinois",
		"zip": "62889",
		"phone": "618-265-3286", 
		"email": "newcomb.joe@gmail.com",
		"lat" : "37.954003", 
		"lng": "-88.176699" 
	},
	{
		"firstName" : "Larry",
		"lastName" : "Owen",
		"company": "Forest Management Services Inc.",
		"address1" : "4120 Haythorne Avenue",
		"city": "Terre Haute",
		"state": "Indiana",
		"zip": "47805",
		"phone": "812-466-4445", 
		"email": "larry@forest-management.com",
		"website":"www.forest-management.com",
		"lat" : "39.520730", 
		"lng": "-87.353633" 
	},
	{
		"firstName" : "Joe",
		"lastName" : "Starkey",
		"company": "Long Forestry Consultation",
		"address1" : "94 Curtis Street",
		"city": "Jerseyville",
		"state": "Illinois",
		"zip": "62052",
		"phone": "618-639-8733", 
		"email": "joe@longforestry.com",
		"website": "www.longforestry.com",
		"lat" : "39.117260", 
		"lng": "-90.320217" 
	},
	{
		"firstName" : "Randy",
		"lastName" : "Stephens",
		"company": "Stephens Woodland Management",
		"address1" : "11313 North 725th Street",
		"city": "Robinson",
		"state": "Illinois",
		"zip": "62454",
		"phone": "618-544-2958", 
		"email": "woodsmgmt@gmail.com",
		"lat" : "39.016671",  
		"lng": "-87.810595" 
	},
	{
		"firstName" : "Bob",
		"lastName" : "Wagoner",
		"company": "Central Illinois Forestry",
		"address1" : "2774 Whippoorwill Drive",
		"city": "Charleston",
		"state": "Illinois",
		"zip": "61920",
		"phone": "217-549-0060", 
		"email": "c.i.forestry@gmail.com",
		"website": "www.centralillinoisforestry.com",
		"lat" : "39.469627",  
		"lng": "-88.173579" 
	},
	{
		"firstName" : "Roger",
		"lastName" : "Weber",
		"address1" : "6743 State Route 153",
		"city": "Oakdale",
		"state": "Illinois",
		"zip": "62268",
		"phone": "618-824-6161", 
		"lat" : "38.317215",  
		"lng": "-89.611613" 
	}
	
						
]
//var marker = L.marker([39.469594, -88.173610]).addTo(mymap);

var markers = []
var boundsTest = [];


for (i=0; i<foresters.length; i++){
	
	var companySpan2 = "";
	if(foresters[i].company != undefined){
		companySpan2 = foresters[i].company + "<br>";
	}
	else companySpan2 = "";
	
	var emailSpan2 = "";
	if(foresters[i].email != undefined){
		emailSpan2 = "<a href='mailto:" + 	foresters[i].email + "?subject=From the Illinois Consulting Foresters Website&body=Hello, I found you on the Illinois Consulting Foresters website, and I would like to know more about your forestry services.'>"+foresters[i].email+"</a><br>"
	}
	else emailSpan2 = "";
	
	var websiteSpan2 = "";
	if(foresters[i].website != undefined){
		websiteSpan2 = "<a href='http://" + 	foresters[i].website + "'>"+foresters[i].website+"</a>"
	}
	else websiteSpan2 = "";


	
	
	
	markers.push(L.marker([foresters[i].lat, foresters[i].lng]).bindPopup(
	"<strong>" + foresters[i].firstName + " " + foresters[i].lastName + "</strong><br>" +
	companySpan2 + 
	foresters[i].address1 + "<br>" + 
	foresters[i].city + ", " + foresters[i].state + " " + foresters[i].zip + "<br>"+
	foresters[i].phone + "<br>" + 
	emailSpan2 +
	websiteSpan2
	));
	boundsTest.push([foresters[i].lat, foresters[i].lng]);
}

var mymap = L.map('mapid').fitBounds(boundsTest, {padding: [50, 50]});
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFrZWg5MTMiLCJhIjoiY2loOXNjbGttMHU3N3Ywa2ljYjg4MmJsNyJ9.5Bk40zHBuVB2g2Ojf4aIAA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'}).addTo( mymap );
mymap.scrollWheelZoom.disable();




var clusterMarkers = L.markerClusterGroup({
      maxClusterRadius: 1,
      spiderfyDistanceMultiplier: 1
    });

for (k=0; k<markers.length; k++){
	clusterMarkers.addLayer(markers[k]);
}


mymap.addLayer(clusterMarkers);















