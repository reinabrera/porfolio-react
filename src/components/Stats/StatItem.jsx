export default function StatItem({count, text}) {
  return (
    <div className="stat-item flex">
      <div className="stat-item--wrapper">
        <div>{count}+</div>
        <span className="base">{text}</span>
      </div>
    </div>
  )
}