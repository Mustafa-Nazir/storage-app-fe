interface features{
    name:string,
}

const LibraryCard = (features:features) => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-500 h-[180px] w-[115px] bg-white rounded-2xl  border-2 border-gray-300 cursor-pointer select-none mx-3 my-2 overflow-hidden hover:ring-2 hover:ring-main-light hover:border-0">
            <div className="h-[60%] w-full bg-[#d0d7fe] border-b-2 border-dashed border-white"></div>
            <div className="h-[40%] text-md text-gray-700 flex items-center justify-center"><div className="text-center">{features.name}</div></div>
        </div>
    );
}

export default LibraryCard;