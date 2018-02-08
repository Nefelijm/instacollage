window.addEventListener('load', () => { 

  document.addEventListener('dragstart', (ev) => {
    ev.dataTransfer.setData('key', ev.target.id);
  });

  document.addEventListener('dragover', (ev) => {
    ev.preventDefault();
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