import RatingButton from "./Rating/RatingButton";

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <article className="card">
        <button
          className="btn btn-radio size-8 flex items-center justify-center"
          aria-label="icon of a star"
        >
          <img src="/images/icon-star.svg" alt="icon of a star" />
        </button>
        <h1 className="w-fit">How did we do?</h1>
        <p className="max-w-[15rem]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form
          className="flex flex-col gap-5 items-center justify-center"
          onSubmit={(e) => e.preventDefault}
        >
          <fieldset className="flex items-center justify-center gap-4 font-bold">
            {[1, 2, 3, 4, 5].map((item) => (
              <RatingButton key={item} value={item} />
            ))}
          </fieldset>
          <button
            type="submit"
            className="btn text-(--grey-dark) font-bold text-[.9rem] tracking-widest bg-(--primary) w-full pt-2 pb-1 "
          >
            SUBMIT
          </button>
        </form>
      </article>
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
