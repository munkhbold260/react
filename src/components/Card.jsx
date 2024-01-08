const Card = ({ data }) => {
  console.log("inside", data);
  return (
    <div>
      <p>{data.title}</p>
      <img src={data.img} alt="" />
    </div>
  );
};

export default Card;
