import IIcon from "./IIcon";

const ArrowBackIcon = (features: IIcon) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={features.className} height="24" viewBox="0 -960 960 960" width="24">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
    );
}

export default ArrowBackIcon;