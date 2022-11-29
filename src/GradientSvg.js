function GradientSVG() {
  return (
    <svg style={{ height: 0, width: 0, display: "block" }}>
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(360)">
          <stop offset="0%" stopColor="#f12711" />
          <stop offset="100%" stopColor="#f5af19" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientSVG;
