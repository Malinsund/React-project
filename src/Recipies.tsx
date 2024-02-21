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
        ingredients: ["200g Jordnötter","2 Salladslökar"],
        description: "börja med pajdegen, blanda ihop mjöl, smör, vatten och salt till en jämn deg, tryck ut i en pajform och nagga botten med en gaffel"
    },/*
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