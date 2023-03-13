import { Button, OutlineButton, CheckInButton, WarningModal, ConfirmModal,FileInput, DropFileInput  } from '../components';
import React, {useState, useEffect} from "react";
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

function Dashboard() {
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
    var latitude;
    var longitude;
    const [locationURL, setLocationURL] = useState("");
    const [error,setError] = useState();
    const userName = localStorage.getItem("userName");
    const current = new Date();
    const date = `${current.getDate()} ${current.getMonth()+1} ${current.getFullYear()}`;
    const [data, setData]= useState({
        data: {
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets:[
                {
                    label: "Hours Worked",
                    data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                    backgroundColor: 'rgb(11, 131, 217)',
                    borderColor: 'rgb(11, 131, 217)',
                }
            ],
        },
    });

    let navigate = useNavigate();

    const checkIn = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
            postCheckIn();
        }
        else {
            alert("Geolocation is not supported")
        }
    }

    const getCoordinates = (position) => {
        // console.log(position);
        // setLatitude(position.coords.latitude)
        // setLongitude(position.coords.longitude)
        latitude = position.coords.latitude
        longitude = position.coords.longitude
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log(latitude);
        console.log(longitude);
        // if ((latitude == "") || (longitude = "")) {
        //     alert("Failed to retrieve location, please check in again")
        // }
        var url = "https://www.google.com/maps?q=" + latitude + "," + longitude
        setLocationURL(url)
        console.log(url);
    }

    const handleLocationError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
        }
    }

    const postCheckIn = async (e) => {
        e.preventDefault();
        // checkIn();
        const checkinData = {
            CheckinTime: "2023-03-09T09:56:19.3436328+07:00",
            Date: "2023-03-09T09:56:19.3436328+07:00",
            UserId: localStorage.getItem("userId"),
            Location: locationURL
        }
        console.log(checkinData);

        try {
            const response = await axios.post("/dashboard/check-in", checkinData);
            console.log(response.data);
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className='h-screen bg-background bg-cover'>
            <p className="text-gray-700 ml-12 mt-8 mb-5 font-MadeOuterSans text-header">Dashboard</p>
            <div className="grid gap-x-10 gap-y-5 grid-cols-3 content-center ml-5 mr-5 mb-8">
                <div className="container justify-self-end mx-auto px-4 py-4 bg-white rounded-[25px] border p-8 mb-5 drop-shadow-md">
                    <div className='flex items-center justify-left pl-3 pt-7'>
                        <p className="text-welcome text-black font-bold">
                            Welcome Back, {userName}!
                        </p>
                    </div>
                    <div className='flex items-center justify-left pl-3 pb-10'>
                        <p className="text-welcome text-black mb-5">
                            Today is, {date}
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className="text-welcome text-black mb-5 font-bold pb-3">
                            Start Working Today!
                        </p>
                    </div>
                    <div className='flex items-center justify-center pb-10'>
                        <CheckInButton variant="button-checkin" className={""} type={"submit"} onClick={checkIn}>Check In</CheckInButton> 
                    </div>
                    {/* <div><br></br><a href={locationURL}>Redirect to Google Map</a></div> */}
                    {/* {
                        (longitude != "") && (latitude != "") ?
                        null
                        :
                    }   
                    */}
                </div>
                <div className="container justify-self-center mx-auto bg-white rounded-[25px] shadow border p-8 col-span-2 mb-5 drop-shadow-md">
                    <div className='flex items-center justify-left pl-3 pt-3'>
                        <p className="text-welcome text-black mb-5 font-bold">
                            Announcement
                        </p>
                    </div>
                    {/* <div className='flex items-center justify-left pl-5 pt-7'>
                        <CheckInButton variant="button-checkin" className={""} type={"submit"} onClick={checkIn}>Check In</CheckInButton> 
                    </div> */}
                    {/* <div><br></br><a href={locationURL}>Redirect to Google Map</a></div> */}
                    {/* {
                        (longitude != "") && (latitude != "") ?
                        null
                        :
                    }   
                    */}
                </div>
                <div className="container mx-auto bg-white rounded-[25px] shadow border p-8 mb-5 h-2/5 drop-shadow-md">
                    <div className='flex items-center justify-left pt-0'>
                        <p className="text-welcome text-black font-bold">
                            Total Work Hours This Week
                        </p>
                    </div>
                    <div className='flex items-center justify-left pt-1'>
                        <p className="text-hours text-black mt-5">
                            396h 31m
                        </p>
                    </div>
                    {/* {
                        (longitude != "") && (latitude != "") ?
                        null
                        :
                    }   
                    */}
                </div>
                <div className="container mx-auto bg-white rounded-[25px] shadow border p-8 col-span-2 mb-5 drop-shadow-md">
                    <div className='flex items-center justify-left pl-9 pb-5'>
                        <p className="text-welcome text-black font-bold">
                            Total Work Hours This Week (Line Chart)
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Line data={data.data} options={data.options} className="" ></Line>                   
                    </div>
                    {/* {
                        (longitude != "") && (latitude != "") ?
                        null
                        :
                    }   
                    */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;