import React from "react";
import Form from "./Form";
import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import { userService } from "../../Service";
import { useNavigate } from "react-router-dom";

const plugins = {
  dvr: dvr(validatorjs),
};

const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Insert Email",
    rules: "required|email|string|between:5,25",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Insert Password",
    rules: "required|string|between:5,25",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const hooks = {
    onSuccess(form) {
      const user = {
        email: form.values().email,
        password: form.values().password,
      };
      userService.login(user).then((response) => {
        if (response.status === 200) {
          console.log("data--", response.data);
          window.localStorage.setItem(
            "token",
            JSON.stringify(response.data.token)
          );
          navigate("/");
        } else {
          alert(response.data);
        }
      });
    },
  };
  const myForm = new MobxReactForm({ fields }, { plugins, hooks });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form myForm={myForm} />
    </div>
  );
};

export default Login;
