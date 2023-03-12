import { Button, OutlineButton,WarningModal, ConfirmModal,FileInput, DropFileInput  } from '../components';
import React, {useState, useEffect} from "react";
import '../App.css';


function Dashboard() {
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
    var latitude;
    var longitude;
    const [locationURL, setLocationURL] = useState("");
    const [error,setError] = useState();

    const checkIn = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
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
    
    return (
        <div className='h-screen bg-primarywhite'>
            <div className="container mx-auto bg-white rounded-[25px] shadow border p-8 m-10">
                <p className="text-3xl text-gray-700 font-bold mb-5">
                    Welcome!
                </p>
                <Button variant="button-primary" className={"w-32 mt-4"} type={"submit"} onClick={checkIn}>Check In</Button> 
                <div><br></br><a href={locationURL}>Redirect to Google Map</a></div>
                {/* {
                    (longitude != "") && (latitude != "") ?
                    null
                    :
                }   
                 */}
            </div>
        </div>
    );
}

export default Dashboard;