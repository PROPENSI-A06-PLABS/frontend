import {
    Button,
    OutlineButton,
    CheckInButton,
    WarningModal,
    ConfirmModal,
    FileInput,
    DropFileInput,
} from "../components";
import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
    var latitude;
    var longitude;
    const [locationURL, setLocationURL] = useState("");
    const [error, setError] = useState();
    const userName = localStorage.getItem("userName");
    const current = new Date();
    const date = `${current.getDate()} ${
        current.getMonth() + 1
    } ${current.getFullYear()}`;

    let navigate = useNavigate();

    const checkIn = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                getCoordinates,
                handleLocationError
            );
            postCheckIn();
        } else {
            alert("Geolocation is not supported");
        }
    };

    const getCoordinates = (position) => {
        // console.log(position);
        // setLatitude(position.coords.latitude)
        // setLongitude(position.coords.longitude)
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log(latitude);
        console.log(longitude);
        // if ((latitude == "") || (longitude = "")) {
        //     alert("Failed to retrieve location, please check in again")
        // }
        var url = "https://www.google.com/maps?q=" + latitude + "," + longitude;
        setLocationURL(url);
        console.log(url);
    };

    const handleLocationError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    };

    const postCheckIn = async (e) => {
        e.preventDefault();
        // checkIn();
        const checkinData = {
            CheckinTime: "2023-03-09T09:56:19.3436328+07:00",
            Date: "2023-03-09T09:56:19.3436328+07:00",
            UserId: localStorage.getItem("userId"),
            Location: locationURL,
        };
        console.log(checkinData);

        try {
            const response = await axios.post(
                "/dashboard/check-in",
                checkinData
            );
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-screen bg-primarywhite">
            <p className="text-3xl text-gray-700 font-bold mb-5">Dashboard</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="container content-around mx-auto bg-white rounded-[25px] shadow border p-8 m-10">
                    <p className="text-welcome text-black font-bold">
                        Welcome Back, {userName}!
                    </p>
                    <p className="text-welcome text-black mb-5">
                        Today is, {date}
                    </p>
                    <p className="text-welcome text-black mb-5 font-bold">
                        Start Working Today!
                    </p>
                    <CheckInButton
                        variant="button-checkin"
                        className={""}
                        type={"submit"}
                        onClick={checkIn}
                    >
                        Check In
                    </CheckInButton>
                    <div>
                        <br></br>
                        <a href={locationURL}>Redirect to Google Map</a>
                    </div>
                    {/* {
                        (longitude != "") && (latitude != "") ?
                        null
                        :
                    }   
                    */}
                </div>
                <div className="container mx-auto bg-white rounded-[25px] shadow border p-8 m-10 col-span-2">
                    <p className="text-welcome text-black font-bold">
                        Welcome Back, {userName}!
                    </p>
                    <p className="text-welcome text-black mb-5">
                        Today is, Monday, 27 February 2023
                    </p>
                    <p className="text-welcome text-black mb-5 font-bold">
                        Start Working Today!
                    </p>
                    <CheckInButton
                        variant="button-checkin"
                        className={""}
                        type={"submit"}
                        onClick={checkIn}
                    >
                        Check In
                    </CheckInButton>
                    <div>
                        <br></br>
                        <a href={locationURL}>Redirect to Google Map</a>
                    </div>
                    {/* {
                        (longitude != "") && (latitude != "") ?
                        null
                        :
                    }   
                    */}
                </div>
                <div className="container mx-auto bg-white rounded-[25px] shadow border p-8 m-10">
                    <p className="text-welcome text-black font-bold">
                        Welcome Back, {userName}!
                    </p>
                    <p className="text-welcome text-black mb-5">
                        Today is, Monday, 27 February 2023
                    </p>
                    <p className="text-welcome text-black mb-5 font-bold">
                        Start Working Today!
                    </p>
                    <CheckInButton
                        variant="button-checkin"
                        className={""}
                        type={"submit"}
                        onClick={checkIn}
                    >
                        Check In
                    </CheckInButton>
                    <div>
                        <br></br>
                        <a href={locationURL}>Redirect to Google Map</a>
                    </div>
                    {/* {
                        (longitude != "") && (latitude != "") ?
                        null
                        :
                    }   
                    */}
                </div>
                <div className="container mx-auto bg-white rounded-[25px] shadow border p-8 m-10 col-span-2">
                    <p className="text-welcome text-black font-bold">
                        Welcome Back, {userName}!
                    </p>
                    <p className="text-welcome text-black mb-5">
                        Today is, Monday, 27 February 2023
                    </p>
                    <p className="text-welcome text-black mb-5 font-bold">
                        Start Working Today!
                    </p>
                    <CheckInButton
                        variant="button-checkin"
                        className={""}
                        type={"submit"}
                        onClick={checkIn}
                    >
                        Check In
                    </CheckInButton>
                    <div>
                        <br></br>
                        <a href={locationURL}>Redirect to Google Map</a>
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
