interface features {
    closeFunction: Function,
}

const BackgroundCover = (features:features) => {
    return(
        <div onClick={()=>features.closeFunction(false)} className="z-10 fixed w-full h-full top-0 left-0 bg-gray-500 opacity-25"></div>
    );
}

export default BackgroundCover;