import "./App.css";
import { useEffect, useState } from "react";
import { FormLayout } from "./components/FormLayout";
import { ThemeProvider } from "./context/ThemeContext";
import PersonalInfo from "./components/StepOne";
import AddressInfo from "./components/StepTwo";
import Confirmation from "./components/StepThree";
import toast, { Toaster } from "react-hot-toast";
import { PersonalInfoFormData } from "./components/StepOne";
import { AddressInfoFormData } from "./components/StepTwo";

function App() {
  const [formData, setFormData] = useState<any>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handlePersonalInfoSubmit = (data: PersonalInfoFormData) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const handleAddressInfoSubmit = (data: AddressInfoFormData) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(3);
  };
  console.log(formData);

  const handleConfirmationSubmit = async () => {
    if (!Object.keys(formData).length) {
      toast.error("please fill the form");
      return;
    }
    setIsSubmitting(true);
    console.log("Form submitted:", formData);
    try {
      setTimeout(() => {
        console.log("sent data to backend");
        toast.success("Form Submitted Succesfully");
        setFormData({});
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      toast.error("something went wrong");
    }

    // Optionally clear localStorage
  };

  return (
    <ThemeProvider>
      <Toaster />
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
            isSubmitting={isSubmitting}
          />
        )}
      </FormLayout>
    </ThemeProvider>
  );
}

export default App;
