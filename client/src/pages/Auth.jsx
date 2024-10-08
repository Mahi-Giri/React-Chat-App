import Background from "@/assets/login.png";
import Victory from "@/assets/victory.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiClient } from "@/lib/api.client.js";
import { useState } from "react";
import { toast } from "sonner";
import { SIGNUP_ROUTE } from "../constant.js";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateSignup = () => {
        if (!email.length) {
            toast.error("Email is required.");
            return false;
        }
        if (!password.length) {
            toast.error("Password is required.");
            return false;
        }
        if (!confirmPassword.length) {
            toast.error("Confirm Password is required.");
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Password and confirm password should be same.");
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        // Login logic here
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (validateSignup()) {
            const response = await apiClient.post(
                SIGNUP_ROUTE,
                { email, password },
                { withCredentials: true }
            );
            console.log(response);
        }
    };

    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center">
                            <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
                            <img className="h-[100px]" src={Victory} alt="victory Emoji" />
                        </div>
                        <p className="font-medium text-center">
                            Fill in the details to get started with the best chat app!!
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <Tabs className="w-3/4">
                            <TabsList className="bg-transparent rounded-none w-full">
                                <TabsTrigger
                                    value="login"
                                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                                >
                                    Login
                                </TabsTrigger>
                                <TabsTrigger
                                    value="signup"
                                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                                >
                                    SignUp
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="login" className="flex flex-col gap-5 mt-10">
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    className="rounded-full p-6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    className="rounded-full p-6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button className="rounded-full p-6" onClick={handleLogin}>
                                    Login
                                </Button>
                            </TabsContent>
                            <TabsContent value="signup" className="flex flex-col gap-5">
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    className="rounded-full p-6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    className="rounded-full p-6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Input
                                    placeholder="Confirm Password"
                                    type="password"
                                    className="rounded-full p-6"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <Button className="rounded-full p-6" onClick={handleSignup}>
                                    Sign Up
                                </Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className="hidden xl:flex justify-center items-center">
                    <img className="h-[600px]" src={Background} alt="background login" />
                </div>
            </div>
        </div>
    );
};

export default Auth;
