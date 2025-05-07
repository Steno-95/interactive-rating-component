import RatingButton from "./RatingButton";
import RatingHeader from "./RatingHeader";
import RatingIcon from "./RatingIcon";
import RatingSubmitBtn from "./RatingSubmitBtn";
import RatingText from "./RatingText";

function RatingCard({ onSubmit }) {
  return (
    <article className="card rating">
      <RatingIcon />
      <RatingHeader />
      <RatingText />
      <form
        className="flex flex-col gap-5 items-center justify-center"
        onSubmit={onSubmit}
      >
        <fieldset className="flex items-center justify-center gap-4 font-bold">
          {[1, 2, 3, 4, 5].map((item) => (
            <RatingButton key={item} value={item} />
          ))}
        </fieldset>
        <RatingSubmitBtn />
      </form>
    </article>
  );
}

export default RatingCard;
