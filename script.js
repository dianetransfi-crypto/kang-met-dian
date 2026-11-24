
function calculateBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if (weight <= 0 || height <= 0 || !Number.isFinite(weight) || !Number.isFinite(height)) {
        alert("Please enter a valid weight and height.");
        return;
    }

    let heightMeter = height / 100;
    let bmi = weight / (heightMeter * heightMeter);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal Weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("bmi").textContent = "Your BMI: " + bmi.toFixed(2);
    document.getElementById("category").textContent = "Category: " + category;
}
