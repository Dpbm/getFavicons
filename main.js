const list = document.getElementById('faviconsList');

function createChild(link, title) {
  const aElement = document.createElement('a');
  aElement.setAttribute('href', link);
  aElement.setAttribute('target', '_blank');
  aElement.setAttribute('download', title);
  aElement.setAttribute('title', 'download');

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', link);

  aElement.appendChild(imgElement);

  list.appendChild(aElement);

}

async function getFavicons() {
  browser.tabs.query({ currentWindow: true }).then((tabs) => {
    list.innerHTML = "";

    for (const tab of tabs) {
      const { favIconUrl, title } = tab;

      if (favIconUrl) createChild(favIconUrl, title);
    }
  });
}

document.addEventListener("DOMContentLoaded", getFavicons);