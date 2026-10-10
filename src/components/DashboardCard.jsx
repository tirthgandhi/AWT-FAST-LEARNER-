import { memo } from "react";
export default memo(function DashboardCard({
  title,
  value,
  icon: Icon,
  subtitle,
}) {
  return (
    <section className="glass-panel stat">
      <div className="stat-top">
        <span>{title}</span>
        <Icon size={19} />
      </div>
      <strong>{value}</strong>
      <small>{subtitle}</small>
    </section>
  );
});
