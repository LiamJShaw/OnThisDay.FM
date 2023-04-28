const tracksContainer = document.querySelector(".tracks");

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
        const link = document.createElement("a");
        link.href = track.url;
        link.target = "_blank";
        link.textContent = track.title;
        trackContainer.appendChild(link);
        trackContainer.innerHTML += ` - ${track.artist}`;
        yearContainer.appendChild(trackContainer);
      });
  
      tracksContainer.appendChild(yearContainer);
    });
  }
  

const exportButton = document.querySelector('.export.button');

export function enableExportButton() {
    exportButton.disabled = false;
}

export function disableExportButton() {
    exportButton.disabled = true;
}

export function showExportContainer(exportString) {
    const exportContainer = document.querySelector('.export-container');
    const exportTextarea = document.querySelector('.export-textarea');

    exportContainer.style.display = 'block';

    // Set the text content in the textarea
    exportTextarea.value = exportString;
}

export function hideExportContainer(exportString) {
    const exportContainer = document.querySelector('.export-container');
    const exportTextarea = document.querySelector('.export-textarea');

    exportContainer.style.display = 'hidden';

    // Set the text content in the textarea
    exportTextarea.value = '';
}