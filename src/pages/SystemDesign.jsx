import "../App.css";
import {
    Button,
    OutlineButton,
    WarningModal,
    ConfirmModal,
    FileInput,
    DropFileInput,
} from "../components";
import React, { useState, useEffect } from "react";
import { Dropdown } from "../components/Dropdown";

function SystemDesign() {
    const [showModal, setShowModal] = useState(false);

    return (
        <section>
            <div className="">
                <div className="container mx-auto bg-white rounded-[25px] shadow border p-8 m-10">
                    <p className="text-3xl text-gray-700 font-bold mb-5">
                        Welcome!
                    </p>
                    <p className="text-gray-500 text-lg">System Design</p>

                    {/* <button className="primary-button" onClick={() => console.log("Primary Button")}>asdad</button> */}
                    <Button
                        variant="button-primary"
                        onClick={() => console.log("Primary Button")}
                    >
                        Primary Button
                    </Button>
                    <Button
                        variant="button-danger"
                        onClick={() => console.log("Danger Button")}
                    >
                        Danger Button
                    </Button>
                    <OutlineButton
                        variant="button-primary"
                        onClick={() => console.log("Outline Primary Button")}
                    >
                        Outline Primary Button
                    </OutlineButton>
                    <OutlineButton
                        variant="button-danger"
                        onClick={() => console.log("Outline Danger Button")}
                    >
                        Outline Danger Button
                    </OutlineButton>
                    <FileInput
                        title="Contract"
                        description="SVG, PNG, JPG (MAX 4MB)"
                    />
                    <DropFileInput description="Upload photos here" />
                    <Dropdown></Dropdown>

                    {showModal ? (
                        <ConfirmModal
                            label="Confirmation"
                            description="Are you sure you want to change employee status?"
                            rightbutton="Change"
                            leftbutton="Cancel"
                            onClickRight={() => setShowModal(false)}
                            onClickLeft={() => setShowModal(false)}
                        />
                    ) : null}
                    <Button
                        variant="button-danger"
                        onClick={() => setShowModal(true)}
                    >
                        Show modal
                    </Button>
                </div>
                <div className="h-screen">
                    <div className="container mx-auto bg-white rounded-[25px] shadow border p-8 m-10">
                        <p className="text-3xl text-gray-700 font-bold mb-5">
                            Welcome!
                        </p>
                        <p className="text-gray-500 text-lg">System Design</p>

                        {/* <button className="primary-button" onClick={() => console.log("Primary Button")}>asdad</button> */}
                        <Button
                            variant="button-primary"
                            onClick={() => console.log("Primary Button")}
                        >
                            Primary Button
                        </Button>
                        <Button
                            variant="button-danger"
                            onClick={() => console.log("Danger Button")}
                        >
                            Danger Button
                        </Button>
                        <OutlineButton
                            variant="button-primary"
                            onClick={() =>
                                console.log("Outline Primary Button")
                            }
                        >
                            Outline Primary Button
                        </OutlineButton>
                        <OutlineButton
                            variant="button-danger"
                            onClick={() => console.log("Outline Danger Button")}
                        >
                            Outline Danger Button
                        </OutlineButton>
                        <FileInput
                            title="Contract"
                            description="SVG, PNG, JPG (MAX 4MB)"
                        />
                        <DropFileInput description="Upload photos here" />
                        {/* <ConfirmModal label='Confirmation' description='Are you sure you want to change employee status?' rightbutton='Change' leftbutton='Cancel'/> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SystemDesign;
