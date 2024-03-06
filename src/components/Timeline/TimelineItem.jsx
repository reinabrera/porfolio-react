export default function TimelineItem({ data }) {
  const Logo = data.company_logo;
  const Icon = data.icon;
  return (
    <div className="timeline-item">
      <div className="item base">
        <div className="date-range">{data.date}</div>
        <div className="title">{data.job_title && data.job_title}</div>
        <div className="description">
          <span>{data.description}</span>
        </div>
        <div className="company flex items-center">
          <Logo /> <span>{data.company_name}</span>
        </div>
        <div className="timeline-icon">
          <Icon />
      </div>
      </div>
    </div>
  );
}
