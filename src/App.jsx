import { useState } from "react";
import RatingCard from "./components/Rating/RatingCard";
import TYCard from "./components/ThankYouCard/TYCard";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(1);

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.ratings.value);
    setRating(e.target.ratings.value);
    setSubmitted(true);
  }
  function handleReset() {
    setSubmitted(false);
  }
  return (
    <main className="min-h-screen flex flex-col">
      {!submitted && <RatingCard onSubmit={handleOnSubmit} />}
      {submitted && <TYCard onReset={handleReset} rating={rating} />}
    </main>
  );
}

export default App;
