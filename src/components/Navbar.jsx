import { useState } from "react";
import React, { PropsWithChildren } from "react";
import "../App.css";
import { Button, OutlineButton } from "./Button";
import { useNavigate } from "react-router-dom";
import { WarningModal } from "./Modals";
import { BsChevronRight } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import logo from "../../src/logo-plabs-full.png";

function Navbar({ children }) {
    let navigate = useNavigate();
    const userName = localStorage.getItem("userName");
    const userRole = localStorage.getItem("userRole");
    const [showModal, setShowModal] = useState(false);
    const [navbarEmployee, setNavbarEmployee] = useState(false);
    const [navbarAttendance, setNavbarAttendance] = useState(false);
    const [navbarPayroll, setNavbarPayroll] = useState(false);

    // admin
    const menu = [
        { name: "Dashboard", url: "#" },
        { name: "Employee", url: "#" },
        { name: "Attendance", url: "#" },
        { name: "Payroll", url: "#" },
        { name: "Activity Reports", url: "#" },
        { name: "Reimbursement", url: "#" },
    ];

    const handleNavEmployee = () => {
        setNavbarEmployee(!navbarEmployee);
    };

    const handleNavAttendance = () => {
        setNavbarAttendance(!navbarAttendance);
    };

    const handleNavPayroll = () => {
        setNavbarPayroll(!navbarPayroll);
    };

    const handleLogout = () => {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.clear();
        navigate("/login");
    };

    return (
        // BARU BUAT ADMIN
        <div className="flex">
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-black">
                <div className="flex items-center justify-center font-bold h-1/5 bg-black">
                    {/* <h2 className="text-xl text-white font-MadeOuterSans">
                        PLABS.ID
                    </h2> */}
                    <img
                        src={logo}
                        alt=""
                        className="px-8"
                    />
                </div>
                <div className=" px-6 h-3/5 ">
                    <ul className=" space-y-6 text-base">
                        {/* 1 */}
                        <li className="">
                            <a href="#" className="flex items-center space-x-3">
                                <span className="text-white font-MadeOuterSans">
                                    {menu[0].name}
                                </span>
                            </a>
                        </li>
                        {/* 2 */}
                        <li className="">
                            <a
                                href="#"
                                className="flex items-center space-x-3 justify-between"
                            >
                                <span className="text-white font-MadeOuterSans">
                                    {menu[1].name}
                                </span>
                                <span>
                                    <BsChevronRight
                                        size={20}
                                        color="white"
                                        className={
                                            navbarEmployee
                                                ? "transition-transform duration-500 rotate-90"
                                                : "transition-transform duration-500 rotate-0"
                                        }
                                        onClick={handleNavEmployee}
                                    />
                                </span>
                            </a>
                            <div
                                className={
                                    navbarEmployee
                                        ? "overflow-hidden transition-all duration-700 max-h-40 space-y-4 mt-4"
                                        : "overflow-hidden transition-all duration-700 max-h-0 space-y-4"
                                }
                            >
                                <li className="px-5">
                                    <a href="#">
                                        <span className="text-white font-MadeOuterSans">
                                            Employee List
                                        </span>
                                    </a>
                                </li>
                                <li className="px-5">
                                    <a href="#">
                                        <span className="text-white font-MadeOuterSans">
                                            Add Employee
                                        </span>
                                    </a>
                                </li>
                            </div>
                        </li>
                        {/* 3 */}
                        <li className="">
                            <a
                                href="#"
                                className="flex items-center space-x-3 justify-between"
                            >
                                <span className="text-white font-MadeOuterSans">
                                    {menu[2].name}
                                </span>
                                <span>
                                    <BsChevronRight
                                        size={20}
                                        color="white"
                                        className={
                                            navbarAttendance
                                                ? "transition-transform duration-500 rotate-90"
                                                : "transition-transform duration-500 rotate-0"
                                        }
                                        onClick={handleNavAttendance}
                                    />
                                </span>
                            </a>
                            <div
                                className={
                                    navbarAttendance
                                        ? "overflow-hidden transition-all duration-700 max-h-40 space-y-4 mt-4"
                                        : "overflow-hidden transition-all duration-700 max-h-0 space-y-4"
                                }
                            >
                                <li className="px-5">
                                    <a href="#">
                                        <span className="text-white font-MadeOuterSans">
                                            Manage Attendance
                                        </span>
                                    </a>
                                </li>
                                <li className="px-5">
                                    <a href="#">
                                        <span className="text-white font-MadeOuterSans">
                                            Manage Leave
                                        </span>
                                    </a>
                                </li>
                            </div>
                        </li>
                        {/* 4 */}
                        <li className="">
                            <a
                                href="#"
                                className="flex items-center space-x-3 justify-between"
                            >
                                <span className="text-white font-MadeOuterSans">
                                    {menu[3].name}
                                </span>
                                <span>
                                    <BsChevronRight
                                        size={20}
                                        color="white"
                                        className={
                                            navbarPayroll
                                                ? "transition-transform duration-500 rotate-90"
                                                : "transition-transform duration-500 rotate-0"
                                        }
                                        onClick={handleNavPayroll}
                                    />
                                </span>
                            </a>
                            <div
                                className={
                                    navbarPayroll
                                        ? "overflow-hidden transition-all duration-700 max-h-40 space-y-4 mt-4"
                                        : "overflow-hidden transition-all duration-700 max-h-0 space-y-4"
                                }
                            >
                                <li className="px-5">
                                    <a href="#">
                                        <span className="text-white font-MadeOuterSans">
                                            Manage Payroll
                                        </span>
                                    </a>
                                </li>
                                <li className="px-5">
                                    <a href="#">
                                        <span className="text-white font-MadeOuterSans">
                                            Add Payroll
                                        </span>
                                    </a>
                                </li>
                            </div>
                        </li>
                        {/* 5 */}
                        <li className="">
                            <a href="#" className="flex items-center space-x-3">
                                <span className="text-white font-MadeOuterSans">
                                    {menu[4].name}
                                </span>
                            </a>
                        </li>
                        {/* 6 */}
                        <li className="">
                            <a href="#" className="flex items-center space-x-3">
                                <span className="text-white font-MadeOuterSans">
                                    {menu[5].name}
                                </span>
                            </a>
                        </li>
                    </ul>

                    {/* <ul className="pt-2 pb-4 space-y-4 text-base">
                        {menu.map((page, index) => {
                            return (
                                <li key={index} className="">
                                    <a
                                        href={page.url}
                                        className="flex items-center p-2 space-x-3"
                                    >
                                        <span className="text-white font-MadeOuterSans">
                                            {page.name}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul> */}
                </div>
                <div className="flex flex-col h-1/5 bg-toscagreen justify-center items-center">
                    <div className="w-full flex justify-center space-x-4">
                        <BiUser
                            size={40}
                            className="border-2 border-black rounded-full"
                        />
                        <div>
                            <p className="text-sm text-left font-MadeOuterSans">
                                Hello, {userName}
                            </p>
                            <p className="text-sm text-left font-PlusJakartaSans">
                                {userRole}
                            </p>
                        </div>
                    </div>
                    <Button
                        variant="button-primary"
                        className={"w-32 mt-4"}
                        type={"submit"}
                    >
                        Change Role
                    </Button>
                    <OutlineButton
                        variant="button-primary"
                        className={"w-32 mt-2"}
                        type={"submit"}
                        onClick={() => setShowModal(true)}
                    >
                        Log Out
                    </OutlineButton>
                </div>
            </aside>
            <main className="no-scrollbar overflow-y-scroll  w-screen p-4 sm:ml-64 h-screen">
                {showModal ? (
                    <WarningModal
                        label="Confirmation"
                        description="Are you sure you want to leave?"
                        rightbutton="Leave"
                        leftbutton="Cancel"
                        onClickRight={handleLogout}
                        onClickLeft={() => setShowModal(false)}
                    />
                ) : null}
                {children}
            </main>
        </div>
    );
}

export default Navbar;
