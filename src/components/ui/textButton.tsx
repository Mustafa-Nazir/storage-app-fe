interface features {
    name:string;
    textColor?:string;
    onClick:Function
}

const TextButton = (features:features) => {
    return (
        <div className= {`${features.textColor || "text-main-dark"} whitespace-nowrap cursor-pointer select-none`}
        onClick={()=>{features.onClick()}}>
            {features.name}
        </div>
    );
};

export default TextButton;