import burrata from "./img/Burrata.jpg";
import medPie from "./img/MedPie.jpg";
import beetSallad from "./img/beetSallad.jpg";
import beetGoatSallad from "./img/beetsGoatcheese.jpg";
import codPotatoes from "./img/codWPotatoes.jpg";
import dumplings from "./img/dumplings.jpg";
import fishSoup from "./img/fishSoup.jpg";
import peanutSallad from "./img/peanutSallad.jpg";
import pho from "./img/pho.jpg";
import scallops from "./img/scallops.jpg";
import sweetpotatoSoup from "./img/sweetpotatosoup.jpg";
import taco from "./img/taco.jpg";
import tartar from "./img/tartar.jpg";

export interface Recipe {
  id: string;
  image: string;
  title: string;
  ingredients: string[];
  description: string;
}
export const mockedrecipes: Recipe[] = [
  {
    id: "1",
    image: fishSoup,
    title: "Het fisksoppa",
    ingredients: [
      "200g lax",
      "200g torsk",
      "1 burk krossade tomater",
      "2 msk fiskfond",
      "2 Vitlöks klyftor",
      "2 morötter",
      "Creme fraise",
      "10 Cocktailtomater",
    ],
    description:
      "Skala och hacka lök och vitlök, skär morötterna i mynt. Släng i en redig klick smör i en kastrull och stek vitlök, morot, lök och cocktailtomater, när löken blivit bjuk och fått färg häller du i en burk med krossade tomater och sedan lika mycket vatten, ös på med kryddor som du själv tycker om. Jag brukar ta Vitlökskrydda, lökpulver, paprikapulver, chilli, salt och peppar. häll i fonden och koka upp vätskan, när det har kokat ihop i ca.10 min drar du bort kastrullen från plattan och lägger i fisken, servera direkt och toppa med creme Fraise",
  },
  {
    id: "2",
    image: peanutSallad,
    title: "Friterad kronärtskocka",
    ingredients: [
      "50g Jordnötter",
      "50g Mandlar",
      "2 Salladslökar",
      "6 kronärtskockor",
      "1 msk vitlöksolja",
      "1 msk Olivolja",
      "fint rivet skal och juice från 1 citron",
      "salt och peppar",
    ],
    description:
      "Börja med att blocka bort bladen från kronärstskockan tills det bara är hjärtat kvar, \nskär upp hjärtat i bitar och lägg i vatten med citron. \nVärm upp oljan i en kastrull med tjock botten, när oljan är 180 grader är det dags att fritera kronärstkockan. Torka av bitarna av kronärtsskocka innan du lägger i dem i den heta oljan. Fritera tills de har fått fin färg och låt sedan rinna av. Hacka jordnötter och mandlar grovt, skicva saladslöken fint lägg nu alltassamns i en bunke och häll över vitlöksolja, lite citron, sat och peppar. Rör samman allt och lägg upp på ett fat, ät och njut!",
  },
  {
    id: "3",
    image: medPie,
    title: "Medelhavspaj",
    ingredients: [
      "Till pajdeg:",
      "3 dl Vetemjöl",
      "125g smör",
      "1-2 msk Kallt vatten",
      "Till fyllning:",
      "1 dl Urkänade oliver",
      "5-6 Skivor soltorkad tomat",
      "150g Fetaost",
      "10 Skivor lufttorkad skinka (din favorit)",
      "10 Körsbärstomater",
      "3 ägg",
      "2dl Mjölk",
      "",
    ],
    description:
      "Sätt ugnen på 200 grader. Börja med pajdegen, blanda ihop mjöl, smör, vatten och salt till en jämn deg, tryck ut i en pajform och nagga botten med en gaffel, ställ undan i kyl medan du förbereder innehållet. Det absolut viktigaste innn du gör något annat är att ta en skiva lufttorkad skinka och stoppar i munnen! Nu är du redo att fortsätta, dela tomaterna och oliverna i halvor och lägg i en bunke, ta ut några skivor soltorkad tomat ur burken och skär i strimlor. Nu är det dags att provsmaka en bit lufttorkad skinka till! lägg den soltorkade tomaten i bunken tillsammans med de andra ingredienserna, smula ner nästan all fetaost men spara lite till toppen. Blanda allting och häll i pajformen. Vispa ihop ägg och mjölk, ta gärna samma bunke (utan att diska ur den) och häll i pajformen, toppa med fetaost och stoppa in i ugnen i 25-30 minuter. Ta en skiva lufttorkad skinka och ett glas vin eller annan kall dryck medan du väntar. När pajen är klar toppar du med resterande av den lufttorkade skinkan och VOILA, smaklig måltid!",
  },
  {
    id: "4",
    image: sweetpotatoSoup,
    title: "Sötpotatissoppa med räkfräs",
    ingredients: [
      "500g Räkor",
      "1 Sötpotatis",
      "2 Morötter",
      "1 msk Grönsaksfond",
      "1 Rödlök",
      "5 dl Vatten",
      "CremeFraise",
      "1/2 kruka persilja",
      "1-2 vitlöksklyftor",
      "2-3 skivor bröd till krutonger",
      "",
      "",
      "",
      "",
    ],
    description:
      "Skala morötter, sötpotatis och rödlök, mise en place (allt på sin plats) är något jag själv alltid ser till att ha när jag lagar mat! \n Skär upp sötpotatisen i 2x2cm stora bitar, skär morötterna i mynt och hacka rödlöken, ta en rejäl klick smör och släng i en kastrull, när smöret puttrar sådär mysigt slänger du i hacket och fräser tills alltsammans börjar bli mjukt. Häll i vattnet och grönsaksfond, koka tills allting blivit mjukt. Medan allting kokar kan du börja skala räkorna. När grönsakerna är mjuka kan du ta kastrullen och ställa på ett grytunderlägg och mixa soppan med en stavmixer, Ställ sedan tillbaka soppan på kastrullen och låt puttra (Tycker du att soppan är för tjock kan du späda ut den med mer vatten). Skala färdigt räkorna och glöm nu inte att provsmaka så du vet att dom är bra, ibland räcker det inte med att provsmaka bara en. Hacka nu vitlök och persilja samt skär brödet i kuber. Lägg en redig klick smör i en stekpanna och stek först brödet tills det har fått gyllene färg lägg då brödet på hushållspapper. Släng i en ny klick smör i pannan och fräs räkor, vitlök och persilja i någon minut, vi vill inte att räkorna skall bli gummi-aktga! lägg räkfräset i ett fat ifall någon vill fylla på. Häll upp soppa i en skål eller djup tallrik, lägg på krutonger, räkfräs, en klick creme fraise och lite färskmalen svartpeppar och servera! BON APETIT!",
  },
  {
    id: "5",
    image: burrata,
    title: "Burrata",
    ingredients: [
      "1 Burrata",
      "Rödlök",
      "6 Cocktail tomater",
      "olivolja",
      "Ruccula",
    ],
    description:
      "Detta är en supergod förrätt eller helt enkelt att ha till vad som helst. Dela burratan på mitten och lägg upp p två assietter, lägg 3 cocktail tomater p varje assiett, skiva några tunna ringar rödlök som du lägger över burratan. Ringla en massa olivolja över allting och toppa med lite ruccula, done and done, enkelt va?!",
  },
  {
    id: "6",
    image: pho,
    title: "Min version på Pho",
    ingredients: [
      "2 st Pak Choi",
      "1 Röd chili",
      "2-3 Vitlöksklyftor",
      "1 kruka koriande",
      "1 burk Kimchi",
      "1 scharlottenlök",
      "1 lime",
      "2cm Färsk ingefära",
      "1msk Fisksås",
      "1msk fond (svamp eller kyckling)",
      "50 g svamp, champinjon eller shitake",
      "500g risnudlar",
      "1L vatten",
      "2 Mjukkokta ägg",
      "salt efter smak",
    ],
    description:
      "Detta är min version av den vietnamesiska rätten PHO, denna är helt vegansk men vill man ha med kött så rekkomenderar jag tunt skivat nöt. Börja med att skölja pak choi och dela på mitten eller i 4 delar, hacka charlottenlök, vitlök ocj koriander. Skala och riv ingefäran. Skär chilin i skivor så du får fina runda skivor. Ta en vid kastrull och ringla i lite olja, fräs sedan scharlottenlök, vitlök, ingefäran och hälften av chilin lägg ner pak choi bitarna, när allt har blivit mjukt och fint häller du på vatten, fond och fisksås. låt koka lika länge som det tar dig att skiva all svamp tunt. Här är det dags att smaka av och salta efter behov, lägg sedan i nudlarna och koka i soppan så länge som det står på paketet. när nudlarna är klara är det dags att lägga upp soppan i djupa tallrikar, dekorera sedan med koriander, resten av chilin, Kimshi, svampen och äggen pressa en halv lime över varje tallrik och NJUT!",
  },
  {
    id: "7",
    image: tartar,
    title: "Biff tartar",
    ingredients: [
      "400g Innanlår av nöt",
      "4msk Kapris",
      "Dijon senap",
      "1 rödbeta",
      "1 scharlottenlök",
      "2 äggulor",
      "",
      "",
    ],
    description:
      "Biff tartar eller också kallad råbiff är både gott och enkelt att göra själv... specielt om man har en köttkvarn. Det går naturligtvis utmärkt utan också! Börja med att koka rödbetan i saltat vatten i 15-20 min, under tiden kan du göra köttet, med köttkvarn kör du igenom köttet en gång genom de största hålen, utan köttkvarn skär du köttet i så små bitar du bara kan. lägg in köttet i kylen igen så fort du är klar. När rödbetan har kokat färdigt tar du kastrullen från spisen och häller av vattnet, spola sedan rödbetan i kallt vatten, när betan svalnat borde det gå lätt att bara dra av skalet. hacka betan fint och lägg åt sidan. Hacka charlottenlöken fint. ta ut köttet och lägg upp på 2 tallrikar och forma efter önskemål, kanske ett hjärta om du skall bjuda din käresta på något romantiskt? strö sedan över cscharlottenlök, kapris, färskmald peppar och tärnade rödbetor lägg en äggula i mitten, servera och ät på en gång ",
  },
  {
    id: "8",
    image: codPotatoes,
    title: "Torsk med gudomlig sås",
    ingredients: [
      "2 torsk Filéer",
      "2-4 potatisar per person",
      "Till såsen:",
      "1 charlottenlök",
      "1 vitlöksklyfta",
      "2dl räkfond eller -",
      "1 msk fiskfond utspätt i 2dl vatten",
      "3-4dl vitt vin",
      "3dl matlagningsgrädde",
      "salt och vitpeppar",
      "Smör",
    ],
    description:
      "Fisk är något vi äter väldigt ofta här hemma och denna såsen vill man nästan dricka ur ett glas för att den är så fantastiskt god! Ett väldigt hett tips är att när det äts räkor därhemma, frys in skalen för att göra fond på, alternativt gör fond direkt och frys in, det ger verkligen denna såsen det där lilla extra! \n Börja med såsen, hacka charlottenlök och vitlök fint stek tillsammans med en ordentlig klick smör använd gärna en sauteuse (såspanna), smaka nu på vinet, det är ett måste när man lagar mat med vin i! När löken har blivit mjuk häller du i vinet och låter sedan alkoholen koka bort. häll sedan i räkfonden (alternativt fiskfond utspätt i vatten) låt nu vätskan redusera till hälften. Medan såsen reduserar kan du förbereda potatisen, jag rekommenderar verkligen färskpotatis till detta, tvätta då bara potatisen och koka med skalet på, är det inte säsong för färskpotatis går annan fast potatis jättebra att använda också! Skala då potatisen och lägg i kallt vatten tills det är dags att koka. När såsen är reducerad häller du i matlagningsgrädden och låter sedan såsen stå och puttra tills resten är färdigt. Ta nu och koka potatisen i 10-20 minuter beroende på storlek och potatis, när potatisen börjat koka är det dags att börja steka fisken, se till att fisken är tinad innan du börjar, släng i massa smör i en stekpanna och sedan torsken när smöret börjat bubbla krydda fisken direkt i pannan med salt och vitpeppar, ös nögra gånger med smöret och stek i 4-5 minuter på varje sida. När potatisen kokat plart häll av vattnet och låt stå och dra någon minut med lite hushållspapper under locket. Nu är det dags att servera, tägg upp torsk och potatis på tallriken, häll gärna på lite av smöret från stekningen på både fisk och potatis, dränk sedan i sås och servera, bättre än så blir det inte!",
  },
  {
    id: "9",
    image: beetGoatSallad,
    title: "Rödbetor och getost",
    ingredients: [
      "6 Medelstora rödbetor",
      "2 Päron",
      "Getost i den mängd du vill ha",
      "Färsk rosmarin",
      "1 Romansallad",
      "",
      "",
      "",
      "",
    ],
    description:
      "En rödbetssallad med getost är ju svårslaget tycker jag. Detta gör vi ganska ofta hemma hos oss i olika varianter. Denna salladen går väldigt snabbt att slänga ihop om du köper färdigkokta rödbetor, godast tycker jag dock att det blir om man köper råa och kokar dem själv, det blir dessutom en trevlig sallad där getosten mjuknar fint över de ljumna rödbetorna. Börja med att koka rödbetorna i lätt saltat vatten i ca.20 min beroende på storlek på betorna, känn efter med sticka. jag brukar skala och dela betorna innan jag kokar dom för att korta ner koktiden. Medan betorna kokar kan du dela och skölja romansalladen samt dela päronen. När betorna har kokat färdigt kan du skölja dom snabbt i kallt vatten. Lägg upp salladen i tallrikar och lägg i päron och betorna, smula getosten över de varma betorna och strö över färsk rosmarin, servera gärna med färskt bröd och lite olivolja att doppa brödet i!",
  },
  {
    id: "10",
    image: dumplings,
    title: "Dumplings",
    ingredients: ["", ""],
    description: "",
  },
  {
    id: "11",
    image: taco,
    title: "Min egen taco-fusion",
    ingredients: [
      "500g Qournbitar",
      "2st Avocado",
      "1 Mango",
      "1 Kruka koriander",
      "1 lime",
      "1 Röd chili",
      "1 Burk majs",
      "1 Spetspaprika",
      "200g rödkål",
      "fetaost",
      "Tortillabröd",
      "salsa verde",
      "kryddor till stekning:",
      "vitlökskrydda",
      "lökpulver",
      "paprikapulver",
      "chillipulver (mild)",
      "spiskummin",
      "salt",
      "peppar",
      "",
    ],
    description:
      "Kan man verkligenfå nog av tacos? Inte jag! Denna toco-fusion gjordes ganska nyligen här hemma och var väldigt uppskattat när en är sugen på texmex men vill göra något lite ovanligare. Börja med att strimla rödkålen tunt och lägg i en skål, pressa i halva limen och rör runt. Sen skall vi göra en salsa på mangon och avokadon, kär båda i kuber och lägg i en skål, skär chillin i pyttesmå tärningar och pressa i resten av limen och hacka ner en massa koriander, rör runt och låt stå svalt tills det är dags för servering. Nu skall Qournen stekas, häll rikligt med neutral olja i en stekpanna och låt detta bli varmt, släng i Qournbitarna och majsen och stek på medelhög värme, släng på alla kryddor det är från person till person hur kryddigt man vill ha det, tänk på att spiskummin är det som gör att det smakar 'tacos' jaag bruar ta ungefär lika mycket av alla kryddor förutom salt och peppar. När Qournbitarna har fått fin färg kan du lägga upp detta i ett serveringsfat, ställ fram allting på bordet och toppa dina tacos med salsa verde, fetaost och koriander, mumsa och njut!",
  },
  {
    id: "12",
    image: scallops,
    title: "jordärtskocka-och potatispuré med pilgrimsmussla",
    ingredients: [
      "300g jordärtskocka",
      "300g potatis",
      "50g Smör",
      "1-2 dl Vispgrädde",
      "1tsk rivet citronskal",
      "6 st pilgrimsmusslor",
      "salt och peppar",
      "1 påse tryffelchips",
    ],
    description:
      "Detta är en perfekt förrätt om ni skall göra en hel meny, denna är från en nyår och kommer garanterat att göras om många gånger! Skala jordärtskocka och potatis och koka tillsammans i saltat vatten, öppna chipspåsen och häll ut i en skål så du har något att mumsa på under tiden. Värm sedan smör och grädda tillsammans, så att smöret smälter men inte puttrar. häll av vattnet från potatisen och jordärtskocka, tillsätt smör och grädde, mosa och vispa till en puré. Smaksätt med lite skal från citronen, salt och peppar. hetta upp en stekpanna på hög värme, lägg i en klick smör och sek sedan pilgrimsmusslorna någon minut på varje sida, som skall få fin färg men inte steka länge för då blir dom som gummi! lägg upp purén på en tallrik och lägg musslorna ovanpå, pressa lite citron över musslorna toppa med några chips och denna fantastiska rätt är redo att ätas!",
  },
  {
    id: "11",
    image: beetSallad,
    title: "En annan rödbetssallad",
    ingredients: ["", ""],
    description: "",
  } /*
    {
        id: "11",
        image: taco,
        title: "Min egen taco-fusion",
        ingredients: ["",""],
        description: ""
    },
    */,
];
