import murika from "./img/outsidecooking.jpg";

export default function HomePage() {
  return (
    <div className="bg-cover">
      <div className="flex">
        <div className="m-5">
          <img className="shadow-lg w-80" src={murika} alt="Bild på Malin" />
        </div>
        <div className="text-center m-10 w-1/2 text-xl">
          <h1 className="mb-5">Hej!</h1>
          <p>
            Jag älskar mat, både att äta och laga! För några år sedan började
            jag spela in mig själv när jag lagade mat och kallade mig själv
            Mat-Malle, Detta var både uppskattat och underhållande för mina
            vänner att titta på och det har därför följt med mig sedan dess. Jag
            och min sambo har samma passion för mat och god dryck och vi står
            gärna i köket tillsammans i flera timmar och lagar mat från världens
            alla hörn, jag vill därför dela med mig av de recept som vi tyckt
            allra mest om. Alla recept är för 2 personer och vill man göra för
            fler så är et bara att dubbla eller tredubbla recepten. Nu är det ju
            så att den godaste maten uppnås när man sätter sin egen touch på
            den, ta gärna recepten som en inspiration och var inte rädd att
            lägga till eller ta bort saker, höfta gärna lite med måtten för att
            få det precis så som du själv vill ha det! Hoppas dett akan bringa
            lika mycket matglädje till dig som det gör till oss och glöm inte
            smöret! Mycket smör är kärnan till riktigt god mat!
          </p>
        </div>
      </div>
    </div>
  );
}
