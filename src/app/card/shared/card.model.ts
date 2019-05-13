

export interface CardDeck {
    name: string;
    types: string[];
}

export interface Card {
    cardId: string;
    cardSet: string;
    dbfId: string;
    name: string;
    type: string;
    health: number;
    text: string;
    artist: string;
    playerClass: string;
    img: string;
    imgGold: string;
    locale: string;
    favorite: boolean;
}
