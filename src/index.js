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
    const card = document.createElement("div");
    card.className = "card";

    const playButton = document.createElement("button");
    playButton.className = "play-button";
    playButton.innerHTML = "&#9658;"; // Unicode for play icon
    card.appendChild(playButton);

    const title = document.createElement("h3");
    title.textContent = searchResults[i].artist + " - " + searchResults[i].title;
    card.appendChild(title);

    if (searchResults[i].url) {
      const link = document.createElement("a");
      link.href = searchResults[i].url;
      link.textContent = "Listen on Spotify";
      link.target = "_blank";
      card.appendChild(link);
    }

    const audio = document.createElement("audio");
    audio.src = searchResults[i].preview_url;
    audio.preload = "none";
    card.appendChild(audio);

    playButton.addEventListener("click", () => {
      audio.paused ? audio.play() : audio.pause();
      playButton.innerHTML = audio.paused ? "&#9658;" : "&#10074;&#10074;"; // Update play icon to pause icon when playing
    });

    tracksContainer.appendChild(card);
  }
}

