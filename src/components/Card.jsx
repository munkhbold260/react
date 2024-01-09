import "../styles/card.css";
const Card = ({ data }) => {
  // console.log("inside", data);
  return (
    <div className="card">
      <p>{data.title}</p>
      <img src={data.img} alt="" />
    </div>
  );
};

export default Card;
