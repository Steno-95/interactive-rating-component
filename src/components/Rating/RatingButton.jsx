function RatingButton({ value }) {
  return (
    <label
      className="btn btn-radio flex items-center justify-center hover:bg-(--primary) hover:text-(--grey-dark) focus-within:bg-(--white) focus-within:text-(--grey-dark) pt-1"
      htmlFor={"rating" + value}
    >
      <input
        type="radio"
        id={"rating" + value}
        name="ratings"
        value={value}
        required
      />
      {value}
    </label>
  );
}

export default RatingButton;
