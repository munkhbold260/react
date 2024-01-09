import Card from "./Card";

const dummyData = [
  {
    title: "title 1",
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/314452-05012024-1704447092-1018013726-Picture1.jpg",
  },
  {
    title: "title 2",
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/314452-05012024-1704447092-1018013726-Picture1.jpg",
  },
  {
    title: "title 3",
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/314452-05012024-1704447092-1018013726-Picture1.jpg",
  },
];
export default function Cards() {
  console.log(dummyData[0]);
  return (
    <div className="cards">
      {dummyData.map((e) => (
        <Card data={e} />
      ))}
    </div>
  );
}
