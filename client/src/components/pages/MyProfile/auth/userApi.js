


import axios from "axios";
import { setUser } from "./userAction";
import { setToken } from "./tokenAction";
import { NavLink, useNavigate } from "react-router-dom"


export const userRegister = async (signData, setResult) => {

    try {
        const { state, data } = await axios({
            method: 'post',
            url: "http://localhost:8000/user-api/signup",
            data: { user_data: signData }
        });

        if (data.status == true) {
            setToken(data.token);
            setUser(data.user);
            return true;
        }
        else {
            setResult({ type: true, msg: data.msg });
            return false;
        }
    }
    catch (err) {
        
        setResult({ type: true, msg: "Server Error..." });
    }
    return false;

}

export const userUpdate = async (user_data, setResult) => {

    try {

        const { state, data } = await axios({
            method: 'put',
            url: "http://localhost:8000/user-api/update",
            data: { user_data }
        });
        setResult({ type: true, msg: data.msg });
        return true;
    }
    catch (err) {
        setResult({ type: true, msg: "Error" });
    }
    return false;

}

export const deleteAccount = async (prod_id) => {

    try {
        const { state, data } = await axios({
            method: 'delete',
            url: `http://localhost:8000/user-api/delete/${prod_id}`,

        });

        return true;
    }
    catch (err) {
        return false;
    }


}
export const userLogin = async (loginData, setResult) => {

    try {
        const { status, data } = await axios({
            method: 'post',
            url: "http://localhost:8000/user-api/login",
            data: { user_data: loginData }
        });

        if (data.status == true) {
            setToken(data.token);
            setUser(data.user);
            return true;
        }
        else {
            setResult({ type: true, msg: data.msg });
            return false;
        }

    }
    catch (err) {
     
        setResult({ type: true, msg: "Server Error..." });
    }
    return false;


}