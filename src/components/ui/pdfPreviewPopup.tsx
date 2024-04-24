import Popup from "./popup";

interface features{
    isClicked: boolean,
    setIsClicked: Function,
    fileName:string,
    url:string
}
const PdfPreviewPopup = (features:features) => {
    return (
        <Popup isClicked={features.isClicked} setIsClicked={features.setIsClicked} title={features.fileName}>
            <div className="h-96 w-full">
                <iframe className="border-0" src={features.url} width="100%" height="100%">
                    PDF yüklenemiyor.
                </iframe>
            </div>
        </Popup>
    );
}

export default PdfPreviewPopup;