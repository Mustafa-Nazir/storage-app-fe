import Popup from "./popup";

interface features{
    title:string,
    content:string,
    isClicked:boolean,
    setIsClicked:Function

}
const AnnouncementContentPopup = (features:features) => {
    return (
        <Popup isClicked={features.isClicked} setIsClicked={features.setIsClicked} title={features.title}>
            <div className="min-h-96" dangerouslySetInnerHTML={{__html: features.content}}></div>
        </Popup>
    );
}

export default AnnouncementContentPopup;