import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault(); 

    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const pass = e.target.elements.pass.value;
    const cnfmpass = e.target.elements.cnfmpass.value;

    if (pass !== cnfmpass) {
      console.log("Passwords don't match");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", pass);
  };

  return (
    <div>
      <h1>Register Here</h1>
      <form onSubmit={onSubmitForm}>
        <label>Enter Name: </label>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <label>Enter Email: </label>
        <input type="email" name="email" placeholder="Email" />
        <br />
        <label>Enter Password: </label>
        <input type="password" name="pass" placeholder="Password" />
        <br />
        <label>Confirm Password: </label>
        <input type="password" name="cnfmpass" placeholder="Confirm Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
