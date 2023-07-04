import React from "react";
import Login from "./Login";

export default function Header() {

    const Wrapper = {
        marginTop: "16px",
        padding: "8px",
        boxShadow: "0 4px 12px 0 rgba(0,0,0,.07), 0 2px 4px rgba(0,0,0,.05)",
        height: "60px",
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
    };

    function signUp() {

    }

    return (
        <div style={Wrapper}>
            <img
                className="w-230"
                src="https://i.imgur.com/vWNqDDq.jpg"
            />
            <div>
                <Login/>
                <button
                    className="p-2 bg-[#0dcaf0] rounded-md hover:bg-[#0dcaf0] text-[16px] shadow-lg shadow-rgba(0,0,0,.07)"
                    onClick={signUp}>
                    SIGNUP
                </button>
            </div>

        </div>
    );
}