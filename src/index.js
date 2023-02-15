import "./styles/styles.css";

// Spotify
import SpotifyWebApi from 'spotify-web-api-js';

let spotify = new SpotifyWebApi();

var client_id = '74ac949ca587402484dcef1408b4d7f3';
var client_secret = '313a2c15fc844ca5bc22755572874ee7';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    spotify.setAccessToken(token);
  }
});

spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data);
    },
    function (err) {
      console.error(err);
    }
  );

// Spotify above here

let tracksContainer = document.querySelector(".tracks");

// Last.FM API
// Get all tracks for a specific date
function getTracks(date) {

    let fromDate = date;
    let toDate = date + 86399; // 24 hours (-1s) in seconds

    let currentPage = 1;
    let totalPages = 2; // Placeholder value. Will be replace on the first while run.

    let tracks = [];

    // while(currentPage < totalPages) {

    fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks
                                        &user=legendeater
                                        &page=${currentPage}
                                        &from=${fromDate}
                                        &to=${toDate}
                                        &limit=200
                                        &api_key=d1fe8154dbbbd2656d9748992effc9ca
                                        &format=json`, 
                                        {mode: 'cors'}
                                    )
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {

        console.log(response);

        totalPages = response.recenttracks['@attr'].totalPages;

        // for each track in tracks, add the title and artist as an object
        for (let i = 0; i < response.recenttracks.track.length; i++) {

            tracks.push({track: response.recenttracks.track[i].name, 
                        artist: response.recenttracks.track[i].artist["#text"]
                    });
        }

        for (let i = 0; i < tracks.length; i++) {

            console.log(tracks[i]);

            const trackP = document.createElement('p');
            trackP.textContent = tracks[i].artist + " - " + tracks[i].track;
            tracksContainer.appendChild(trackP);
        }
    });
}

// Get all tracks for every instance of a date through the years, from today back to 2000

// Convert a date string to Unix time
export const dateToUnixTime = (dateString) => {
    const date = new Date(dateString);
    const timeInMs = date.getTime();
    const unixTimestamp = Math.floor(timeInMs / 1000);
    return unixTimestamp;
}

// Take a year off a Unix date
// 31,536,000 seconds in a year


const goButton = document.querySelector(".go-button");

goButton.addEventListener("click", () => {

    // for each track, add the name as a <p> to .tracks
    
    tracksContainer.innerHTML = "";

    let datePicker = document.querySelector(".date");
    let datePicked = new Date(datePicker.value);

    let unixDate = dateToUnixTime(datePicked);

    getTracks(unixDate);
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