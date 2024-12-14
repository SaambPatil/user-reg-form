import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfmPassword: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }
    if (formData.password !== formData.cnfmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted successfully:", formData);

    setFormData({ name: "", email: "", password: "", cnfmPassword: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Register Here</h1>
      <form onSubmit={onSubmitForm}>
        <label>Enter Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <label>Enter Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <label>Enter Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={formData.password}
        />
        <br />
        <label>Confirm Password: </label>
        <input
          type="password"
          name="cnfmPassword"
          placeholder="Confirm Password"
          value={formData.cnfmPassword}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
