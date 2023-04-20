// Get all tracks for a specific date
export function getTracks(date, user) {

    let unixDate = dateToUnixTime(date);

    let fromDate = unixDate;
    let toDate = unixDate + 86399; // 24 hours (-1s) in seconds

    let currentPage = 1;
    let totalPages = 2; // Placeholder value. Will be replace on the first while run.

    let tracks = [];

    // while(currentPage < totalPages) {

    return fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks
                                        &user=${user}
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

        totalPages = response.recenttracks['@attr'].totalPages;

        // for each track in tracks, add the title and artist as an object
        for (let i = 0; i < response.recenttracks.track.length; i++) {

            tracks.push({ 
                title: response.recenttracks.track[i].name, 
                artist: response.recenttracks.track[i].artist["#text"],
                album: response.recenttracks.track[i].album["#text"],
            });
        }

    return tracks;
        
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


