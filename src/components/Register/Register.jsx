import React from "react";
import Form from "../Form/Form";
import { handleRegister } from "../../API/requestsFirebase";

const Register = () => {
  return <Form title="Register" handleClick={handleRegister} />;
};

export default Register;
