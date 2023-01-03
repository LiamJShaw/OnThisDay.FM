/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0EsZ0pBQWdKLGFBQWE7QUFDN0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbnRoaXNkYXkuZm0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0VHJhY2tzKCkge1xuXG4gICAgLy8gZ2V0IGxhc3QgNTAgdHJhY2tzIGZvciBsZWdlbmRlYXRlclxuXG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgICBcImh0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wLz9tZXRob2Q9dXNlci5nZXRyZWNlbnR0cmFja3MmdXNlcj1sZWdlbmRlYXRlciZhcGlfa2V5PWQxZmU4MTU0ZGJiYmQyNjU2ZDk3NDg5OTJlZmZjOWNhJmZvcm1hdD1qc29uXCIsIHttb2RlOiAnY29ycyd9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSlcblxuICAgIFxufVxuXG5jb25zdCBnb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ28tYnV0dG9uXCIpO1xuXG5nb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgLy8gZm9yIGVhY2ggdHJhY2ssIGFkZCB0aGUgbmFtZSBhcyBhIDxwPiB0byAudHJhY2tzXG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFja3NcIik7XG5cbiAgICBsZXQgdHJhY2tzID0gZ2V0VHJhY2tzKClcbiAgICAudGhlbihmdW5jdGlvbih0cmFja3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRyYWNrLnRleHRDb250ZW50ID0gdHJhY2tzLnJlY2VudHRyYWNrcy50cmFja1tpXS5uYW1lXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHJhY2spO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=