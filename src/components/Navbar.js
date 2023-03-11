import { useState } from "react";
import React, { PropsWithChildren } from "react";
import '../App.css';
import { Button, OutlineButton } from "./Button";
import { useNavigate } from "react-router-dom";
import { ConfirmModal, WarningModal } from "./Modals";

function Navbar ({children }) {
    let navigate = useNavigate();
    const userName = localStorage.getItem("userName");
    const userRole= localStorage.getItem("userRole");
    const [showModal, setShowModal] = useState(false);

    const menu = [
        { name: "Dashboard", url: "#" },
        { name: "Employee List", url: "#" },
        { name: "Attendance", url: "#" },
        { name: "Payroll", url: "#" },
        { name: "Activity Reports", url: "#" },
        { name: "Reimbursement", url: "#" },
    ];
    
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="flex">
            <div className="flex flex-col bg-black">
                <div className="flex items-center justify-center font-bold h-1/5 bg-black">
                    <h2 className="text-xl text-white font-MadeOuterSans">
                        PLABS.ID
                    </h2>
                </div>
                <div className="pl-3 h-3/5">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {menu.map((page, index) => {
                        return (
                            <li key={index} className="">
                                <a href={page.url} className="flex items-center p-2 space-x-3">
                                    <span className="text-white font-MadeOuterSans">{page.name}</span>
                                </a>
                            </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex flex-col h-1/5 bg-toscagreen pl-10 pr-10 pt-5">
                    <p className="text-sm text-left font-MadeOuterSans">Hello, {userName}</p>
                    <p className="text-sm text-left font-PlusJakartaSans">{userRole}</p>
                    <Button variant="button-primary" className={"w-32 mt-4"} type={"submit"}>Change Role</Button>
                    <OutlineButton variant="button-primary" className={"w-32 mt-4"} type={"submit"} onClick={() => setShowModal(true)}>Log Out</OutlineButton>
                    
                    {showModal?<WarningModal label='Confirmation' description='Are you sure you want to leave?' rightbutton='Leave' leftbutton='Cancel' onClickRight={handleLogout} onClickLeft={() => setShowModal(false)}/>:null}
                </div>
            </div>
            <div className="w-screen">
                {children}
            </div>
        </div>
    );
}

export default Navbar;