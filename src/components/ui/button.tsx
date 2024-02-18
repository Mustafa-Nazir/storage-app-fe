interface features {
    name:string,
    onClick:Function,
    bgColor?:string,
    bgHover?:string,
}

const Button = (features:features) => {
    return (
        <div className= {`h-[45px] whitespace-nowrap ${features.bgColor || "bg-main-dark"} ${features.bgHover || "hover:bg-main-light"} text-white text-sm w-full px-1.5 py-1 flex items-center justify-center rounded-full cursor-pointer select-none active:ring`}
        onClick={()=>{features.onClick()}}>
            {features.name}
        </div>
    );
}

export default Button;