// Function to choose vacation and update the page
function chooseVacation(VacaType, Weather) {
  var Location = "0";
  var Img = "";

  if (VacaType == "Beachy" && Weather == "Sunny") {
    Location = "Key West, Florida";
    Img = "https://media.istockphoto.com/id/1500902548/photo/tropical-landscape-in-key-west-florida.jpg?s=612x612&w=0&k=20&c=ydh3s4TnHwfs0dTUG3o2t49mXKLfyKE9FsMa16eS_s0=";
  } else if (VacaType == "Beachy" && Weather == "Snow") {
    Location = "Lofoten Islands, Norway";
    Img = "https://res.cloudinary.com/gofjords-com/images/w_2560,h_1374,c_scale/f_auto,q_auto:eco/v1633343854/Blog%20Content/Lofoten/Visit%20Lofoten%20in%20the%20winter%20time/Reine-winter-time-Lofoten-Islands-Mumemories/Reine-winter-time-Lofoten-Islands-Mumemories.jpg?_i=AA";
  } else if (VacaType == "Beachy" && Weather == "Raining") {
    Location = "Tunnels Beach, Kauai";
    Img = "";
  } else if (VacaType == "Skiing" && Weather == "Snow") {
    Location = "Niseko Ski Resort, Japan";
    Img = "";
  } else if (VacaType == "Skiing" && Weather == "Sunny") {
    Location = "Big Sky, Montana";
    Img = "";
  } else if (VacaType == "Skiing" && Weather == "Raining") {
    Location = "Whistler Blackcomb, Canada";
    Img = "";
  } else if (VacaType == "Mountains" && Weather == "Raining") {
    Location = "Mount Waialeale, Kauai";
    Img = "";
  } else if (VacaType == "Mountains" && Weather == "Snow") {
    Location = "Snowy Mountains, Australia";
    Img = "";
  } else if (VacaType == "Mountains" && Weather == "Sunny") {
    Location = "Pikes Peak, Colorado";
    Img = "";
  }

  document.getElementById("output").innerHTML = Location;
  document.getElementById("Img").src = Img;
}

// Function to get the values from the page and call chooseVacation
function getTicket() {
  var VacaType = document.getElementById("VacaType").value;
  var Weather = document.getElementById("Weather").value;

  chooseVacation(VacaType, Weather);
}
