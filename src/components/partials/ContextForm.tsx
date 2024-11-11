import React from "react";
import { useForm } from "../../provider/FormData";

const MyForm = () => {
  const formContext = useForm();

  // Single handler for all fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formContext?.setFormData({ [name]: value }); // Dynamically set field based on input's name
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    // Access the current form values from the context
    console.log("Form Submitted: ", formContext);
    // Further submission logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Input */}
      <input
        type="text"
        name="name" // Assign name for dynamic handling
        value={formContext?.name || ""}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <p>Name: {formContext?.name}</p>

      {/* Email Input */}
      <input
        type="email"
        name="email" // Assign name for dynamic handling
        value={formContext?.email || ""}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      <p>Email: {formContext?.email}</p>

      {/* Password Input */}
      <input
        type="password"
        name="password" // Assign name for dynamic handling
        value={formContext?.password || ""}
        onChange={handleInputChange}
        placeholder="Enter your password"
      />
      <p>Password: {formContext?.password}</p>

      {/* Submit Button */}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
