import type { Pokemon, PokemonListResponse } from "./types";

const BASE_URL = "https://pokeapi.co/api/v2/";

export async function getPokemonList(limit=20, offset=0): Promise<PokemonListResponse> {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

    if (!response.ok) {throw new Error("Pokemon not found!")}
    return response.json();
}
export async function getPokemonData(name: string): Promise<Pokemon> {
    name = name.toLowerCase().replaceAll(" ", "-");
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);
    return response.json();
}

