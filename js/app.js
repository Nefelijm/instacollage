window.addEventListener('load', () => { 
// se agrega el evento dragstart a los elementos arrastrables, y se especifican los datos de arrastre.

// const imgDrag = document.getElementsByClassName('styleImgDrag');
// const imgDrop = document.getElementsByClassName('imgDrop');

  document.addEventListener('dragstart', (ev) => {
    ev.dataTransfer.setData('key', ev.target.id);
    console.log('its dragging...');
  });

  document.addEventListener('dragover', (ev) => {
    ev.preventDefault();
    console.log('its dragover...');
  });

  document.addEventListener('drop', (ev) => {
  // let dropItem = ev.dataTransfer.getData('text');
    ev.preventDefault();
    let imagen = ev.dataTransfer.getData('key');
    let elem = document.getElementById(imagen);

    if (ev.target.className === 'dropp') {
      
      ev.target.setAttribute('src', elem.src);
    }
  });

});