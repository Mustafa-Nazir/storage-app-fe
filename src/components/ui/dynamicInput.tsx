"use client"
import { useEffect, useState } from "react";
import Input from "./input";

interface features {
    index:string;
    setInputValues:Function;
    setInputs:Function;
}

const DynamicInput = (features:features) => {
    const [value , setValue] = useState("");
    const [index , setIndex] = useState(features.index);

    useEffect(()=>{
        features.setInputValues((prev:any) => {return {...prev , [index]:value}})
    },[value]);

    const deleteInput = () => {
        features.setInputValues((prev:any) => {
            const {[index]:_ , ...others} = prev;
            return others;
        })

        features.setInputs((prev:any) => {
            const newInputs = prev.filter((i:any)=> i.index != index);
            return newInputs;
        })
        
    }

    return (
        <div className="flex">
            <div className="flex-grow"><Input placeholder="" setValue={setValue} type="text" value={value}/></div>
            <div onClick={deleteInput} className="mt-2 ml-2 w-8 h-4 rounded-lg text-xl flex items-center justify-center bg-red-light text-red-dark cursor-pointer select-none"><div>-</div></div>
        </div>
        
    );
}

export default DynamicInput;