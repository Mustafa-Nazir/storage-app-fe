"use client"
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import TextButton from "@/components/ui/textButton";
import IUserForRegister from "@/models/auth/IUserForRegister";
import AuthService from "@/services/auth/authService";
import RegexPatterns from "@/utilities/regex/regexPatterns";
import registerImage from "@/../../public/register.png"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const [surname, setSurname] = useState("");
    const [surnameError, setSurnameError] = useState(false);

    const router = useRouter();

    const register = async () => {
        if (!regexControl()) return;

        const registerData: IUserForRegister = {
            email: email,
            name: name,
            password: password,
            surname: surname
        }

        const data = await AuthService.Register(registerData);
        if (!data.success) {
            toast.error(data.message);
            return;
        }
        toast.success(data.message);
        clearInputs();
    }

    const regexControl = (): boolean => {
        const nameControl = RegexPatterns.testInput(name, RegexPatterns.userName);
        setNameError(!nameControl);

        const surnameControl = RegexPatterns.testInput(surname, RegexPatterns.userName);
        setSurnameError(!surnameControl);

        const emailControl = RegexPatterns.testInput(email, RegexPatterns.email);
        setEmailError(!emailControl);

        const passwordControl = RegexPatterns.testInput(password, RegexPatterns.password);
        setPasswordError(!passwordControl);

        return ![
            nameControl,
            surnameControl,
            emailControl,
            passwordControl
        ].includes(false);
    }

    const clearInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
        setSurname("");
    }

    return (
        <div className="w-full h-[100vh] flex">
            <div className="hidden sm:flex sm:w-[55%] justify-center bg-main">
                <div className="flex items-center h-full w-[65%]">
                    <img src={registerImage.src} alt="registerImage" />
                </div>
            </div>
            <div className="w-[5px] bg-purple-light"></div>
            <div className="w-full sm:w-[45%] flex flex-col items-center justify-around bg-white">
                <div className="text-4xl font-bold text-gray-500">Kaydol</div>
                <div className="w-[75%] h-[50%] flex flex-col justify-around">
                    <div>
                        <Input
                            placeholder="Ad"
                            type="text"
                            value={name}
                            setValue={setName}
                            errorState={nameError}
                            errorMessage="Ad sayı ve özel karakter içeremez."
                        />
                        <Input
                            placeholder="Soyad"
                            type="text"
                            value={surname}
                            setValue={setSurname}
                            errorState={surnameError}
                            errorMessage="Soyad sayı ve özel karakter içeremez."
                        />
                        <Input
                            placeholder="E-mail"
                            type="text"
                            value={email}
                            setValue={setEmail}
                            errorState={emailError}
                            errorMessage="Geçerli bir email adresi giriniz."
                        />
                        <Input
                            placeholder="Şifre"
                            type="password"
                            value={password}
                            setValue={setPassword}
                            errorState={passwordError}
                            errorMessage="Şifre en az 8 karater olmalı, en az bir küçük, bir büyük ve özel karakter içermeli."
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[150px]"><Button name="Kaydol" onClick={register} /></div>
                    </div>
                </div>
                <div className="flex"><span className="mr-1">Bir hesabın var mı?</span><TextButton name="Giriş Yap" onClick={() => { router.push("/auth/login") }} textColor="text-purple-dark" /></div>
            </div>
        </div>
    );

}