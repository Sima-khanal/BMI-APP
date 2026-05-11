export function calculateBMI(weight, height) {
  const h = height / 100;
  return weight / (h * h);
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25)   return "Normal weight";
  if (bmi < 30)   return "Overweight";
  return "Obese";
}

export function getBMISuggestion(category) {
  const map = {
    "Underweight":
      "Your BMI suggests you may be underweight. Consider consulting a nutritionist to build a balanced meal plan that supports healthy weight gain through nutrient-dense foods.",
    "Normal weight":
      "Excellent! Your BMI falls within the healthy range. Maintain this through regular physical activity, a balanced diet, and consistent health check-ups.",
    "Overweight":
      "Your BMI indicates you're slightly above the healthy range. Gradual lifestyle changes — including more movement and mindful eating — can help you reach a healthier weight.",
    "Obese":
      "Your BMI indicates obesity, which may carry health risks. We strongly recommend consulting a healthcare professional for a personalized weight management plan.",
  };
  return map[category];
}

export function getIdealWeightRange(height) {
  const h = height / 100;
  return {
    min: (18.5 * h * h).toFixed(1),
    max: (24.9 * h * h).toFixed(1),
  };
}

export function getRiskLevel(category) {
  const map = {
    "Underweight":   "Moderate",
    "Normal weight": "Low",
    "Overweight":    "Moderate",
    "Obese":         "High",
  };
  return map[category];
}

export function validateInputs({ weight, height, age }) {
  const errors = {};
  if (!weight || weight <= 0 || weight > 300)
    errors.weight = "Enter valid weight (1–300 kg)";
  if (!height || height <= 0 || height > 250)
    errors.height = "Enter valid height (1–250 cm)";
  if (age && (age < 1 || age > 120))
    errors.age = "Enter valid age (1–120)";
  return errors;
}