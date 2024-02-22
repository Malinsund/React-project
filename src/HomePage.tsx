import murika from "./img/outsidecooking.jpg"
export default function HomePage(){
    return (
        <div className="bg-cover min-h-screen">
            <div className="flex">
                <div className="w-80">
                <img src={murika} alt="Bild på Malin"/>
                </div>
                <div className="text-center flex-auto">
                <h1 className="">Hej!</h1>
                <p>Jag tycker om mat!</p>
                </div>
            </div>
        </div>


    )
}
/** className="bg-cover min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${kiwi})` }} */