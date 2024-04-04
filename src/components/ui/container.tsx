const Container = ({children}:any) => {
    return (
        <div className="h-full m-5 bg-white rounded-2xl shadow-md p-4 overflow-y-auto">
            {children}
        </div>
    );
}

export default Container;