const CAT_FACT_URL = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const response = await fetch(CAT_FACT_URL);
  const data = await response.json();
  const { fact } = data;
  return fact;
}

// export const getRandomFact = () => {
//   return fetch(CAT_FACT_URL)
//         .then((response) => response.json())
//         .then((data) => {
//         const { fact } = data
//         return fact
//   });
// }