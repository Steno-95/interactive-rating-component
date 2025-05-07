import { useState } from "react";
import RatingCard from "./components/Rating/RatingCard";
import TYCard from "./components/ThankYouCard/TYCard";

function App() {
  const [submitted, setSubmitted] = useState(false);

  function handleOnSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  function handleReset() {
    setSubmitted(false);
  }
  return (
    <main className="min-h-screen flex flex-col">
      {!submitted && <RatingCard onSubmit={handleOnSubmit} />}
      {submitted && <TYCard onReset={handleReset} />}
    </main>
  );
}

export default App;
