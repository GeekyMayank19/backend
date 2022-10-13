import React from "react";
import Form from "./Form";
import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import { userService } from "../../Service";
import { useNavigate,useLocation } from "react-router-dom";


const plugins = {
  dvr: dvr(validatorjs),
};

const fields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "First Name",
    rules: "required|string",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
    rules: "required|string",
  },
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


const SignUp = () => {
  const location = useLocation();

  const navigate = useNavigate();
  console.log('pathname', location.pathname);
  const hooks = {
    onSuccess(form) {
      const user = {
        firstname: form.values().firstName,
        lastname: form.values().lastName,
        email: form.values().email,
        password: form.values().password,
      };
      userService.addUser(user).then((response) => {
        if (response.status === 201) {
          console.log("data--", response.data.token);
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

export default SignUp;
