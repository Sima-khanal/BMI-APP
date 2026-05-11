import { styles } from "../styles/bmiStyles";

function Field({ label, error, children }) {
  return (
    <div style={styles.fieldWrapper}>
      <label style={styles.fieldLabel}>{label}</label>
      {children}
      {error && <span style={styles.errorText}>{error}</span>}
    </div>
  );
}

export default function BMIForm({
  weight, setWeight,
  height, setHeight,
  age,    setAge,
  gender, setGender,
  errors,
  onCalculate,
}) {
  const inputStyle = (hasError) => ({
    ...styles.input,
    ...(hasError ? styles.inputError : {}),
  });

  const handleFocus = (e) => {
    e.target.style.borderColor = "#6366f1";
    e.target.style.boxShadow  = "0 0 0 3px #6366f120";
  };

  const handleBlur = (e, hasError) => {
    e.target.style.borderColor = hasError ? "#fca5a5" : "#e2e8f0";
    e.target.style.boxShadow   = "none";
  };

  return (
    <div>
      <div style={styles.formGrid}>
        <Field label="Weight (kg)" error={errors.weight}>
          <input
            style={inputStyle(errors.weight)}
            type="number"
            placeholder="e.g. 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onFocus={handleFocus}
            onBlur={(e) => handleBlur(e, errors.weight)}
          />
        </Field>

        <Field label="Height (cm)" error={errors.height}>
          <input
            style={inputStyle(errors.height)}
            type="number"
            placeholder="e.g. 175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onFocus={handleFocus}
            onBlur={(e) => handleBlur(e, errors.height)}
          />
        </Field>

        <Field label="Age" error={errors.age}>
          <input
            style={inputStyle(errors.age)}
            type="number"
            placeholder="e.g. 25"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onFocus={handleFocus}
            onBlur={(e) => handleBlur(e, errors.age)}
          />
        </Field>

        <Field label="Gender">
          <select
            style={styles.select}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">♂ Male</option>
            <option value="female">♀ Female</option>
          </select>
        </Field>
      </div>

      <button
        style={styles.button}
        onClick={onCalculate}
        onMouseEnter={(e) => {
          e.target.style.transform  = "translateY(-1px)";
          e.target.style.boxShadow  = "0 8px 24px #6366f155";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform  = "translateY(0)";
          e.target.style.boxShadow  = "none";
        }}
      >
        Analyze BMI →
      </button>
    </div>
  );
}
