"use client"
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import TextButton from "@/components/ui/textButton";
import IUserForLogin from "@/models/auth/IUserForLogin";
import AuthService from "@/services/auth/authService";
import RegexPatterns from "@/utilities/regex/regexPatterns";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const router = useRouter();

    const login = async () => {
        if(!regexControl()) return;

        const loginData:IUserForLogin = {
            email:email,
            password:password
        }

        const result = await AuthService.Login(loginData);
        if(!result.success) return toast.error(result.message);

        window.localStorage.setItem("token",result.data?.token as string);
        router.push("/application/library");
    }

    const regexControl = ():boolean => {
        const emailControl = RegexPatterns.testInput(email,RegexPatterns.email);
        setEmailError(!emailControl);

        const passwordControl = password.length > 0;
        setPasswordError(!passwordControl);

        return ![emailControl,passwordControl].includes(false);
    }
    return (
        <div className="w-full h-[100vh] flex">
            <div className="hidden sm:block sm:w-[45%] flex justify-center bg-gradient-to-b from-main-dark to-main-light">
                <div className="flex flex-col h-[70%] items-center justify-center">
                    <div className="text-white text-center font-bold text-4xl mb-3">Merhaba, Tekrardan Hoşgeldiniz!</div>
                    <div className="text-gray-100 text-sm text-center">Devam etmek için hasbınıza giriş yapınız.</div>
                </div>
            </div>
            <div className="w-[5px] bg-purple-light"></div>
            <div className="w-full sm:w-[55%] flex flex-col items-center justify-around bg-white">
                <div className="text-4xl font-bold text-gray-500">Giriş Yap</div>
                <div className="w-[75%] h-[50%] flex flex-col justify-around">
                    <div>
                        <Input
                            placeholder="E-mail"
                            type="text"
                            value={email}
                            setValue={setEmail}
                            errorState={emailError}
                            errorMessage="Geçerli bir email adresi girin."
                        />
                        <Input
                            placeholder="Şifre"
                            type="password"
                            value={password}
                            setValue={setPassword}
                            errorState={passwordError}
                            errorMessage="Şifre alanı boş olamaz."
                        />
                        <div className="flex justify-end"><TextButton name="Şifremi Unuttum" onClick={()=>{}} textColor="text-purple-dark"/></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[150px]"><Button name="Giriş Yap" onClick={login} /></div>
                    </div>
                </div>
                <div className="flex"><span className="mr-1">Hesabın yok mu?</span><TextButton name="Kaydol" onClick={()=>{router.push("/auth/register")}} textColor="text-purple-dark"/></div>
            </div>
        </div>
    );
}