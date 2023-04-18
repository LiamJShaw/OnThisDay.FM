import "./styles/styles.css";

import {searchTrack, searchMultipleTracks } from "./spotify";
import { getTracks } from "./lastfm";

const tracksContainer = document.querySelector(".tracks");

const usernameEntry = document.querySelector(".username")
const datePicker = document.querySelector(".date");

const goButton = document.querySelector(".go-button");

goButton.addEventListener("click", main);


async function main() {

    // Fetch tracks from Last.FM
    const username = usernameEntry.value;
    const datePicked = new Date(datePicker.value);

    const tracksToSearch = await getTracks(datePicked, username);

    // Search for tracks on Spotify
    const searchResults = await searchMultipleTracks(tracksToSearch);

    // Update the UI with the search results
    updateUI(searchResults);

}

function updateUI(searchResults) {
    tracksContainer.innerHTML = "";
  
    for (let i = 0; i < searchResults.length; i++) {
      const card = document.createElement('div');
      card.className = 'card';
  
      const title = document.createElement('h3');
      title.textContent = searchResults[i].artist + " - " + searchResults[i].title;
      card.appendChild(title);
  
      const link = document.createElement('a');
      link.href = searchResults[i].url;
      link.textContent = 'Listen on Spotify';
      link.target = '_blank';
      card.appendChild(link);
  
      tracksContainer.appendChild(card);
    }
  }
  

// Single track

// searchTrack("Frogstrap", "Viagra Boys", "Street Worms")
// .then((searchResults) => {
//       console.log("Track:", searchResults);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });


// Multiple tracks

// const tracksToSearch = [
//     { title:"Frogstrap", artist:"Viagra Boys", album:"Street Worms" },
//     { title:"Sports", artist:"Viagra Boys", album:"Street Worms" },
//     { title:"Troglodyte", artist:"Viagra Boys", album:"Cave World (Deluxe)" },
// ]

// searchMultipleTracks(tracksToSearch)
// .then((searchResults) => {
//     console.log("Multiple Tracks:", searchResults);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });