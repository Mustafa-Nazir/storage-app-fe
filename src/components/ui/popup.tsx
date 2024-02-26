interface features {
    title:string,
    children:any,
    setIsClicked:Function,
    isClicked:boolean
}

const Popup = (features:features) => {

    const closePopup = () => {
        features.setIsClicked(false);
    }

    return features.isClicked && (
        <div className="fixed top-0 left-0 h-full w-full">
            <div onClick={closePopup} className="absolute z-10 w-full h-full bg-black opacity-20"></div>
            <div className="absolute z-20 top-20 left-1/2 transform -translate-x-1/2  w-[90%] lg:w-[60%] bg-white rounded-lg border border-gray-300">
                <div className="h-[30px] m-2 flex items-center justify-between px-2">
                    <div className="font-bold">{features.title}</div>
                    <div onClick={closePopup} className="font-bold text-red-500 cursor-pointer select-none">X</div>
                </div>
                <div className="m-1 px-4 mb-3">
                    {features.children}
                </div>
            </div>
        </div>
    );
}

export default Popup;