function getTracks() {

    // get last 50 tracks for legendeater

    return fetch(
        "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=legendeater&api_key=d1fe8154dbbbd2656d9748992effc9ca&format=json", {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        return response;
    })

    
}

const goButton = document.querySelector(".go-button");

goButton.addEventListener("click", () => {

    // for each track, add the name as a <p> to .tracks

    let container = document.querySelector(".tracks");

    let tracks = getTracks()
    .then(function(tracks) {
        for (let i = 0; i < 51; i++) {
            const track = document.createElement('p');
            track.textContent = tracks.recenttracks.track[i].name
            container.appendChild(track);
        }
    });
});