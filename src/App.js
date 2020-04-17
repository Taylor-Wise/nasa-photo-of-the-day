import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import styled from "styled-components";

const AppBG = styled.div`
font-family: 'Concert One', cursive;
font-size: 1.8rem;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
background-image: linear-gradient(to bottom right, #04032b, #6c3990, #84037c);
`;

const NasaTitle = styled.h1`
color: #3366ff;
text-shadow: 3px 3px white;
`;

const App = () => {

  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response =>  setPhoto(response.data))
    .catch(error => console.log("Error!", error))
  }, [])

  console.log(photo)

  return (
    <AppBG>
      <NasaTitle>NASA Astronomy Photo Of The Day!</NasaTitle>
      <PhotoCard image={photo}/>
    </AppBG>
  );
};

export default App;
