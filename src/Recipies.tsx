import fishSoup from './img/fishSoup.jpg';
import peanutSallad from './img/peanutSallad.jpg';

export interface Recipie {
    id: string;
    image: string;
    title: string;
    
}
export const mockedRecipies: Recipie [] = [{

        id: "1",
        image: fishSoup,
        title: "Het fisksoppa"
    },
    {
        id: "2",
        image: peanutSallad,
        title: "Fusion sallad"
    },
];