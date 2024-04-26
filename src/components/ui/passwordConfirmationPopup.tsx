import Button from "./button";
import Input from "./input";
import Popup from "./popup";

interface features{
    isClicked:boolean,
    setIsClicked:Function,
    onClickedHandle:Function,
    value:string,
    setValue:Function,
}
const PasswordConfirmationPopup = (features:features) => {
    return (
        <Popup isClicked={features.isClicked} setIsClicked={features.setIsClicked} title="Şifre Onayı">
            <div className="pt-4">
                <Input placeholder="Şifre" setValue={features.setValue} value={features.value} type="password"/>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[150px]">
                    <Button name="Onayla" onClick={features.onClickedHandle}/>
                </div>
            </div>
        </Popup>
    );
}

export default PasswordConfirmationPopup;