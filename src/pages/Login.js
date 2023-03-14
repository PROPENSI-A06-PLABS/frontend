import React, { useState, useEffect } from "react";
import "../App.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import plabsScreen from "../img/plabs-screen.svg";
import plabsLogo from "../img/plabs-logo.svg";
import { Button } from "../components/Button";
import { TextInput } from "../components/Input";
import { Label } from "flowbite-react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState();

    let navigate = useNavigate();

    // const getResponse = () => { //IMPLEMENT AXIOS
    //     axios.get('/login').then((response) => {
    //         console.log(response);
    //         setUser(response.data.user)
    //     }
    //     ).catch(error => console.error(error))
    // }

    const postLogin = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password,
        };
        console.log(userData);

        try {
            // const response = await axios.post('/login', userData, { withCredentials: true });
            const response = await axios.post("/login", userData);
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userName", response.data.user.Name);
            localStorage.setItem("userRole", response.data.user.Role);
            localStorage.setItem("userId", response.data.user.Id);
            // axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
            axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
            navigate('/');
        } catch (error) {
            setError("Invalid Username or Password!");
            console.error(error);
        }
    };

    return (
        <div className="flex justify-end">
            <div className="w-screen">
                <img
                    className="lg:w-36 lg:mt-8 lg:ml-10 md:w-36 md:mt-8 md:ml-10 mt-4 ml-5 w-24"
                    src={plabsLogo}
                ></img>
                <div className="md:justify-center flex items-center md:h-5/6 ">
                    <div className="grid grid-flow-row auto-rows-max">
                        <h1 className="font-MadeOuterSans text-3xl">
                            Good to see you again!
                        </h1>
                        <div className="mt-10">
                            <form onSubmit={postLogin}>
                                <TextInput
                                    label="Email "
                                    placeholder="Input email"
                                    required={true}
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                ></TextInput>
                                <TextInput
                                    label="Password"
                                    type={"password"}
                                    placeholder="Input password"
                                    required={true}
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                ></TextInput>
                                <div className="flex item-center justify-center">
                                    {error ? (
                                        <p className="text-sm font-PlusJakartaSans text-danger">
                                            {error}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex item-center justify-center">
                                    <Button
                                        variant="button-primary"
                                        className={"w-32 mt-4"}
                                        type={"submit"}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <img className="h-screen" src={plabsScreen}></img>
        </div>
    );
}

export default Login;
