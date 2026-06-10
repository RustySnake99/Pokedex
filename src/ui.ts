import type { Pokemon } from "./types";

const typeColors: Record<string, string> = {
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    bug: "#A6B91A",
    dark: "#705746",
    fairy: "#D685AD",
    fighting: "#C22E28",
    flying: "#A98FF3",
    ghost: "#735797",
    ground: "#E2BF65",
    normal: "#A8A77A",
    poison: "#A33EA1",
    rock: "#B6A136",
    steel: "#B7B7CE"
}

export function createPokemonCard(pokemon: Pokemon): HTMLDivElement {
    const card = document.createElement("div");
    card.className = "pokemon-card";
    card.style.color = "black"
    card.style.padding = "5px"
    card.style.margin = "5px"

    const primaryType = pokemon.types[0]?.type.name ?? "normal"
    card.style.backgroundColor = typeColors[primaryType] || "#ddd";

    const formattedName = pokemon.name.replaceAll("-", " ").replace(/\b\w/g, letter => letter.toUpperCase())
    const abilities = pokemon.abilities.map(a => a.ability.name.replaceAll("-", " ").replace(/\b\w/g, l => l.toUpperCase())).join(", ")

    const types = pokemon.types.map(t => t.type.name.replace(/\b\w/g, l => l.toUpperCase())).join(", ")

    const stats = pokemon.stats.map(stat => `
        <div class="stat">
            <span>${stat.stat.name.replace(/\b\w/g, l => l.toUpperCase())} (${stat.base_stat})</span>
            <div class="stat-bar">
                <div class="stat-fill" style="width: ${Math.min(stat.base_stat, 255) / 255 * 100}%;">
                </div>
            </div>
        </div>
    `).join("")

    card.innerHTML = `
    <div class="pokemon-images">
        <img src="${pokemon.sprites.front_default}" />
        <img src="${pokemon.sprites.front_shiny}" />
    </div>

    <h2>${formattedName}</h2>

    <ul>
        <li><strong>ID:</strong> ${pokemon.id}</li>
        <li><strong>Height:</strong> ${pokemon.height}</li>
        <li><strong>Weight:</strong> ${pokemon.weight}</li>
        <li><strong>Types:</strong> ${types}</li>
        <li><strong>Abilities:</strong> ${abilities}</li>
    </ul>
    <div class="stats">
        <h3>Base Stats</h3>
        ${stats}
    </div>
    `;

    return card;
}

export function clearGrid(grid: HTMLElement): void {
    grid.innerHTML = ""
}
export function renderPokemon(grid: HTMLElement, pokemon: Pokemon): void {
    grid.appendChild(createPokemonCard(pokemon))
}
export function renderPokemonList(grid: HTMLElement, pokemonList: Pokemon[]): void {
    clearGrid(grid)
    pokemonList.forEach(p => renderPokemon(grid, p))
}