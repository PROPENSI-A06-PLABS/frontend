import '../App.css';
import React from "react";

const RoundedButton = () => {
    return (
        <div class="p-10">
            <button class="w-72 h-72 rounded-full text-xl font-bold bg-azureish-white border-magic-mint hover:border-magic-mint hover:border-4 text-go-green hover:shadow-focus">
                Check-in
            </button>
        </div>
    );
}

export { RoundedButton };