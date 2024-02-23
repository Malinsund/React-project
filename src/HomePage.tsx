import murika from "./img/outsidecooking.jpg";

export default function HomePage(){
    return (
        <div className="bg-cover">
        <div className="flex">
          <div className="m-5">
            <img className="shadow-lg w-80" src={murika} alt="Bild på Malin" />
          </div>
          <div className="text-center m-10 w-96">
            <h1 className="">Hej!</h1>
            <p>Jag tycker om mat det är kul Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, minus voluptatibus odit eligendi aliquam rerum quas expedita voluptas rem quis quia necessitatibus quod eum, optio quos quidem, vitae nulla mollitia.!</p>
          </div>
          
        </div>
      </div>
    );
  }
/** className="bg-cover min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${kiwi})` }} */

/**<img className=" shadow-lg" src={chili} alt="Bild på Malin" /> */