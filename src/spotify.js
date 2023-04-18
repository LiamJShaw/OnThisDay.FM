import SpotifyTokenManager from './spotifyTokenManager.js';

const clientId = "74ac949ca587402484dcef1408b4d7f3";
const clientSecret = "313a2c15fc844ca5bc22755572874ee7";
const tokenManager = new SpotifyTokenManager(clientId, clientSecret);

export async function searchTrack(title, artist, album, market = "US") {
  const accessToken = await tokenManager.getAccessToken();

  const query = `track:${title} artist:${artist} album:${album}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const params = new URLSearchParams({
    q: query,
    type: "track",
    limit: 1,
    market: market,
  });

  const response = await fetch(`https://api.spotify.com/v1/search?${params}`, {
    headers: headers,
  });

  if (response.status === 200) {
    const data = await response.json();
    const tracks = data.tracks.items;
    if (tracks.length > 0) {
      return tracks[0].external_urls.spotify;
    }
  }

  return null;
}

// export async function searchMultipleTracks(tracksToSearch) {
//   // Perform the searches and store the results in an array
//   const searchResults = [];

//   for (const track of tracksToSearch) {

//     console.log(track);

//     const spotifyUrl = await searchTrack(track.title, track.artist, track.album);
//     searchResults.push({ title: track.title, artist: track.artist, album:track.album, spotifyUrl: spotifyUrl });
//   }

//   return searchResults;
// }

export async function searchMultipleTracks(tracksToSearch) {
    const searchResults = [];

    for (const track of tracksToSearch) {
      const { title, artist, album } = track;
      const trackUrl = await searchTrack(title, artist, album);
      if (trackUrl) {
        searchResults.push({ title, artist, album, url: trackUrl });
      } else {
        console.log(`Could not find track: ${title} by ${artist}`);
      }
    }

    return searchResults;
}