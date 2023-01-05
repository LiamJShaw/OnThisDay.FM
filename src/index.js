function getTracks(date) {

    // Get tracks for specific date
    // Add first page of tracks to array, from 0 to recenttracks arraySize
    // If totalPages > 1, increment page and run again
    // Return array of tracks

    let fromDate = date;
    let toDate = date + 86399; // 24 hours (-1s) in seconds

    let currentPage = 1;
    let totalPages = 2; // Placeholder value. Will be replace on the first while run.

    let tracks = [];

    while(currentPage < totalPages) {
        let currentPageOfTracks = fetch(
            `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=legendeater&page=${currentPage}&from=${fromDate}&to=${toDate}&limit=200&api_key=d1fe8154dbbbd2656d9748992effc9ca&format=json`, {mode: 'cors'})
        .then(function(response) {
            totalPages = 1;
            return response.json();
        })
        .then(function(response) {
            tracks.concat(response.tracks.recenttracks);
            console.log("Current tracklist: " + tracks);
            return response;
        })
    }
}

const dateToUnixTime = (dateString) => {
    // TODO: Check it's a valid date in the correct format?
    const date = new Date(dateString);
    const timeInMillisecond = date.getTime();
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return unixTimestamp;
}

const goButton = document.querySelector(".go-button");

goButton.addEventListener("click", () => {

    // for each track, add the name as a <p> to .tracks

    let tracksContainer = document.querySelector(".tracks");
    tracksContainer.innerHTML = "";

    let datePicker = document.querySelector(".date");
    let datePicked = new Date(datePicker.value);

    let unixDate = dateToUnixTime(datePicked);

    let tracks = getTracks(unixDate)
    .then(function(tracks) {
        for (let i = 0; i < 51; i++) {
            const track = document.createElement('p');
            track.textContent = tracks.recenttracks.track[i].name
            tracksContainer.appendChild(track);
        }
    });
});

