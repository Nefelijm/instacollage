window.addEventListener('load', () => {
// se agrega el evento dragstart a los elementos arrastrables, y se especifican los datos de arrastre.

// const imgDrag = document.getElementsByClassName('styleImgDrag');
// const imgDrop = document.getElementsByClassName('imgDrop');

  document.addEventListener('dragstart', (ev) => {
    ev.dataTransfer.setData('text', ev.target.className);
    console.log('its dragging...');
  });

  document.addEventListener('dragover', (ev) => {
    ev.preventDefault();
    console.log('its dragover...');
  });

  document.addEventListener('drop', (ev) => {
  // let dropItem = ev.dataTransfer.getData('text');
    ev.preventDefault();
    if (event.target.className === 'imgDrop') {
      let imagen = ev.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById(imagen));
    }
  });

// hace falta comunicar el evento dragstart con el evento drop
});