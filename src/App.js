import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard";

const App = () => {

  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response =>  setPhoto([response.data]))
    .catch(error => console.log("Error!", error))
  }, [])

  console.log(photo)

  return (
    <div className="App">
      <h1>Nasa's Astronomy Photo Of The Day!</h1>
      {photo.map(image => (
        <PhotoCard key={image.id} image={image}/>
      ))}
    </div>
  );
};

export default App;
