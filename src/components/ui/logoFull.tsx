import Image from "next/image";

interface features {
    width:number,
    textSize?:string,
    textActive?:boolean,
    isFlexCol?:boolean
}
const LogoFull = (features:features) => {
    return (
        <div className={`px-3 py-2 flex ${features.isFlexCol && "flex-col items-center"}`}>
            <Image src="/logoFull.svg" alt="logoFull" width={features.width} height={0} />
            {features.textActive || true && <div className={`${!features.isFlexCol && "ml-4"} flex items-center ${features.textSize || "text-2xl"} font-bold text-main-dark`}>InMemory</div>}
        </div>
    );
}

export default LogoFull;