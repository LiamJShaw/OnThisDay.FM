// const tracksContainer = document.querySelector(".tracks");

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
  

const tracksContainer = document.querySelector(".tracks");

export async function updateUI(searchResults) {
  tracksContainer.innerHTML = "";

  Object.entries(searchResults).forEach(([year, tracks]) => {
    const yearElement = document.createElement("h2");
    yearElement.textContent = year;
    yearElement.classList.add("collapsible");
    yearElement.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });

    const trackListElement = document.createElement("div");
    trackListElement.classList.add("tracks");

    tracks.forEach((track) => {
      const { title, artist, album, url } = track;
      const trackElement = document.createElement("div");
      trackElement.classList.add("card");

      const titleElement = document.createElement("h3");
      titleElement.textContent = title;

      const artistElement = document.createElement("p");
      artistElement.textContent = artist;

      const albumElement = document.createElement("p");
      albumElement.textContent = album;

      const listenLinkElement = document.createElement("p");
      const listenLinkAnchor = document.createElement("a");
      listenLinkAnchor.textContent = "Listen on Spotify";
      listenLinkAnchor.href = url;
      listenLinkAnchor.target = "_blank";
      listenLinkElement.appendChild(listenLinkAnchor);

      trackElement.appendChild(titleElement);
      trackElement.appendChild(artistElement);
      trackElement.appendChild(albumElement);
      trackElement.appendChild(listenLinkElement);
      trackListElement.appendChild(trackElement);
    });

    const yearContainer = document.createElement("div");
    yearContainer.classList.add("year-container");
    yearContainer.appendChild(yearElement);
    yearContainer.appendChild(trackListElement);

    tracksContainer.appendChild(yearContainer);
  });
}
