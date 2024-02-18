"use client"
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import TextButton from "@/components/ui/textButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const router = useRouter();

    return (
        <div className="w-full h-[100vh] flex">
            <div className="hidden sm:block sm:w-[45%] flex justify-center bg-gradient-to-b from-main-dark to-main-light">
                <div className="flex flex-col h-[70%] items-center justify-center">
                    <div className="text-white text-center font-bold text-4xl mb-3">Merhaba, Hoşgeldiniz!</div>
                    <div className="text-gray-100 text-sm text-center">Hemen yeni bir hesap oluşturun.</div>
                </div>
            </div>
            <div className="w-[5px] bg-purple-light"></div>
            <div className="w-full sm:w-[55%] flex flex-col items-center justify-around bg-white">
                <div className="text-4xl font-bold text-gray-500">Kaydol</div>
                <div className="w-[75%] h-[50%] flex flex-col justify-around">
                    <div>
                        <Input
                            placeholder="Ad"
                            type="text"
                            value={name}
                            setValue={setName}
                        />
                        <Input
                            placeholder="Soyad"
                            type="text"
                            value={surname}
                            setValue={setSurname}
                        />
                        <Input
                            placeholder="E-mail"
                            type="text"
                            value={email}
                            setValue={setEmail}
                        />
                        <Input
                            placeholder="Şifre"
                            type="password"
                            value={password}
                            setValue={setPassword}
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[150px]"><Button name="Kaydol" onClick={() => { }} /></div>
                    </div>
                </div>
                <div className="flex"><span className="mr-1">Bir hesabın var mı?</span><TextButton name="Giriş Yap" onClick={() => {router.push("/auth/login")}} textColor="text-purple-dark" /></div>
            </div>
        </div>
    );

}