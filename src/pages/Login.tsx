import React, {useEffect, useState} from 'react';
import { userService } from "../rest/UserService";
import { useNavigate } from "react-router-dom";
import "../css/login.css"
import "../css/index.css"

function Login() {
    const [formData, setFormData] = useState({username: '', password: ''});
    const navigate = useNavigate();
    const username = localStorage.getItem('username')
    useEffect( () => {
        if (username != null){
            navigate("/Home")
        }
    }, []);


    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleLogin = async (e: any) => {
        e.preventDefault();
        userService.loginUser(formData).then(data => {
            const userObj = data.response;
            console.log(userObj)
            if (userObj.id > 0) {
                localStorage.setItem('userId', userObj.id);
                localStorage.setItem('username', userObj.email);
                localStorage.setItem('role', userObj.role)
                navigate("/Home"); // Navigate to the "/home" route
            }
        });
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in
                        to your account</h2>
                </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onClick={handleLogin} method="POST">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Email
                            address</label>
                        <div className="mt-2">
                            <input id="username" name="username" value={formData.username} onChange={handleInputChange}
                                   required
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password"
                                   className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" name="password"  value={formData.password} required  onChange={handleInputChange}
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
