import axios from "axios";
import { API } from "../Config/config";
import { IUserFormLoginValue, IUserFormValue } from "../Interface";
import { BaseService } from "./Base.service";

class UserService extends BaseService {
  public addUser = async (user: IUserFormValue) => {
    return axios
      .post(`${API}/register`, user, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
  public login = async (user: IUserFormLoginValue) => {
    return axios
      .post(`${API}/login`, user, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("response--",response);
        return response;
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
  };
}

export default new UserService();
