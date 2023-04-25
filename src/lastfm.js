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

        for (let i = 0; i < data.recenttracks.track.length; i++) {
        tracks.push({ 
            title: data.recenttracks.track[i].name, 
            artist: data.recenttracks.track[i].artist['#text'],
            album: data.recenttracks.track[i].album['#text'],
        });
        }

        currentPage++;
    }

    return tracks;
}
  

// Get all tracks for every instance of a date through the years, from chosen date back to 2002
// export async function getAllTracks(user, date) {
//     const currentDate = new Date(date);
//     const years = Array.from(
//       { length: currentDate.getFullYear() - 1999 },
//       (_, i) => 2000 + i
//     ).reverse();
  
//     const allYears = [];
  
//     for (const year of years) {
//       const fromDate = new Date(year, currentDate.getMonth(), currentDate.getDate());
//       const toDate = new Date(year, currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);
//       const tracks = await getTracks(user, fromDate, toDate);
//       allYears.push({ year, tracks });
//     }
  
//     const nonEmptyYears = allYears.filter(({ tracks }) => tracks.length > 0);

//     return nonEmptyYears;
//   }
  
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
  