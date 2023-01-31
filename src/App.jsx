import "./App.css";
import { useCatFact } from "./Hooks/useCatFact";
import { useCatImage } from "./Hooks/useCatImage";

function App() {
  const { randomFact, refreshFact } = useCatFact()
  const { randomUrlImage } = useCatImage({ randomFact });
//It's a good practice to separate responsibilities when using useEffect. In this way, you avoid nesting too much code in one useEffect

  const handleCLick = () => {
    refreshFact()
  }

  return (
    <div>
      <p>FACT</p>
      <button onClick={handleCLick}>Get new Fact</button>
      {randomFact && <p>{randomFact}</p>}
      {randomUrlImage && <img src={randomUrlImage} alt='cat picture extracted with a custom text' />}
    </div>
  );
}

export default App;
