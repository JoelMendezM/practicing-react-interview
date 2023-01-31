import React, { useEffect, useState } from "react";
import "./App.css";
import { getRandomFact } from "./Service/getRandomFact";
import { getRandomImage } from "./Service/getRandomImage";

function App() {
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
  const [randomFact, setRandomFact] = useState();
  const [randomUrlImage, setRandomUrlImage] = useState();

//It's a good practice to separate responsibilities when using useEffect. In this way, you avoid nesting too much code in one useEffect
  

  useEffect(() => {
    getRandomFact().then(newFact => setRandomFact(newFact));
  }, []);

  useEffect(() => {
    if (!randomFact) return

    const firstWord = randomFact.split(' ')[0];
    getRandomImage(firstWord).then(newUrlImg => setRandomUrlImage(newUrlImg));
  },[randomFact])

  const handleCLick = () => {
    getRandomFact().then(newFact => setRandomFact(newFact));
  }

  return (
    <div>
      <p>FACT</p>
      <button onClick={handleCLick}>Get new Fact</button>
      {randomFact && <p>{randomFact}</p>}
      {randomUrlImage && <img src={`${CAT_PREFIX_IMAGE_URL}${randomUrlImage}`} alt='cat picture extracted with a custom text' />}
    </div>
  );
}

export default App;
