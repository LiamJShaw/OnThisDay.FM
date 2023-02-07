import "./styles/styles.css";

import { getTracks, dateToUnixTime } from './lastfm.js';

let tracksContainer = document.querySelector(".tracks");

const goButton = document.querySelector(".go-button");

goButton.addEventListener("click", () => {

    // for each track, add the name as a <p> to .tracks
    
    tracksContainer.innerHTML = "";

    let datePicker = document.querySelector(".date");
    let datePicked = new Date(datePicker.value);

    let unixDate = dateToUnixTime(datePicked);

    let currentTracks = getTracks(unixDate);

    console.log(currentTracks);

    for (let i = 0; i < 10; i++) {
        const trackP = document.createElement('p');
        trackP.textContent = "Track: " + tracks[i];
        tracksContainer.appendChild(trackP);
    }
});



// OKAY! So no more Spotify API. Learn web scraping and get the spotify url from this:

// <a class="
// hidden-xs play-this-track-playlink play-this-track-playlink--spotify
        
// js-playlink

// href="https://open.spotify.com/track/42Y6p0Kc3suygNBwWklv2T" 
//   target="_blank" data-playlink-affiliate="spotify" data-spotify-id="42Y6p0Kc3suygNBwWklv2T" 
//   data-spotify-url="https://open.spotify.com/track/42Y6p0Kc3suygNBwWklv2T" data-track-name="Baby Criminal" 
//   data-track-url="/music/Viagra+Boys/_/Baby+Criminal" 
//   data-artist-name="Viagra Boys" data-artist-url="/music/Viagra+Boys" 
//   title="Play on Spotify" data-single-track="" data-analytics-action="PlayTrackOnPage" 
//   data-analytics-label="spotify">
// Spotify
// </a>

// BUT not everything has the link, so show in the GUI what is linked in the copypasta and what isn't