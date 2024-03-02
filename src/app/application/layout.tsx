"use client"
import UserService from "@/services/user/userService";
import { addUserInfo } from "@/utilities/redux/slices/userInfoSlice";
import store from "@/utilities/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [isLoaded , setIsLoaded] = useState(false);

    const router = useRouter();

    useEffect(()=>{
        const token = window.localStorage.getItem("token");
        if(!token){
            router.push("/auth/login");
            return;
        }
        setUserInfo();
        setIsLoaded(true);
    },[])

    const getUserInfo = async () => {
        const result = await UserService.GetUserInfo();
        return result.data;
    }

    const setUserInfo = async () => {
        const data = await getUserInfo();
        store.dispatch(addUserInfo(data));
    }

    return (
        <Provider store={store}>
            {isLoaded && children}
        </Provider>
    );
}