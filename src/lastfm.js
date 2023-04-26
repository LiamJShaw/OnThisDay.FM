// Convert a date string to Unix time, required by this API
const dateToUnixTime = (dateString) => {
    const date = new Date(dateString);
    const timeInMs = date.getTime();
    const unixTimestamp = Math.floor(timeInMs / 1000);
    return unixTimestamp;
}

// Get all tracks for a specific date
export async function getTracks(user, fromDate, toDate) {

    let unixFromDate = dateToUnixTime(fromDate);
    let unixToDate = dateToUnixTime(toDate);

    let currentPage = 1;
    let totalPages = 2; // Placeholder value. Will be replace on the first while run.

    const tracks = [];

    while(currentPage < totalPages) {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks
                                        &user=${user}
                                        &page=${currentPage}
                                        &from=${unixFromDate}
                                        &to=${unixToDate}
                                        &limit=200
                                        &api_key=d1fe8154dbbbd2656d9748992effc9ca
                                        &format=json`, 
                                        {mode: 'cors'}
                                    );

        const data = await response.json();

        totalPages = parseInt(data.recenttracks['@attr'].totalPages);

        

        // The Last.fm API returns the currently playing track as the first element of every result. 
        // We only want this if the user wants the results for today.

        console.log(data);

        const today = new Date();

        if (Array.isArray(data.recenttracks.track)) {
            if (data.recenttracks.track.length > 0 && data.recenttracks.track[0]["@attr"] && data.recenttracks.track[0]["@attr"].nowplaying === "true") {

                if (!(fromDate.toDateString() === today.toDateString())) {
                    // Remove the now playing track from the array
                    data.recenttracks.track = data.recenttracks.track.slice(1);
                }

            }

            for (let i = 0; i < data.recenttracks.track.length; i++) {
                tracks.push({ 
                    title: data.recenttracks.track[i].name, 
                    artist: data.recenttracks.track[i].artist['#text'],
                    album: data.recenttracks.track[i].album['#text'],
                });
            }

        } else {
            if (data.recenttracks.track["@attr"] && data.recenttracks.track["@attr"].nowplaying === "true") {
                if (fromDate.toDateString() === today.toDateString()) {
                    tracks.push({
                        title: data.recenttracks.track.name,
                        artist: data.recenttracks.track.artist['#text'],
                        album: data.recenttracks.track.album['#text'],
                    });
                }
            } else {
                tracks.push({
                    title: data.recenttracks.track.name,
                    artist: data.recenttracks.track.artist['#text'],
                    album: data.recenttracks.track.album['#text'],
                });
            }            
        }

        currentPage++;
    }

    return tracks;
}

function isToday(dateString) {
    
    


    return date.toDateString() === today.toDateString();
}
  
export async function getAllTracks(user, date) {
    const currentDate = new Date(date);
    const years = Array.from(
        { length: currentDate.getFullYear() - 1999 },
        (_, i) => 2000 + i
    );

    const allYears = [];

    for (const year of years) {
        const fromDate = new Date(year, currentDate.getMonth(), currentDate.getDate());
        const toDate = new Date(year, currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);
        const tracks = await getTracks(user, fromDate, toDate);
        allYears.push({ year, tracks });
    }

    const nonEmptyYears = allYears.filter(({ tracks }) => tracks.length > 0);

    // Create an object with the years as keys and the tracks arrays as values
    const tracksByYear = nonEmptyYears.reduce((acc, { year, tracks }) => {
        acc[year] = tracks;
        return acc;
      }, {});

    return tracksByYear;
}