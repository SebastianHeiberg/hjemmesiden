<script>
  const gallery = document.getElementById('gallery');

  fetch('https://raw.githubusercontent.com/SebastianHeiberg/hjemmesiden/gh-pages/pictures/paintings/files.json')
    .then(response => response.json())
    .then(files => {
      files.forEach(file => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/SebastianHeiberg/hjemmesiden/gh-pages/pictures/paintings/${file.path}`;
        card.appendChild(img);
        if (file.description) {
          const title = document.createElement('h3');
          title.textContent = file.description;
          card.appendChild(title);
        }
        gallery.appendChild(card);
      });
    })
    .catch(error => console.error(error));
</script>
