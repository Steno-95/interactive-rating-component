function TYButton({ onReset }) {
  return (
    <button
      className="text-(--primary) btn btn-radio w-fit flex items-center justify-center p-3"
      onClick={onReset}
    >
      You selected 4 out of 5
    </button>
  );
}

export default TYButton;
