export const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f4f8",
    padding: "24px",
    fontFamily: "'DM Sans', sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "460px",
  },

  header: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  headerLabel: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#6366f1",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: "'DM Mono', monospace",
    marginBottom: "4px",
  },

  headerTitle: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#0f172a",
    lineHeight: "1.2",
    margin: 0,
  },

  headerIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #6366f1, #818cf8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },

  formCard: {
    background: "#fff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
    marginBottom: "16px",
    border: "1px solid #f1f5f9",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "12px",
  },

  fieldWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  fieldLabel: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#64748b",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontFamily: "'DM Mono', monospace",
  },

  input: {
    padding: "11px 14px",
    borderRadius: "10px",
    fontSize: "14px",
    fontFamily: "inherit",
    border: "1.5px solid #e2e8f0",
    background: "#f8fafc",
    outline: "none",
    color: "#1e293b",
    boxSizing: "border-box",
    width: "100%",
  },

  inputError: {
    border: "1.5px solid #fca5a5",
    background: "#fff5f5",
  },

  select: {
    padding: "11px 14px",
    borderRadius: "10px",
    fontSize: "14px",
    fontFamily: "inherit",
    border: "1.5px solid #e2e8f0",
    background: "#f8fafc",
    outline: "none",
    color: "#1e293b",
    width: "100%",
    cursor: "pointer",
  },

  errorText: {
    fontSize: "11px",
    color: "#ef4444",
  },

  button: {
    width: "100%",
    padding: "13px",
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    letterSpacing: "0.02em",
    fontFamily: "inherit",
    transition: "all 0.2s",
  },

  resultCard: {
    background: "#fff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
  },

  resultTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  scoreLabel: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#94a3b8",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontFamily: "'DM Mono', monospace",
    marginBottom: "6px",
  },

  scoreNumber: {
    fontSize: "52px",
    fontWeight: "700",
    lineHeight: "1",
    fontFamily: "'DM Mono', monospace",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "8px",
  },

  idealText: {
    fontSize: "11px",
    color: "#94a3b8",
    fontFamily: "'DM Mono', monospace",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "18px",
  },

  statBox: {
    background: "#f8fafc",
    borderRadius: "12px",
    padding: "12px",
    textAlign: "center",
    border: "1px solid #f1f5f9",
  },

  statValue: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#0f172a",
    fontFamily: "'DM Mono', monospace",
  },

  statLabel: {
    fontSize: "10px",
    color: "#94a3b8",
    fontWeight: "600",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginTop: "2px",
  },

  adviceBox: {
    borderRadius: "12px",
    padding: "14px 16px",
  },

  adviceTitle: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "6px",
  },

  adviceText: {
    fontSize: "13px",
    color: "#374151",
    lineHeight: "1.65",
    margin: 0,
  },

  disclaimer: {
    fontSize: "11px",
    color: "#cbd5e1",
    textAlign: "center",
    marginTop: "14px",
    lineHeight: "1.5",
  },
};

export const categoryMeta = {
  "Underweight":    { color: "#3b82f6", bg: "#eff6ff", icon: "↓" },
  "Normal weight":  { color: "#10b981", bg: "#ecfdf5", icon: "✓" },
  "Overweight":     { color: "#f59e0b", bg: "#fffbeb", icon: "!" },
  "Obese":          { color: "#ef4444", bg: "#fef2f2", icon: "⚠" },
};