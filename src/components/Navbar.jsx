import React, { useState } from "react";


const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex items-center justify-start h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full  text-3xl font-bold text-white">Johan Application Enterprise.</h1>
        </div>
    );
};

export default Navbar;
