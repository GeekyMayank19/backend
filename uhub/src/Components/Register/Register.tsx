import React, { FormEvent } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IUser, IUserFormValue } from "../../Interface";
import { userService } from "../../Service";
import "./Register.css";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserFormValue>();

  const onSubmit: SubmitHandler<IUserFormValue> = (data) => {
    const user: IUserFormValue = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };
    // userService.addUser(user);
  };
  return (
    <div className="mainContainer">
      <h1>Register</h1>
      <div className="subContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">First Name</label>
            <input defaultValue="" {...register("firstname")} />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input defaultValue="" {...register("lastname")} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input defaultValue="" {...register("email")} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input defaultValue="" {...register("password")} />
          </div>
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
};

const styles = {};

export default Register;
