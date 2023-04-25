import "./styles/styles.css";

import {searchTrack, searchMultipleTracks } from "./spotify";
import { getTracks, getAllTracks } from "./lastfm";
import { updateUI } from "./UI";

const usernameEntry = document.querySelector(".username")
const datePicker = document.querySelector(".date");

const goButton = document.querySelector(".go-button");

goButton.addEventListener("click", main);

async function main() {
    // Fetch tracks from Last.FM
    const username = usernameEntry.value;
    const datePicked = new Date(datePicker.value);

    const tracksToSearch = await getAllTracks(username, datePicked);

    console.log("Search Results: ", tracksToSearch);

    // Search for tracks on Spotify
    // const searchResults = await searchMultipleTracks(tracksToSearch);

    // Update the UI with the search results
    // updateUI(searchResults);
}

// Get All Tracks TEST CODE
// const date = new Date("Sun Nov 27 2002 00:00:00 GMT+0000 (Greenwich Mean Time)");

// getAllTracks("legendeater", date)
// .then(result => console.log(result))
// .catch(error => console.error(error));