import "./App.css";
import { useEffect, useState } from "react";
import { FormLayout } from "./components/FormLayout";
import { ThemeProvider } from "./context/ThemeContext";
import PersonalInfo from "./components/StepOne";
import AddressInfo from "./components/StepTwo";
import Confirmation from "./components/StepThree";

function App() {
  const [formData, setFormData] = useState<any>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });
  const [currentStep, setCurrentStep] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handlePersonalInfoSubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const handleAddressInfoSubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(3);
  };

  const handleConfirmationSubmit = () => {
    console.log("Form submitted:", formData);
    // Optionally clear localStorage
    localStorage.removeItem("formData");
  };

  return (
    <ThemeProvider>
      <FormLayout>
        {currentStep === 1 && (
          <PersonalInfo
            onSubmit={handlePersonalInfoSubmit}
            onNext={() => setCurrentStep(2)}
            defaultValues={formData}
          />
        )}

        {currentStep === 2 && (
          <AddressInfo
            onSubmit={handleAddressInfoSubmit}
            onNext={() => setCurrentStep(3)}
            onPrev={() => setCurrentStep(1)}
            defaultValues={formData}
          />
        )}
        {currentStep === 3 && (
          <Confirmation
            data={formData}
            onPrev={() => setCurrentStep(2)}
            onSubmit={handleConfirmationSubmit}
          />
        )}
      </FormLayout>
    </ThemeProvider>
  );
}

export default App;
