import { useState, useEffect } from 'react';
import { getRandomImage } from '../Service/getRandomImage';


export function useCatImage ({ randomFact }) {
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
  const [randomUrlImage, setRandomUrlImage] = useState();

  useEffect(() => {
    if (!randomFact) return

    const firstWord = randomFact.split(' ')[0];
    getRandomImage(firstWord).then(newUrlImg => setRandomUrlImage(newUrlImg));
  },[randomFact])

  return { randomUrlImage: `${CAT_PREFIX_IMAGE_URL}${randomUrlImage}` }
}