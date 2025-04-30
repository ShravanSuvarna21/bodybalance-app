import { useState } from "react";
import { isEmail } from "validator";
import { useNavigate} from 'react-router-dom';
import axios from "./Axios";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [clientErrors, setClientErrors] = useState({});
  const [serverErrors, setServerErrors] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (name.trim().length === 0) {
      errors.name = "name is required";
    }
    if (email.trim().length === 0) {
      errors.email = "email is required";
    } else if (!isEmail(email)) {
      errors.email = "email is invalid";
    }

    if (password.trim().length === 0) {
      errors.password = "password is required";
    } else if (password.trim().length < 8 || password.trim().length > 128) {
      errors.password = "password should be between 8 to 128 characters";
    }
    if (contact.trim().length === 0) {
      errors.contact = "contact is required";
    }
    if (Object.keys(errors).length > 0) {
      setClientErrors(errors);
    } else {
      const formData = {
        name: name,
        email: email,
        password: password,
        contact: contact,
        role: "admin", // or "coach"
        isActive: true,
        isApproved: true
      };
      console.log("Submitting:", formData);
      try {
        const response = await axios.post("/user/register", formData);
        console.log(response.data)
        navigate('/login');
      } catch (err) {
        console.log(err.response.data)
        setServerErrors(err.response.data.error);
        setClientErrors({});
      }
    }
  };
  return (
    <div>
      <h2>Register here</h2>
      {serverErrors && (
        <div>
          <ul>
            {serverErrors.map((err, i) => {
              return <li key={i}>{err.msg}</li>;
            })}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter Name</label> <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
          {clientErrors.name && <p className="text-red-500 text-sm mt-1"> {clientErrors.name} </p>}
        </div>
        <div>
          <label htmlFor="email">Enter email</label> <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          {clientErrors.email && <p className="text-red-500 text-sm mt-1"> {clientErrors.email} </p>}
        </div>
        <div>
          <label htmlFor="password">Enter password</label> <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
          {clientErrors.password && <p className="text-red-500 text-sm mt-1"> {clientErrors.password} </p>}
        </div>
        <label htmlFor="contact">Enter contact</label> <br />
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            id="contact"
          />
          {clientErrors.contact && <p className="text-red-500 text-sm mt-1"> {clientErrors.contact} </p>}
        <div>
      <button>submit</button>
        </div>
      </form>
    </div>
  );
}
