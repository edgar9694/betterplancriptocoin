export interface Coin {
    id: string;
    name: string;
    symbol: string;
}

export interface CoinDetail {
    categories: Array<string>;
    coingecko_rank: number;
    coingecko_score: number;
    community_data: Record<string, number>;
    community_score: number;
    country_origin: string;
    description: Record<string, Array<string>>;
    id: string;
    image: Record<string, Array<string>>;
    last_updated: string;
    links: Record<string, Array<string>>;
    localization: Record<string, number>;
    market_data: {
        current_price: Record<string, number>;
        market_cap: Record<string, number>;
        fully_diluted_valuation: Record<string, number>;
        high_24h: Record<string, number>;
        low_24h: Record<string, number>;
        circulating_supply: number;
        max_supply: number;
    };
    market_cap_rank: number;
    name: string;
    platforms: Record<string, string>[];
    symbol: string;
}

