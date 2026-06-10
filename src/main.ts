import './style.css'
import { getPokemonList, getPokemonData } from './api'
import { renderPokemon, renderPokemonList, clearGrid } from './ui'

const grid = document.querySelector("#pokemon-grid") as HTMLElement
const search = document.querySelector("#search") as HTMLInputElement
const searchBtn = document.querySelector("#search-button") as HTMLButtonElement


async function loadPokemon() {
	const list = await getPokemonList(20);
  	const pokemonData = await Promise.all(list.results.map(p => getPokemonData(p.name)))
  	renderPokemonList(grid, pokemonData)
}

search.addEventListener("keydown", e => {
	if (e.key === "Enter") {searchBtn.click()}
})

searchBtn.addEventListener("click", async () => {
	const value = search.value.trim()
	if (!value) {
		await loadPokemon();
		return;
	}
	try {
		const pokemon = await getPokemonData(value);
		clearGrid(grid);
		renderPokemon(grid, pokemon);
		} catch {
			clearGrid(grid);
		}
	}
);

loadPokemon();