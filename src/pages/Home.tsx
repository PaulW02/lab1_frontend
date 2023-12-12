import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const username = localStorage.getItem('username')
    const navigation = useNavigate();
    console.log(username);

    useEffect( () => {
        if (username == null){
            navigation("/Login")
        }
    }, []);

    return (
        <div>
            {username != null && username?.length > 0 && <h1 className="flex items-center justify-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to the home page {username}</h1>}
            {/* Display content available to authenticated users */}
        </div>
    );
}

export default Home;
