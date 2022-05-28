import React, { useState } from "react";
import Film from "../Film";
import NavBar from "../NavBar";
const Home=(props)=>{
    const [title, setTitle]=useState('')
    const handleChange =(e)=>{
        setTitle(e.target.value);
        console.log(e.target.value);
    }
    return(
        <>
            <div className="top-Header">
                <h1>Film</h1>
                <div className="input">
                    <input type="text" onChange={handleChange} />
                </div>
            </div>
            <NavBar/>
           
            <div className="film">
            {
                props.films.filter((film)=>film.title.toLowerCase().includes(title.toLocaleLowerCase())).map((film)=>(
                    <Film film={film} />
                ))
            }
            </div>
        </>
    )
}
export default Home;