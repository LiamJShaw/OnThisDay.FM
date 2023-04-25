import SpotifyTokenManager from './spotifyTokenManager.js';

const clientId = "74ac949ca587402484dcef1408b4d7f3";
const clientSecret = "313a2c15fc844ca5bc22755572874ee7";
const tokenManager = new SpotifyTokenManager(clientId, clientSecret);


function stringSimilarity(a, b) {
  let similarity = 0;
  const minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength; i++) {
    if (a[i].toLowerCase() === b[i].toLowerCase()) {
      similarity++;
    }
  }

  return similarity / minLength;
}

export async function searchTrack(title, artist, album, market = 'US') {
  const accessToken = await tokenManager.getAccessToken();

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  async function search(query) {
    const params = new URLSearchParams({
      q: query,
      type: 'track',
      limit: 10,
      market: market,
    });

    const response = await fetch(`https://api.spotify.com/v1/search?${params}`, {
      headers: headers,
    });

    if (response.status === 200) {
      const data = await response.json();
      return data.tracks.items;
    }

    return [];
  }

  function selectBestTrack(tracks) {
    let bestTrack = null;
    let bestSimilarity = 0;
    let bestPopularity = 0;

    for (const track of tracks) {
      
      const foundTitle = track.name.toLowerCase();
      const similarity = stringSimilarity(title.toLowerCase(), foundTitle);

      if (similarity >= 0.85 && (similarity > bestSimilarity || track.popularity > bestPopularity)) {
        bestTrack = track;
        bestSimilarity = similarity;
        bestPopularity = track.popularity;
      }
    }

    return bestTrack;
  }

  const queryWithAlbum = `track:${title} artist:${artist} album:${album}`;
  const tracksWithAlbum = await search(queryWithAlbum);
  let foundTrack = selectBestTrack(tracksWithAlbum);

  if (!foundTrack) {
    console.error(`${title} by ${artist} not found with album. Trying without album...`);

    const queryWithoutAlbum = `track:${title} artist:${artist}`;
    const tracksWithoutAlbum = await search(queryWithoutAlbum);
    foundTrack = selectBestTrack(tracksWithoutAlbum);
  }

  if (foundTrack) {
    console.log(`Found track: "${foundTrack.name}" by "${foundTrack.artists[0].name}"`);
    return {
      url: foundTrack.external_urls.spotify,
      preview_url: foundTrack.preview_url,
    };
  } else {
    console.error(`${title} by ${artist} not found`);
    return { url: null, preview_url: null };
  }
}

export async function searchMultipleTracks(tracksByYear) {
  const updatedTracksByYear = {};

  for (const [year, tracks] of Object.entries(tracksByYear)) {
    updatedTracksByYear[year] = [];

    for (const track of tracks) {
      const { title, artist, album } = track;
      const { url, preview_url } = await searchTrack(title, artist, album);

      updatedTracksByYear[year].push({
        title,
        artist,
        album,
        url,
        preview_url,
      });
    }
  }

  return updatedTracksByYear;
}