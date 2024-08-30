import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-section p-8 bg-gray-50 rounded-lg shadow-xl">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About ReactCrave</h1>
            <h2 className="text-xl font-semibold text-gray-600 mb-6">
                ReactCrave is a Swiggy clone built using React, showcasing modern web technologies and responsive design.
            </h2>
            <div className="flex flex-col items-center">
                <User />
                <UserClass name="Romit" location="Prayagraj" />
            </div>
            <footer className="mt-8 text-center text-gray-500 text-sm">
                <p>Built with ❤️ by Romit</p>
            </footer>
        </div>
    );
}

export default About;
