import { useState } from "react";
import BMIForm   from "./BMIForm";
import BMIResult from "./BMIResult";
import { calculateBMI, getBMICategory, getBMISuggestion, validateInputs } from "../utils/bmiUtils";
import { styles } from "../styles/bmiStyles";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age,    setAge]    = useState("");
  const [gender, setGender] = useState("male");

  const [bmi,      setBmi]      = useState(null);
  const [category, setCategory] = useState("");
  const [advice,   setAdvice]   = useState("");
  const [errors,   setErrors]   = useState({});
  const [resultKey, setResultKey] = useState(0); // forces re-mount → re-animates

  const handleCalculate = () => {
    const validationErrors = validateInputs({ weight, height, age });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const result = calculateBMI(parseFloat(weight), parseFloat(height));
    const cat    = getBMICategory(result);
    const sug    = getBMISuggestion(cat);

    setBmi(result.toFixed(1));
    setCategory(cat);
    setAdvice(sug);
    setResultKey((k) => k + 1); // re-trigger animation on each calculate
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={styles.page}>
        <div style={styles.card}>

          {/* Header */}
          <div style={styles.header}>
            <div>
              <div style={styles.headerLabel}>Health Analytics</div>
              <h1 style={styles.headerTitle}>BMI Calculator</h1>
            </div>
            <div style={styles.headerIcon}>⚕</div>
          </div>

          {/* Form */}
          <div style={styles.formCard}>
            <BMIForm
              weight={weight} setWeight={setWeight}
              height={height} setHeight={setHeight}
              age={age}       setAge={setAge}
              gender={gender} setGender={setGender}
              errors={errors}
              onCalculate={handleCalculate}
            />
          </div>

          {/* Result */}
          <BMIResult
            key={resultKey}
            bmi={bmi}
            category={category}
            advice={advice}
            height={height}
          />

        </div>
      </div>
    </>
  );
}
