import React, { useEffect, useState } from "react";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState({
    name: "asdf",
  });

  useEffect(() => {
    return () => {};
  }, [firstName, lastName]);

  return <div>Login</div>;
};

export default Login;
