import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      name: name
    }

    try {
      const response = await axios.post(`http://localhost:4055/user/authentication`, formData);
      localStorage.setItem("userId", response.data._id)
      window.location.replace("/details")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Login;
