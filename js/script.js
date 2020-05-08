function Destination(place,location,landmark)
{
    this.place=place;
    this.location=location;
    this.landmark=landmark;
}

//user interface
$("form.form-class").submit(function(event){
event.preventDefault();
var inputedPlace=$("input#destination-place").val();
var inputtedLocation=$("input#destination-location").val();
var inputtedLandmark=$("input#destinaion-Landmark").val();
var newDestination=new Destination(inputedPlace,inputtedLocation,inputtedLandmark);
$("ul.listOfPlaces").append("<li><span class='destinations'>" + newDestination.place + "</li></span>")
$("input#destination-place").val("");
$("input#destination-location").val("");
$("input#destinaion-Landmark").val("");
})