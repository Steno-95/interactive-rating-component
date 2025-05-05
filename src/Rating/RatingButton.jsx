function RatingButton({ value }) {
  return (
    <label
      className="btn btn-radio flex items-center justify-center"
      onClick={(e) => {
        if (!e.target.value) return;
        console.log(e.target);
      }}
    >
      <input type="radio" name="rating" value={value} className="" />
      {value}
    </label>
  );
}

export default RatingButton;
