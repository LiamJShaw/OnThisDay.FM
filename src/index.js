// require('dotenv').config()

import "./styles/styles.css";

import {searchTrack, searchMultipleTracks } from "./spotify";
import { getTracks, getAllTracks } from "./lastfm";
import { updateUI, enableExportButton, disableExportButton } from "./UI";

const usernameEntry = document.querySelector(".username")
const datePicker = document.querySelector(".date");

const fetchButton = document.querySelector('.fetch.button');
fetchButton.addEventListener("click", fetchTracks);

const exportButton = document.querySelector('.export.button');
exportButton.addEventListener("click", exportTracks);

let tracksData = new Set();
let failedTracks = new Set();

async function fetchTracks() {

    disableExportButton();

    // Fetch tracks from Last.FM
    const username = usernameEntry.value;
    const datePicked = new Date(datePicker.value);

    const tracksToSearch = await getAllTracks(username, datePicked);

    console.log("Last.fm results ", tracksToSearch);

    // Search for tracks on Spotify
    searchMultipleTracks(tracksToSearch)
    .then(function (searchResults) {

      console.log("Spotify Results", searchResults);

      // Update the UI with the search results
      updateUI(searchResults);

      enableExportButton();

      // Add the data to tracksData so it can be exported
      // Clear any previous links
      tracksData.clear();

      // Loop through each year
      for (const year in searchResults) {
        
        // Loop through each track in the current year
        for (const track of searchResults[year]) {

          // Add to the set
          if (track.url) {
            tracksData.add(track.url);
          } else {
            failedTracks.add(`${track.title} - ${track.artist}`);
          }
        }
      }
    });
}

async function exportTracks() {
  const tracksArray = Array.from(tracksData);
  const exportString = tracksArray.join('\n');

  console.log(exportString);

  const failedTracksArray = Array.from(failedTracks);
  const failedTracksString = failedTracksArray.join('\n');

  console.log("The following tracks were not able to be found by Spotify:", '\n', failedTracksString);
}