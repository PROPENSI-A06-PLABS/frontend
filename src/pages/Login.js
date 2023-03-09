import React, {useState, useEffect} from "react";
import '../App.css';

import { useNavigate } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

import hantop from '../img/hantop.png';
import plabsScreen from '../img/plabs-screen.svg';
import plabsLogo from '../img/plabs-logo.svg';
import { Button } from "../components/Button";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");

    let navigate = useNavigate();

    // const getResponse = () => { //IMPLEMENT AXIOS
    //     axios.get('/login').then((response) => {
    //         console.log(response);
    //         setUser(response.data.user)
    //     }
    //     ).catch(error => console.error(error))
    // }

    const postLogin = async (e) => { //IMPLEMENT AXIOS
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        }
        console.log(userData);

        try {
            const response = await axios.post('/login', userData, { withCredentials: true });
            console.log(response.data);
            navigate('/design')
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     getResponse()
    //   })

    return (
        
        <div className="grid grid-cols-2 gap-8">
            <div>
                <img className="lg:w-36 lg:mt-8 lg:ml-10 md:w-36 md:mt-8 md:ml-10 mt-4 ml-5 w-24" src={plabsLogo}></img>
                <div className="md:justify-center md:flex md:items-center md:h-5/6 md:ml-0 sm:3/6">
                    <div className="grid grid-flow-row auto-rows-max">
                        <div className="">
                            <h1 className="text-2xl font-MadeOuterSans">Good to see you again!</h1>
                        </div>
                        <div className="flex justify-center mt-10">
                            <form onSubmit={postLogin}>
                                <input placeholder="Input email" required value={email} onChange={(event) => setEmail(event.target.value)} type="text"></input>
                                <br></br>
                                <input placeholder="Input password" required value={password} onChange={(event) => setPassword(event.target.value)} type="text"></input>
                                <br></br>
                                <div className="flex item-center justify-center">
                                    <Button variant="button-primary" className={"w-32"} type={"submit"}>Login</Button>
                                </div>
                            </form>
                        </div>
                    </div>   
                </div>
            </div>
            {/* <div className=""> */}
                <img className="h-screen w-screen lg:visible invisible" src={plabsScreen}></img>
            {/* </div> */}
        </div>
    );   
}

export default Login;