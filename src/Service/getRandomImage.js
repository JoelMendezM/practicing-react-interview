
export const getRandomImage = async (firstWord) => {
    const response = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    const data = await response.json()
    const { url } = data;
    return url
  // fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
  // .then(res => res.json())
  // .then(response => {
  //   const { url } = response
  //   setRandomUrlImage(url)
  //   console.log(url,'url Img api')
  // })
}



export const getRandomFact = async () => {
  const response = await fetch(CAT_FACT_URL);
  const data = await response.json();
  const { fact } = data;
  return fact;
}