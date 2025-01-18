import cloudImages from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isMailFocused, setIsMailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);



    const handleLoginData = () => {
        if (!mail.includes("@") || !mail.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.trim() === "") {
            alert("Password ");
            return;
        }
        alert("Login Successful!");
    }


    //  Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };


    return (
        <div className="min-h-screen flex justify-center items-center md:bg-[#F0FDF4]">
            <div className="md:w-1/2 md:rounded-xl md:bg-[#FFFFFF]">
                <div className="flex flex-col items-center justify-center text-center py-10 md:m-auto lg:w-2/3 xl:w-1/2">
                    <h1 className="text-3xl text-green-600 font-bold mb-4">AgriHealth</h1>
                    <p className="mb-10 text-gray-500 text-md font-medium md:mb-8">Welcome back!</p>
                    <div className="p-4 bg-white">

                        {/* Email section */}
                        <div className={`relative w-full flex border border-gray-300 rounded-md mb-7 ${isMailFocused || mail ? "border-green-600" : ""}`}>
                            <button className={`pl-2 ${isMailFocused || mail ? "hidden" : "block"}`}>
                                <img src={cloudImages.mail} width={25} height={25} alt="email icon" />
                            </button>
                            {/* Label for mail */}
                            <label
                                className={`absolute left-8 top-2 text-gray-400 transition-all duration-200 ${isMailFocused || mail
                                    ? "text-xs -top-3 left-2 px-2 text-green-600 bg-white"
                                    : "text-base top-2.5"
                                    }`}
                                htmlFor="mail"
                            >
                                Email Address
                            </label>

                            {/* Input field mail*/}
                            <input
                                id="mail"
                                type="email"
                                className="w-full px-3 py-2 focus:outline-none rounded-md"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                onFocus={() => setIsMailFocused(true)}
                                onBlur={() => setIsMailFocused(false)}
                            />
                        </div>
                        {/* Password section */}
                        <div className={`relative w-full flex border border-gray-300 rounded-md mb-3 ${isPasswordFocused || password ? "border-green-600" : ""}`}>
                            {/* left green border to cover invisible expanded input width */}
                            <div
                                className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${isPasswordFocused || password ? "border border-l-green-600 border-r-0" : "bg-transparent"
                                    }`}
                            ></div>

                            {/* lock icon */}
                            <button className={`pl-2 border- ${isPasswordFocused || password ? "hidden" : "block"}`}>
                                <img src={cloudImages.padlock} width={25} height={25} alt="padlock icon" />
                            </button>
                            {/* Label for password */}
                            <label
                                className={`absolute left-8 top-2 text-gray-400 transition-all duration-200 ${isPasswordFocused || password
                                    ? "text-xs -top-2 left-2 px-2 text-green-600 bg-white"
                                    : "text-base top-2.5"
                                    }`}
                                htmlFor="password"
                            >
                                Password
                            </label>

                            {/* Input field password*/}
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="w-full px-3 py-2 focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setIsPasswordFocused(true)}
                                onBlur={() => setIsPasswordFocused(false)}
                            />
                            {/* view password icon */}
                            <button onClick={togglePasswordVisibility} className="pr-3">
                                <img
                                    src={showPassword ? cloudImages.hidePassword : cloudImages.seePassword}
                                    width={25}
                                    height={25}
                                    alt={showPassword ? "Hide password" : "Show password"}
                                />
                            </button>
                        </div>


                        <p className="text-sm text-green-600 mb-8 pr-5 text-right cursor-pointer">
                            Forget Password?
                        </p>
                        <button
                            className="w-1/2 p-2 bg-green-600 rounded-full text-white"
                            onClick={handleLoginData}
                        >
                            Login
                        </button>
                        <p className="mt-6 text-sm text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/" className="text-green-600 cursor-pointer">SignUp</Link>
                        </p>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Or continue with</p>
                    <div className="w-3/4 mt-10 flex justify-between">
                        <button>
                            <img src={cloudImages.facebook} width={20} height={20} alt="facebook logo" />
                        </button>
                        <button>
                            <img src={cloudImages.instagram} width={20} height={20} alt="instagram logo" />
                        </button>
                        <button>
                            <img src={cloudImages.spaceX} width={20} height={20} alt="twitter logo" />
                        </button>
                        {/* Add social login buttons here */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
