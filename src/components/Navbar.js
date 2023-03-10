import { useState } from "react";
import React, { PropsWithChildren } from "react";
import '../App.css';
import { Button, OutlineButton } from "./Button";
import { useNavigate } from "react-router-dom";

function Navbar ({children }) {
    let navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="flex">
            <div className="flex w-2/12 p-3 bg-black">
                <div className="">
                    <div className="flex items-center align-middle">
                        <h2 className="text-xl text-white font-MadeOuterSans">
                            PLABS.ID
                        </h2>
                    </div>
                    <div className="flex ml-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="">
                                <a href="/login" className="flex items-center p-2 space-x-3">
                                    <span className="text-white font-MadeOuterSans">Dashboard</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/login" className="flex items-center p-2 space-x-3">
                                    <span className="text-white font-MadeOuterSans">Employee</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/login" className="flex items-center p-2 space-x-3">
                                    <span className="text-white font-MadeOuterSans">Attendance</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/login" className="flex items-center p-2 space-x-3">
                                    <span className="text-white font-MadeOuterSans">Payroll</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/login" className="flex items-center p-2 space-x-3">
                                    <span className="text-white font-MadeOuterSans">Activity Reports</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/login" className="flex items-center p-2 space-x-3">
                                    <span className="text-white font-MadeOuterSans">Reimbursement</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div class="relative h-32 w-32">
                        <div class="absolute inset-x-0 bottom-0 h-full">
                        <Button variant="button-primary" className={"w-32 mt-4"} type={"submit"}>Change Role</Button>
                        <OutlineButton variant="button-primary" className={"w-32 mt-4"} type={"submit"}>Log Out</OutlineButton>
                        </div>
                    </div> */}
                    <div className="bg-toscagreen p-10 w-full">
                        <Button variant="button-primary" className={"w-32 mt-4"} type={"submit"}>Change Role</Button>
                        <OutlineButton variant="button-primary" className={"w-32 mt-4"} type={"submit"} onClick={handleLogout}>Log Out</OutlineButton>
                    </div>
                </div>
            </div>
            <div className="w-screen">
                {children}
            </div>
        </div>
    );
}

export default Navbar;