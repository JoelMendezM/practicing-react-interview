import { useState, useEffect } from "react";
import { getRandomFact } from "../Service/getRandomFact";

export const useCatFact = () => {
  const [randomFact, setRandomFact] = useState();

  const refreshFact = () => {
    getRandomFact().then(newFact => setRandomFact(newFact));
  }

  useEffect(refreshFact, []);

  return { randomFact, refreshFact };
}