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

// <!-- Rating state start -->

//     How did we do?  1 2 3 4 5 Submit

//     <!-- Rating state end -->

//     <!-- Thank you state start -->

//     You selected
//     <!-- Add rating here -->
//     out of 5 Thank you! We appreciate you taking the time to give a rating. If
//     you ever need more support, don’t hesitate to get in touch!

//     <!-- Thank you state end -->
