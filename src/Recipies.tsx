import burrata from './img/Burrata.jpg';
import medPie from './img/MedPie.jpg';
import beetSallad from './img/beetSallad.jpg';
import beetGoatSallad from './img/beetsGoatcheese.jpg';
import codPotatoes from './img/codWPotatoes.jpg';
import dumplings from './img/dumplings.jpg';
import fishSoup from './img/fishSoup.jpg';
import peanutSallad from './img/peanutSallad.jpg';
import pho from './img/pho.jpg';
import scallops from './img/scallops.jpg';
import sweetpotatoSoup from './img/sweetpotatosoup.jpg';
import taco from './img/taco.jpg';
import tartar from './img/tartar.jpg';

export interface Recipie {
    id: string;
    image: string;
    title: string;
    ingredients: string [];
    description: string;
    
}
export const mockedRecipies: Recipie [] = [{

        id: "1",
        image: fishSoup,
        title: "Het fisksoppa",
        ingredients: ["200g lax", "200g torsk", "1 burk krossade tomater","2 msk fiskfond", "2 Vitlöks klyftor","2 morötter", "Creme fraise", "10 Cocktailtomater"],
        description: "Skala och hacka lök och vitlök, skär morötterna i mynt. Släng i en redig klick smör i en kastrull och stek vitlök, morot, lök och cocktailtomater, när löken blivit bjuk och fått färg häller du i en burk med krossade tomater och sedan lika mycket vatten, ös på med kryddor som du själv tycker om. Jag brukar ta Vitlökskrydda, lökpulver, paprikapulver, chilli, salt och peppar. häll i fonden och koka upp vätskan, när det har kokat ihop i ca.10 min drar du bort kastrullen från plattan och lägger i fisken, servera direkt och toppa med creme Fraise"
    },
    {
        id: "2",
        image: peanutSallad,
        title: "Friterad kronärtskocka",
        ingredients: ["50g Jordnötter","50g Mandlar","2 Salladslökar", "6 kronärtskockor", "1 msk vitlöksolja", "1 msk Olivolja", "fint rivet skal och juice från 1 citron", "salt och peppar"],
        description: "Börja med att blocka bort bladen från kronärstskockan tills det bara är hjärtat kvar, \nskär upp hjärtat i bitar och lägg i vatten med citron. \nVärm upp oljan i en kastrull med tjock botten, när oljan är 180 grader är det dags att fritera kronärstkockan. Torka av bitarna av kronärtsskocka innan du lägger i dem i den heta oljan. Fritera tills de har fått fin färg och låt sedan rinna av. Hacka jordnötter och mandlar grovt, skicva saladslöken fint lägg nu alltassamns i en bunke och häll över vitlöksolja, lite citron, sat och peppar. Rör samman allt och lägg upp på ett fat, ät och njut!"
    },
        {
            id: "3",
            image: medPie,
            title: "Medelhavspaj",
            ingredients: ["Till pajdeg:","3 dl Vetemjöl","125g smör","1-2 msk Kallt vatten","Till fyllning:","1 dl Urkänade oliver","5-6 Skivor soltorkad tomat","150g Fetaost","10 Skivor lufttorkad skinka (din favorit)","10 Körsbärstomater","3 ägg","2dl Mjölk",""],
            description: "Sätt ugnen på 200 grader. Börja med pajdegen, blanda ihop mjöl, smör, vatten och salt till en jämn deg, tryck ut i en pajform och nagga botten med en gaffel, ställ undan i kyl medan du förbereder innehållet. Det absolut viktigaste innn du gör något annat är att ta en skiva lufttorkad skinka och stoppar i munnen! Nu är du redo att fortsätta, dela tomaterna och oliverna i halvor och lägg i en bunke, ta ut några skivor soltorkad tomat ur burken och skär i strimlor. Nu är det dags att provsmaka en bit lufttorkad skinka till! lägg den soltorkade tomaten i bunken tillsammans med de andra ingredienserna, smula ner nästan all fetaost men spara lite till toppen. Blanda allting och häll i pajformen. Vispa ihop ägg och mjölk, ta gärna samma bunke (utan att diska ur den) och häll i pajformen, toppa med fetaost och stoppa in i ugnen i 25-30 minuter. Ta en skiva lufttorkad skinka och ett glas vin eller annan kall dryck medan du väntar. När pajen är klar toppar du med resterande av den lufttorkade skinkan och VOILA, smaklig måltid!"
    },
    {
        id: "4",
        image: sweetpotatoSoup,
        title: "Sötpotatissoppa med räkfräs",
        ingredients: ["500g Räkor","1 Sötpotatis","2 Morötter","1 msk Grönsaksfond","1 Rödlök","5 dl Vatten","CremeFraise","1/2 kruka persilja","1-2 vitlöksklyftor","2-3 skivor bröd till krutonger","","","",""],
        description: "Skala morötter, sötpotatis och rödlök, mise en place (allt på sin plats) är något jag själv alltid ser till att ha när jag lagar mat! skär upp sötpotatisen i 2x2cm stora bitar, skär morötterna i mynt och hacka rödlöken, ta en rejäl klick smör och släng i en kastrull, när smöret puttrar sådär mysigt slänger du i hacket och fräser tills alltsammans börjar bli mjukt. Häll i vattnet och grönsaksfond, koka tills allting blivit mjukt. Medan allting kokar kan du börja skala räkorna. När grönsakerna är mjuka kan du ta kastrullen och ställa på ett grytunderlägg och mixa soppan med en stavmixer, Ställ sedan tillbaka soppan på kastrullen och låt puttra (Tycker du att soppan är för tjock kan du späda ut den med mer vatten). Skala färdigt räkorna och glöm nu inte att provsmaka så du vet att dom är bra, ibland räcker det inte med att provsmaka bara en. Hacka vitlök och persilja, skär brödet i kuber, lägg en redig klick smör i en stekpanna, stek brödet tills det har fått gyllene färg och lägg p hushållspapper, släng i en klick smör till i pannan och fräs räkor, vitlök och persilja i någon minut, vi vill inte att räkorna skall bli gummi-aktga! lägg räkfräset i ett fat ifall någon vill fylla på. Häll upp soppa i en skål eller djup tallrik, lägg på krutonger, räkfräs, en klick creme fraise och lite färskmalen svartpeppar och servera! BON APETIT!"
    },
    {
        id: "5",
        image: burrata,
        title: "Burrata",
        ingredients: ["1 Burrata","Rödlök","6 Cocktail tomater","olivolja","Ruccula"],
        description: "Detta är en supergod förrätt eller helt enkelt att ha till vad som helst. Dela burratan på mitten och lägg upp p två assietter, lägg 3 cocktail tomater p varje assiett, skiva några tunna ringar rödlök som du lägger över burratan. Ringla en massa olivolja över allting och toppa med lite ruccula, done and done, enkelt va?!"
    },
    {
        id: "6",
        image: pho,
        title: "Min version på Pho",
        ingredients: ["2 st Pak Choi","1 Röd chili","2-3 Vitlöksklyftor","1 kruka koriande","1 burk Kimchi","1 scharlottenlök","1 lime","2cm Färsk ingefära","1msk Fisksås","1msk fond (svamp eller kyckling)","50 g svamp, champinjon eller shitake","500g risnudlar","1L vatten", "2 Mjukkokta ägg", "salt efter smak"],
        description: "Detta är min version av den vietnamesiska rätten PHO, denna är helt vegansk men vill man ha med kött så rekkomenderar jag tunt skivat nöt. Börja med att skölja pak choi och dela på mitten eller i 4 delar, hacka charlottenlök, vitlök ocj koriander. Skala och riv ingefäran. Skär chilin i skivor så du får fina runda skivor. Ta en vid kastrull och ringla i lite olja, fräs sedan scharlottenlök, vitlök, ingefäran och hälften av chilin lägg ner pak choi bitarna, när allt har blivit mjukt och fint häller du på vatten, fond och fisksås. låt koka lika länge som det tar dig att skiva all svamp tunt. Här är det dags att smaka av och salta efter behov, lägg sedan i nudlarna och koka i soppan så länge som det står på paketet. när nudlarna är klara är det dags att lägga upp soppan i djupa tallrikar, dekorera sedan med koriander, resten av chilin, Kimshi, svampen och äggen pressa en halv lime över varje tallrik och NJUT!"
    },
    {
        id: "7",
        image: tartar,
        title: "Biff tartar",
        ingredients: ["400g Innanlår av nöt","4msk Kapris","Dijon senap","1 rödbeta","1 scharlottenlök","2 äggulor","",""],
        description: "Biff tartar eller också kallad råbiff är både gott och enkelt att göra själv... specielt om man har en köttkvarn. Det går naturligtvis utmärkt utan också! Börja med att koka rödbetan i saltat vatten i 15-20 min, under tiden kan du göra köttet, med köttkvarn kör du igenom köttet en gång genom de största hålen, utan köttkvarn skär du köttet i så små bitar du bara kan. lägg in köttet i kylen igen så fort du är klar. När rödbetan har kokat färdigt tar du kastrullen från spisen och häller av vattnet, spola sedan rödbetan i kallt vatten, när betan svalnat borde det gå lätt att bara dra av skalet. hacka betan fint och lägg åt sidan. Hacka charlottenlöken fint. ta ut köttet och lägg upp på 2 tallrikar och forma efter önskemål, kanske ett hjärta om du skall bjuda din käresta på något romantiskt? strö sedan över cscharlottenlök, kapris, färskmald peppar och tärnade rödbetor lägg en äggula i mitten, servera och ät på en gång "
    },
    {
        id: "8",
        image: codPotatoes,
        title: "Torsk med gudomlig sås",
        ingredients: ["",""],
        description: ""
    },
      {
        id: "9",
        image: beetGoatSallad,
        title: "Rödbetor och getost",
        ingredients: ["",""],
        description: ""
    },
      {
        id: "10",
        image: dumplings,
        title: "Dumplings",
        ingredients: ["",""],
        description: ""
    },
      {
        id: "11",
        image: taco,
        title: "Min egen taco-fusion",
        ingredients: ["",""],
        description: ""
    },
    {
        id: "12",
        image: scallops,
        title: "jordärtskocka med pilgrimsmussla",
        ingredients: ["",""],
        description: ""
    },
    {
        id: "11",
        image: beetSallad,
        title: "En annan rödbetssallad",
        ingredients: ["",""],
        description: ""
    },/*
    {
        id: "11",
        image: taco,
        title: "Min egen taco-fusion",
        ingredients: ["",""],
        description: ""
    },
    */
];