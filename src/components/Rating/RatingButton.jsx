function RatingButton({ value }) {
  return (
    <label
      className="btn btn-radio flex items-center justify-center hover:bg-(--primary) hover:text-(--grey-dark) "
      htmlFor={"rating" + value}
      onClick={(e) => {
        if (!e.target.value) return;
        console.log(e.target);
      }}
    >
      <input type="radio" id={"rating" + value} name="ratings" value={value} />
      {value}
    </label>
  );
}

export default RatingButton;
