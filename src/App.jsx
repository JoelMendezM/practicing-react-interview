import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const CAT_FACT_URL = "https://catfact.ninja/fact";
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
  const [randomFact, setRandomFact] = useState();
  const [randomUrlImage, setRandomUrlImage] = useState();

//It's a good practice to separate responsibilities when using useEffect. In this way, you avoid nesting too much code in one useEffect

  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setRandomFact(fact)
    });
  }, []);

  useEffect(() => {
    if (!randomFact) return

    const firstWord = randomFact.split(' ')[0];
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      setRandomUrlImage(url)
      console.log(url,'url Img api')
    })
  },[randomFact])

  return (
    <div>
      <p>FACT</p>
      {randomFact && <p>{randomFact}</p>}
      {randomUrlImage && <img src={`${CAT_PREFIX_IMAGE_URL}${randomUrlImage}`} alt='cat picture extracted with a custom text' />}
    </div>
  );
}

export default App;
