/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBLHdCQUF3Qjs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBLG1HQUFtRyxZQUFZLFFBQVEsU0FBUyxNQUFNLE9BQU8sbUVBQW1FLGFBQWE7QUFDN047QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb250aGlzZGF5LmZtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFRyYWNrcyhkYXRlKSB7XG5cbiAgICAvLyBHZXQgdHJhY2tzIGZvciBzcGVjaWZpYyBkYXRlXG4gICAgLy8gQWRkIGZpcnN0IHBhZ2Ugb2YgdHJhY2tzIHRvIGFycmF5LCBmcm9tIDAgdG8gcmVjZW50dHJhY2tzIGFycmF5U2l6ZVxuICAgIC8vIElmIHRvdGFsUGFnZXMgPiAxLCBpbmNyZW1lbnQgcGFnZSBhbmQgcnVuIGFnYWluXG4gICAgLy8gUmV0dXJuIGFycmF5IG9mIHRyYWNrc1xuXG4gICAgbGV0IGZyb21EYXRlID0gZGF0ZTtcbiAgICBsZXQgdG9EYXRlID0gZGF0ZSArIDg2Mzk5OyAvLyAyNCBob3VycyAoLTFzKSBpbiBzZWNvbmRzXG5cbiAgICBsZXQgY3VycmVudFBhZ2UgPSAxO1xuICAgIGxldCB0b3RhbFBhZ2VzID0gMjsgLy8gUGxhY2Vob2xkZXIgdmFsdWUuIFdpbGwgYmUgcmVwbGFjZSBvbiB0aGUgZmlyc3Qgd2hpbGUgcnVuLlxuXG4gICAgbGV0IHRyYWNrcyA9IFtdO1xuXG4gICAgd2hpbGUoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGxldCBjdXJyZW50UGFnZU9mVHJhY2tzID0gZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAvP21ldGhvZD11c2VyLmdldHJlY2VudHRyYWNrcyZ1c2VyPWxlZ2VuZGVhdGVyJnBhZ2U9JHtjdXJyZW50UGFnZX0mZnJvbT0ke2Zyb21EYXRlfSZ0bz0ke3RvRGF0ZX0mbGltaXQ9MjAwJmFwaV9rZXk9ZDFmZTgxNTRkYmJiZDI2NTZkOTc0ODk5MmVmZmM5Y2EmZm9ybWF0PWpzb25gLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRvdGFsUGFnZXMgPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRyYWNrcy5jb25jYXQocmVzcG9uc2UudHJhY2tzLnJlY2VudHRyYWNrcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgdHJhY2tsaXN0OiBcIiArIHRyYWNrcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBkYXRlVG9Vbml4VGltZSA9IChkYXRlU3RyaW5nKSA9PiB7XG4gICAgLy8gVE9ETzogQ2hlY2sgaXQncyBhIHZhbGlkIGRhdGUgaW4gdGhlIGNvcnJlY3QgZm9ybWF0P1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICBjb25zdCB0aW1lSW5NaWxsaXNlY29uZCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHVuaXhUaW1lc3RhbXAgPSBNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIHVuaXhUaW1lc3RhbXA7XG59XG5cbmNvbnN0IGdvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nby1idXR0b25cIik7XG5cbmdvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAvLyBmb3IgZWFjaCB0cmFjaywgYWRkIHRoZSBuYW1lIGFzIGEgPHA+IHRvIC50cmFja3NcblxuICAgIGxldCB0cmFja3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYWNrc1wiKTtcbiAgICB0cmFja3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xuICAgIGxldCBkYXRlUGlja2VkID0gbmV3IERhdGUoZGF0ZVBpY2tlci52YWx1ZSk7XG5cbiAgICBsZXQgdW5peERhdGUgPSBkYXRlVG9Vbml4VGltZShkYXRlUGlja2VkKTtcblxuICAgIGxldCB0cmFja3MgPSBnZXRUcmFja3ModW5peERhdGUpXG4gICAgLnRoZW4oZnVuY3Rpb24odHJhY2tzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0cmFjay50ZXh0Q29udGVudCA9IHRyYWNrcy5yZWNlbnR0cmFja3MudHJhY2tbaV0ubmFtZVxuICAgICAgICAgICAgdHJhY2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWNrKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==