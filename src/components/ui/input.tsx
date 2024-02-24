import { useState } from "react";

interface features {
    value: string,
    setValue: Function,
    placeholder: string,
    placeholderColor?: string,
    errorState?: boolean,
    errorMessage?:string,
    type:string
}

const Input = (features: features) => {
    const [onFocus, setOnFocus] = useState(false);
    return (
        <div className={`m-0 p-0 ${features.errorState ? "mb-2" : "mb-6"}`}>
            <div className={`relative rounded-md px-0.5 pb-0.5 pt-2 bg-gray-200 ${onFocus || features.value.length > 0 ? "ring":""} ${features.errorState ? "ring ring-red-400":""}`}>
                <span className={`bg-transient absolute left-2 ${onFocus || features.value.length > 0 ? "top-0 text-sm" : "bottom-3"} ${features.errorState ? "text-red-500":features.placeholderColor || "text-main-light"}`}>{features.placeholder}</span>
                <input className={`w-full outline-0 bg-gray-200 pl-2 border-0 border-b-2 text-black text-sm p-2`}
                    type={features.type}
                    placeholder=" "
                    onFocus={() => setOnFocus(true)}
                    onBlur={() => setOnFocus(false)}
                    onInput={e => features.setValue((e.target as HTMLInputElement).value)}
                    value={features.value} />
            </div>
            {features.errorState && <div className="pl-2 pt-0.5 text-red-500">{features.errorMessage}</div>}
        </div>

    );
}

export default Input;