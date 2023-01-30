import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const CAT_FACT_URL = "https://catfact.ninja/fact";
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
  const [randomFact, setRandomFact] = useState();
  // const [firstWord, setFirstWord] = useState();
  const [randomUrlImage, setRandomUrlImage] = useState();

  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setRandomFact(fact)

        const firstWord = fact.split(' ')[0];

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setRandomUrlImage(url)
            console.log(url,'url Img api')
          })
        });

    
    // const words = data.fact.split(' ')
    // const firstWord = words[0]
    // setFirstWord(firstWord);
  }, []);

  // const getRandomFact = async () => {
  //   const { data }  = await axios.get(`https://catfact.ninja/fact`);
  //   setRandomFact(data);

  //   const words = data.fact.split(' ')
  //   const firstWord = words[0]
  //   setFirstWord(firstWord);
  // };

  // useEffect(() => {
  //   if (!firstWord) return

  //   fetch(``)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data, 'url');
  //     setRandonImage(data);
  //   });
  //   // const { data } = await axios.get(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`);
  //   // const { url } = data
  //   // // console.log(url, 'image data');
  //   // setRandonImage(url);
  // }, [firstWord])

  return (
    <div>
      <p>FACT</p>
      {randomFact && <p>{randomFact}</p>}
      {/* <p>FIRST WORD</p> */}
      {/* <p>{firstWord}</p> */}
      {randomUrlImage && <img src={`${CAT_PREFIX_IMAGE_URL}${randomUrlImage}`} alt='cat picture extracted with a custom text' />}
    </div>
  );
}

export default App;
