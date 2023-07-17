import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [edit , setEdit ] = useState(false)
  useEffect(() => {
    setName(searchParams.get("name") || "");
    setEmail(searchParams.get("email") || "");
  }, [searchParams]);

  const handleNameChange = (e) => {
     setName(e.target.value);
     // setEdit(true)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const update = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      alert("All fields are mandatory");
      return;
    }
    updateContactHandler({ id, name, email });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2> Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;