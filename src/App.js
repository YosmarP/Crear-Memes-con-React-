import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [varlinea1, setline1]=useState('');
  const [varlinea2, setline2]=useState('');
  const [imagen, setimagen]=useState('');
  const onchangelinea1 = function(evento){
    //debugger;
    //alert(evento);
    setline1(evento.target.value);
  } 
  const onchangelinea2 = function(evento){
    setline2(evento.target.value);
  } 
  const onchangeimagen = function(evento){
    setimagen(evento.target.value);
  } 
  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      
      var img    = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
});


  } 
  return (
    <div className="App">
      <select onChange={onchangeimagen}>
        <option value="tren">Tren</option>
        <option value="batman">Batman</option>
        <option value="monster">Monster</option>
        <option value="lobo">Perro</option>
        <option value="muchacho">Muchacho</option>
        <option value="bob">Bob Esponja</option>        
      </select><br />
      <input onChange={onchangelinea1} type="text" placeholder='linea 1'/><br />
      <input onChange={onchangelinea2}type="text" placeholder='linea 2'/><br />
      <button onClick={onClickExportar}>Exportar</button>
      <div className='meme' id='meme'>
        <span>{varlinea1}</span> <br />
        <span>{varlinea2}</span>
        <img src={"/img/"+imagen+".JPG"}/>
      </div>
    </div>
  );
}

export default App;
