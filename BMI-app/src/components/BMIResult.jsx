import { useState, useEffect, useRef } from "react";
import { styles, categoryMeta } from "../styles/bmiStyles";
import { getIdealWeightRange, getRiskLevel } from "../utils/bmiUtils";

// ── Animated number count-up ────────────────────────────
function AnimatedNumber({ value, duration = 800 }) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const target = parseFloat(value);
    startRef.current = null;

    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      setDisplay((ease * target).toFixed(1));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value, duration]);

  return display;
}

// ── Color-band BMI gauge ────────────────────────────────
function BMIGauge({ bmi, color }) {
  const clamped = Math.min(Math.max(parseFloat(bmi), 10), 40);
  const pct     = ((clamped - 10) / 30) * 100;

  const bands = [
    { color: "#3b82f6" }, // Underweight
    { color: "#10b981" }, // Normal
    { color: "#f59e0b" }, // Overweight
    { color: "#ef4444" }, // Obese
  ];

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ position: "relative", height: "12px", borderRadius: "999px", overflow: "hidden", display: "flex", marginBottom: "6px" }}>
        {bands.map((b, i) => (
          <div key={i} style={{ width: "25%", background: b.color, opacity: 0.25 }} />
        ))}
        <div style={{
          position:     "absolute",
          top:          "50%",
          left:         `${pct}%`,
          transform:    "translate(-50%, -50%)",
          width:        "20px",
          height:       "20px",
          borderRadius: "50%",
          background:   color,
          border:       "3px solid white",
          boxShadow:    `0 0 0 3px ${color}44`,
          transition:   "left 0.8s cubic-bezier(.34,1.56,.64,1)",
        }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#94a3b8", fontFamily: "'DM Mono', monospace" }}>
        <span>10</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
      </div>
    </div>
  );
}

// ── Main Result Component ───────────────────────────────
export default function BMIResult({ bmi, category, advice, height }) {
  if (!bmi) return null;

  const meta  = categoryMeta[category];
  const ideal = height ? getIdealWeightRange(parseFloat(height)) : null;
  const risk  = getRiskLevel(category);

  const stats = [
    { label: "BMI",    value: bmi },
    { label: "Status", value: category.split(" ")[0] },
    { label: "Risk",   value: risk },
  ];

  return (
    <div
      style={{ ...styles.resultCard, border: `1px solid ${meta.color}22`, animation: "slideIn 0.5s cubic-bezier(.34,1.2,.64,1) forwards" }}
    >
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Score row */}
      <div style={styles.resultTop}>
        <div>
          <div style={styles.scoreLabel}>Your BMI Score</div>
          <div style={{ ...styles.scoreNumber, color: meta.color }}>
            <AnimatedNumber value={bmi} />
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ ...styles.badge, background: meta.bg, color: meta.color }}>
            <span>{meta.icon}</span> {category}
          </div>
          {ideal && (
            <div style={styles.idealText}>
              Ideal: {ideal.min}–{ideal.max} kg
            </div>
          )}
        </div>
      </div>

      {/* Gauge */}
      <BMIGauge bmi={bmi} color={meta.color} />

      {/* Stats */}
      <div style={styles.statsGrid}>
        {stats.map((s) => (
          <div key={s.label} style={styles.statBox}>
            <div style={styles.statValue}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Advice */}
      <div style={{ ...styles.adviceBox, background: meta.bg, borderLeft: `3px solid ${meta.color}` }}>
        <div style={{ ...styles.adviceTitle, color: meta.color }}>Health Advice</div>
        <p style={styles.adviceText}>{advice}</p>
      </div>

      <p style={styles.disclaimer}>
        BMI is a screening tool, not a diagnostic measure. Consult a healthcare professional for personalized guidance.
      </p>
    </div>
  );
}
