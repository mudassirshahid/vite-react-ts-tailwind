import { createContext, useContext, useState, ReactNode } from "react";

// Interface for FormProvider props
interface FormProviderProps {
    children: ReactNode;
}

// Interface for the form values context
interface FormContextProps {
    name: string;
    email: string;
    password: string;
    setFormData: (formData: Partial<FormContextProps>) => void; // Function to update the form data
}

// Create the context with a default value of `null`
const FormContext = createContext<FormContextProps | null>(null);

// Custom hook to consume the form context
export const useForm = () => {
    return useContext(FormContext);
};

// FormProvider component
export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    // Function to update form data
    const setFormData = (formData: Partial<FormContextProps>) => {
        setForm(prevForm => ({ ...prevForm, ...formData }));
    };

    return (
        <FormContext.Provider value={{ ...form, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};
