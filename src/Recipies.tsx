import fishSoup from './img/fishSoup.jpg';
import peanutSallad from './img/peanutSallad.jpg';

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
        ingredients: ["200g lax", "200g torsk", "1 burk krossade tomater", "2 Vitlöks klyftor", "Creme fraise"],
        description: "börja med att steka lök och vitlök i en kastrull, när löken blivit bjuk och fått färg häller du i en burk med krossade tomater och sedan lika mycket vatten"
    },
    {
        id: "2",
        image: peanutSallad,
        title: "Fusion sallad",
        ingredients: ["50g Jordnötter","50g Mandlar","2 Salladslökar", "6 kronärtskockor", "1 msk vitlöksolja", "1 msk Olivolja", "fint rivet skal och juice från 1 citron", "salt och peppar"],
        description: "Börja med att blocka bort bladen från kronärstskockan tills det bara är hjärtat kvar, \nskär upp hjärtat i bitar och lägg i vatten med citron. \nVärm upp oljan i en kastrull med tjock botten, när oljan är 180 grader är det dags att fritera kronärstkockan. Torka av bitarna av kronärtsskocka innan du lägger i dem i den heta oljan. Fritera tills de har fått fin färg och låt sedan rinna av. Hacka jordnötter och mandlar grovt, skicva saladslöken fint lägg nu alltassamns i en bunke och häll över vitlöksolja, lite citron, sat och peppar. Rör samman allt och lägg upp på ett fat, ät och njut!"
    },/*
    {
        id: "3",
        image: 
        title: "Medelhavspaj",
        ingredients: ["",""],
        description: "börja med pajdegen, blanda ihop mjöl, smör, vatten och salt till en jämn deg, tryck ut i en pajform och nagga botten med en gaffel"
    },
    {
        id: "4",
        image: peanutSallad,
        title: "Fusion sallad",
        ingredients: ["",""],
        description: ""
    },
    {
        id: "3",
        image: 
        title: "Medelhavspaj",
        ingredients: ["",""],
        description: ""
    },
    {
        id: "4",
        image: peanutSallad,
        title: "Fusion sallad",
        ingredients: ["",""],
        description: ""
    },
    {
        id: "3",
        image: 
        title: "Medelhavspaj",
        ingredients: ["",""],
        description: ""
    },
    {
        id: "4",
        image: peanutSallad,
        title: "Fusion sallad",
        ingredients: ["",""],
        description: ""
    },*/
];