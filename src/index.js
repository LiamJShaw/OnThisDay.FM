import "./styles/styles.css";

import {searchTrack, searchMultipleTracks } from "./spotify";
import { getTracks } from "./lastfm";

const tracksContainer = document.querySelector(".tracks");
const goButton = document.querySelector(".go-button");


goButton.addEventListener("click", () => {

    // for each track, add the name as a <p> to .tracks
    
    tracksContainer.innerHTML = "";

    let datePicker = document.querySelector(".date");
    let datePicked = new Date(datePicker.value);

    let unixDate = dateToUnixTime(datePicked);

    getTracks(unixDate).then(function(tracks) {

        console.log(tracks);

      for (let i = 0; i < tracks.length; i++) {

          const trackP = document.createElement('p');
          trackP.textContent = tracks[i].artist + " - " + tracks[i].track;
          tracksContainer.appendChild(trackP);
      }
    });


});


// Single track

searchTrack("Frogstrap", "Viagra Boys", "Street Worms")
.then((searchResults) => {
      console.log("Track:", searchResults);
    })
    .catch((error) => {
      console.error("Error:", error);
    });


// Multiple tracks

const tracksToSearch = [{
    title:"Frogstrap", artist:"Viagra Boys", album:"Street Worms" },
    { title:"Sports", artist:"Viagra Boys", album:"Street Worms" },
    { title:"Troglodyte", artist:"Viagra Boys", album:"Cave World (Deluxe)" },
]

searchMultipleTracks(tracksToSearch)
.then((searchResults) => {
    console.log(searchResults);
  })
  .catch((error) => {
    console.error("Error:", error);
  });