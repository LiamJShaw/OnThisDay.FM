const tracksContainer = document.querySelector(".tracks");

// export async function updateUI(searchResults) {

//     tracksContainer.innerHTML = "";
  
//     Object.entries(searchResults).forEach(([year, tracks]) => {
//       const yearElement = document.createElement("h2");
//       yearElement.innerText = year;
//       yearElement.classList.add("collapsible");
//       yearElement.addEventListener("click", function () {
//         this.classList.toggle("active");
//         const content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//           content.style.maxHeight = null;
//         } else {
//           content.style.maxHeight = content.scrollHeight + "px";
//         }
//       });
  
//       const trackListElement = document.createElement("ul");
//       tracks.forEach((track) => {
//         const { title, artist, album, url } = track;
//         const trackElement = document.createElement("li");
//         trackElement.innerHTML = `${title} by ${artist} on the album ${album}. <a href="${url}" target="_blank">Listen on Spotify</a>`;
//         trackListElement.appendChild(trackElement);
//       });
  
//       const yearContainer = document.createElement("div");
//       yearContainer.classList.add("year-container");
//       yearContainer.appendChild(yearElement);
//       yearContainer.appendChild(trackListElement);
  
//       tracksContainer.appendChild(yearContainer);
//     });
//   }
  

export function updateUI(tracksByYear) {
  
    tracksContainer.innerHTML = "";
  
    const years = Object.keys(tracksByYear).reverse();
  
    years.forEach((year) => {
      const tracks = tracksByYear[year].reverse();
      const yearContainer = document.createElement("div");
      yearContainer.classList.add("year-container");
      yearContainer.innerHTML = `<h2>${year}</h2>`;
  
      tracks.forEach((track) => {
        const trackContainer = document.createElement("div");
        trackContainer.classList.add("track-container");
        trackContainer.innerHTML = `<p><strong>${track.title}</strong> - ${track.artist}</p>`;
        yearContainer.appendChild(trackContainer);
      });
  
      tracksContainer.appendChild(yearContainer);
    });
  }
