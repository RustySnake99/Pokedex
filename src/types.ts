export interface PokemonListItem {name: string; url: string;}
export interface PokemonListResponse {results: PokemonListItem[];}
export interface PokemonAbility {
    ability: {
        name: string;
    };
    is_hidden: boolean;
}
export interface PokemonType {
    type: {
        name: string;
    };
}
export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {front_default: string; front_shiny: string;};
    types: PokemonType[];
    abilities: PokemonAbility[];
    stats: PokemonStat[];
}

export interface PokemonStat {
    base_stat: number;
    stat: {name: string}
}