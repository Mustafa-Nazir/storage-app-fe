const CreateCard = () => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-500 h-[180px] w-[115px] bg-empty-field-light rounded-2xl border-dashed border-2 border-gray-300 cursor-pointer select-none mx-3 my-2">
            <div className="text-6xl font-thin">+</div>
            <div className="text-center">
                <div className="text-sm">Oluştur</div>
                <div className="text-xs">Yeni kütüphane</div>
            </div>
        </div>
    );
}

export default CreateCard;