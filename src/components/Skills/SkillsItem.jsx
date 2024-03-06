export default function SkillsItems({data}) {
  return(<div className="item flex">
    <div className="item-content flex items-center flex flex-center">
      <img src={data.img} alt={data.name + " " +"icon"} />
      <span className="small">{data.name}</span>
    </div>
  </div>);
}