
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import { useState } from 'react';
function App() {
  const [film, setFilm]=useState([{id:0,title:"treize fleuves",image:"https://i.ytimg.com/vi/5FD8J9NabeA/maxresdefault.jpg",description:"film nigenein treize fleuves", duration:"1:37:50s", videoURL:"https://www.youtube.com/embed/Rqiv8ftpM1I"},
  {id:1, title:"treize fleuves",image:"https://i.ytimg.com/vi/lilvr5NpoOA/maxresdefault.jpg",description:"film nigenein treize fleuves", duration:"1:37:50s", videoURL:"https://www.youtube.com/embed/lilvr5NpoOA"},
  {id:2,title:"treize",image:"https://i.ytimg.com/vi/Col_Sv8Q_ek/mqdefault.jpg",description:"film nigenein ", duration:"1:37:50s", videoURL:"https://www.youtube.com/embed/Col_Sv8Q_ek"},
  {id:3, title:"pouvoir",image:"https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F03.2F26.2F7cc546c5-df30-4e9b-97b3-9a1772ecfae4.2Ejpeg/753x565/cr/wqkgRFIgLyBWb2ljaQ%3D%3D/crop-from/top/focus-point/277%2C352/5-films-d-action-a-regarder-pendant-la-periode-de-confinement.jpg",description:"film action ", duration:"2:37:50s", videoURL:"https://www.youtube.com/embed/KMPvA7gE-14"},
  {id:4, title:"nouveauté",image:"https://imgr.cineserie.com/2021/01/zone-hostile-c-est-quoi-ce-film-netflix-avec-anthony-mackie.png?imgeng=/f_jpg/cmpr_0/w_2550/h_1428/m_cropbox&ver=1",description:"film nigenein ", duration:"1:37:50s", videoURL:"https://www.youtube.com/embed/XMesGMIorG4"},
  {id:5, title:"amercian",image:"https://mobile-img.lpcdn.ca/lpca/924x/847e8974-64e2-11ea-b33c-02fe89184577.jpg",description:"film nigenein ", duration:"1:37:50s", videoURL:"https://www.youtube.com/embed/p-FFnpykRAA"},
  {id:6, title:"Fim new",image:"https://fr.web.img2.acsta.net/newsv7/19/12/13/14/41/4883953.jpg",description:"film nigenein ", duration:"1:37:00s", videoURL:"https://www.youtube.com/embed/uEeKluAxS_I"},
  {id:7, title:"action français",image:"https://images.cinefil.com/movies/1101498_240x360.webp",description:"film nigenein ", duration:"1:37:40s", videoURL:"https://www.youtube.com/embed/ZldeZucqw8U"},
  {id:8, title:"film ear-foce",image:"https://i.ytimg.com/vi/FIR_rB6ghzI/hqdefault.jpg",description:"film nigenein ", duration:"1:37:50s", videoURL:"https://www.youtube.com/embed/rdfBR6QjkB8?list=RDCMUCejAJAuoB5J4xk7UU1fz7Xg"},
  {id:9, title:"chantre",image:"https://s2.dmcdn.net/v/MsoTH1Vo2pet4Qhoa/x1080",description:"film nigenein ", duration:"1:20:50s", videoURL:"https://www.youtube.com/embed/isrsCr2vNQo"},
  {id:10, title:"Nidja 8",image:"https://www.artistikrezo.com/wp-content/uploads/2013/12/Robocop_-_de_Jose_Padilha.jpg",description:"Music chretien", duration:"2:40:50s", videoURL:"https://www.youtube.com/embed/XEeFZw9s_8Q?list=RDXEeFZw9s_8Q"},
  {id:11, title:" music ",image:"https://assets.letemps.ch/sites/default/files/styles/share/public/media/2017/09/13/file6wnlzr32tftu4jv5hr1.jpg.jpeg?itok=e_Fw1l0q",description:"Music chretien", duration:"2:37:50s", videoURL:"https://www.youtube.com/embed/GoPcIEqKYTw?list=RDXEeFZw9s_8Q"},
])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home films={film} />} />
        <Route path='details/:id' element={<Details films={film}/>}/>
      </Routes>
    </>
  );
}

export default App;
