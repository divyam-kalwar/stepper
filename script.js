const steps = document.querySelectorAll(".step");
const description = document.querySelector(".description");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const stepsContainer = document.querySelector(".steps");

const stepData = [
    "Add contact details for further communications.",
    "Add shipping address for successful delivery.",
    "Complete payment for the order.",
    "Order delivered successfully!"
];

let currentStep = 0;

function renderStepper() {
    steps.forEach((step, index) => {
        step.classList.remove("active", "completed");

        if (index < currentStep) {
            step.classList.add("completed");
        } else if (index === currentStep) {
            step.classList.add("active");
        }
    });

    description.textContent = stepData[currentStep];

    previousButton.disabled = currentStep === 0;
    nextButton.textContent =
        currentStep === steps.length - 1 ? "Finish" : "Next";

    stepsContainer.style.setProperty(
        "--progress",
        currentStep / (steps.length - 1)
    );
}

nextButton.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        renderStepper();
        return;
    }

    steps[currentStep].classList.remove("active");
    steps[currentStep].classList.add("completed");
    description.textContent = "Order Delivered successfully! 🎉";
    nextButton.disabled = true;
});

previousButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        nextButton.disabled = false;
        renderStepper();
    }
});

renderStepper();