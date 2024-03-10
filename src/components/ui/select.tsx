interface features{
    setValue:Function,
    value:string,
    children:any
}

const Select = (features:features) => {

    const handleChange = (event:any) => {
        features.setValue(event.target.value);
    }
    return (
        <div className="h-[47px] bg-gray-200 rounded-md px-2 flex items-center">
            <select value={features.value} onChange={handleChange} className="w-full outline-0 bg-gray-200 capitalize text-sm">
                <option disabled></option>
                {features.children}
            </select>
        </div>
    );
}

export default Select;