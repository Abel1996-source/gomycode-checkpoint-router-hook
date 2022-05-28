import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar";
const Details = (props) => {
  let id = useParams().id;
  let film = props.films.find((f) => f.id == id);
  let navigate=useNavigate();
  return (
    <>
      <NavBar />
      <div className="content">
        <div className="card-video">
          <iframe
            width="538"
            height="430"
            src={film.videoURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="desc">
          <h2>{film.title} </h2>
          <p>{film.description} </p>
          <button onClick={()=>navigate("/")}>GO TO HOME</button>
        </div>
      </div>
    </>
  );
};
export default Details;
