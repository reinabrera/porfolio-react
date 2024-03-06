import StatItem from "./StatItem";
import "./stats.scss";

export default function Stats({data}) {
  return(
    <div className="stats flex">
      {data.map((item, index) => {
        return <StatItem key={"stats-item-" + index} count={item.count} text={item.text} />
      })}
    </div>
  )
}