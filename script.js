const gallery = document.getElementById('gallery');

fetch('path/to/folder')
  .then(response => response.json())
  .then(files => {
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = file.path;
        card.appendChild(img);
        if (file.description) {
          const title = document.createElement('h3');
          title.textContent = file.description;
          card.appendChild(title);
        }
        gallery.appendChild(card);
      }
    });
  })
  .catch(error => console.error(error));
