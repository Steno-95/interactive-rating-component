import TYButton from "./TYButton";
import TYIcon from "./TYIcon";
import TYTextBox from "./TYTextBox";

function TYCard({ onReset }) {
  return (
    <article className="card justify-center items-center px-5 py-6 gap-5">
      <TYIcon />
      <TYButton onReset={onReset} />
      <TYTextBox />
    </article>
  );
}

export default TYCard;
