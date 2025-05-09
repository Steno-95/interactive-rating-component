function TYButton({ onReset, rating }) {
  return (
    <button
      className="text-(--primary) btn btn-radio w-fit flex items-center justify-center px-3  "
      onClick={onReset}
    >
      <span className="pt-1">You selected {rating} out of 5</span>
    </button>
  );
}

export default TYButton;
