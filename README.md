# Pokédex

A modern Pokédex web application built with **TypeScript**, **Vite**, and the **PokeAPI**.

Browse Pokémon, search by name, view detailed information, and explore stats through a clean and responsive interface.

---

## Features

* Search Pokémon by name
* View Pokémon images and IDs
* Display Pokémon types
* Show abilities
* Display height and weight
* Visualize base stats with progress bars
* Fast loading using parallel API requests
* Built with TypeScript for type safety

---

## Preview

### Pokémon Card Information

* Name
* Pokédex ID
* Sprite Image
* Types
* Abilities
* Height
* Weight
* Base Stats

---

## Technologies Used

* TypeScript
* Vite
* HTML5
* CSS3
* PokeAPI

---

## Project Structure

```text
src/
├── api.ts         # API requests
├── types.ts       # TypeScript interfaces
├── ui.ts          # Rendering and UI functions
├── main.ts        # Application logic
└── style.css      # Styling
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/RustySnake99/pokedex.git
cd pokedex
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## API

This project uses the free Pokémon API:

https://pokeapi.co/

Example endpoint:

```text
https://pokeapi.co/api/v2/pokemon/pikachu
```

---

## Example Searches

Try searching for:

```text
pikachu
charizard
bulbasaur
gengar
lucario
greninja
```

---

## TypeScript Models

The application uses strongly typed interfaces for:

* Pokémon
* Types
* Abilities
* Stats
* API Responses

Example:

```ts
export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;

    sprites: {
        front_default: string;
        front_shiny: string;
    };

    types: PokemonType[];
    abilities: PokemonAbility[];
    stats: PokemonStat[];
}
```

---

## Future Improvements

* Pagination
* Type filtering
* Favorites system
* Dark mode
* Pokémon evolution chains
* Detailed Pokémon pages
* Comparison between Pokémon
* Radar chart for stats
* Caching API responses

---

## Learning Goals

This project was created to practice:

* TypeScript fundamentals
* Async/await
* Fetch API
* DOM manipulation
* Modular application structure
* API integration
* Frontend project organization

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

* PokeAPI for providing Pokémon data
* Vite for the development tooling
* Nintendo, Game Freak, and The Pokémon Company for Pokémon

```
Built with ❤️ using TypeScript.
```
