// Function to choose vacation based on type and weather
function chooseVacation(VacaType, Weather) {
  var Location = ""; // variable to store the chosen location
  var Img = "";      // variable to store the image URL
  var Theme = "";     // variable to store the CSS theme class

  // Beachy vacations
  if (VacaType == "Beachy" && Weather == 1) {
    Location = "Key West, Florida";
    Img = "https://media.istockphoto.com/id/1500902548/photo/tropical-landscape-in-key-west-florida.jpg?s=612x612&w=0&k=20&c=ydh3s4TnHwfs0dTUG3o2t49mXKLfyKE9FsMa16eS_s0=";
    Theme = "beachy-sunny";
  } else if (VacaType == "Beachy" && Weather == 3) {
    Location = "Lofoten Islands, Norway";
    Img = "https://res.cloudinary.com/gofjords-com/images/w_2560,h_1374,c_scale/f_auto,q_auto:eco/v1633343854/Blog%20Content/Lofoten/Visit%20Lofoten%20in%20the%20winter%20time/Reine-winter-time-Lofoten-Islands-Mumemories/Reine-winter-time-Lofoten-Islands-Mumemories.jpg?_i=AA";
    Theme = "beachy-snow";
  } else if (VacaType == "Beachy" && Weather == 2) {
    Location = "Tunnels Beach, Kauai";
    Img = "https://www.kauai.com/images/tunnels-beach-north.jpg";
    Theme = "beachy-raining";
  }

  // Skiing vacations
  else if (VacaType == "Skiing" && Weather == 3) {
    Location = "Niseko Ski Resort, Japan";
    Img = "https://www.powderhounds.com/site/DefaultSite/filesystem/images/Japan/Niseko/Overview/01.jpg";
    Theme = "skiing-snow";
  } else if (VacaType == "Skiing" && Weather == 1) {
    Location = "Big Sky, Montana";
    Img = "https://cdn.sanity.io/images/8ts88bij/big-sky/dbc52956f171d001b5840290d28c1f3498634366-2100x1399.jpg?rect=117,0,1866,1399&w=1366&h=1024&q=70&fit=min&auto=format";
    Theme = "skiing-sunny";
  } else if (VacaType == "Skiing" && Weather == 2) {
    Location = "Whistler Blackcomb, Canada";
    Img = "https://media.lmpm.website/uploads/sites/74/2018/12/I_Blackcomb_Dusk_1-scaled.jpg";
    Theme = "skiing-raining";
  }

  // Mountain vacations
  else if (VacaType == "Mountains" && Weather == 2) {
    Location = "Mount Waialeale, Kauai";
    Img = "https://www.to-hawaii.com/kauai/attractions/images/mtwaialeale/mt_waialeale.jpg";
    Theme = "mountains-raining";
  } else if (VacaType == "Mountains" && Weather == 3) {
    Location = "Snowy Mountains, Australia";
    Img = "https://www.australiangeographic.com.au/wp-content/uploads/2020/07/IMG-209.Winter.Alpine-NP.VIC_.Mt_.-Feathertop.sunrise.jpg";
    Theme = "mountains-snow";
  } else if (VacaType == "Mountains" && Weather == 1) {
    Location = "Pikes Peak, Colorado";
    Img = "https://www.cmc.org/groups-sections/front-range-groups/pikes-peak/@@images/e63e5a98-64f9-4dee-8c30-f54577adcdf4.jpeg";
    Theme = "mountains-sunny";
  }

  // Update the page with chosen location and image
  document.getElementById("output").innerHTML = Location;
  document.getElementById("Img").src = Img;

  // Change the page theme 
  if (Theme != "") {
    document.body.className = Theme;
  }
}

// Function to get the selected values and call chooseVacation
function getVaca() {
  var VacaType = document.getElementById("VacaType").value; // get selected vacation type
  var Weather = document.getElementById("Weather").value;   // get selected weather
  chooseVacation(VacaType, Weather); // call the function to generate results
}
