export default function GlassPanel({
  children,
  className = "",
  padding,
  ...props
}) {
  return (
    <section
      className={"glass-panel " + className}
      style={padding !== undefined ? { padding } : undefined}
      {...props}
    >
      {children}
    </section>
  );
}
