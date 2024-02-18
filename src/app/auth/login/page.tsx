"use client"
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import TextButton from "@/components/ui/textButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
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
                            placeholder="e-mail"
                            type="text"
                            value={email}
                            setValue={setEmail}
                        />
                        <Input
                            placeholder="şifre"
                            type="password"
                            value={password}
                            setValue={setPassword}
                        />
                        <div className="flex justify-end"><TextButton name="Şifremi Unuttum" onClick={()=>{}} textColor="text-purple-dark"/></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[150px]"><Button name="Giriş Yap" onClick={() => { }} /></div>
                    </div>
                </div>
                <div className="flex"><span className="mr-1">Hesabın yok mu?</span><TextButton name="Kaydol" onClick={()=>{router.push("/auth/register")}} textColor="text-purple-dark"/></div>
            </div>
        </div>
    );
}