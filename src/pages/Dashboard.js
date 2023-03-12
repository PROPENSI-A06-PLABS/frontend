import { Navbar } from "flowbite-react";
import React from "react";
import '../App.css';

// import { useNavigate } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
// import axios from 'axios';

// import hantop from '../img/hantop.png';
// import plabsScreen from '../img/plabs-screen.svg';
// import plabsLogo from '../img/plabs-logo.svg';
// import { Button } from "../components/Button";
// import { TextInput } from "../components/Input";
import { RoundedButton } from "../components/RoundedButton";
import { Navbar } from "../components/Navbar";

function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [user, setUser] = useState("");

    // let navigate = useNavigate();

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
            password: password
        }
        console.log(userData);

        try {
            // const response = await axios.post('/login', userData, { withCredentials: true });
            const response = await axios.post('/login', userData);
            console.log(response.data);
            localStorage.setItem("token", response.data.token)
            navigate('/design')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="grid grid-cols-2">
            <div>
                {/* <img className="lg:w-36 lg:mt-8 lg:ml-10 md:w-36 md:mt-8 md:ml-10 mt-4 ml-5 w-24" src={plabsLogo}></img> */}
                <Navbar></Navbar>
            </div>
            <div>
                <RoundedButton></RoundedButton>
            </div>
        </div>
    );   
}

export default Login;