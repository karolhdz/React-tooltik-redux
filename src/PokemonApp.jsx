import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "./store/slices/pokemon/pokemonSlice";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {isLoading, page, pokemons} = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch( getPokemons() );
  }, [])

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />

        <span>Loading: { isLoading ?'True': 'False' }</span>
        <ul>
            {
              pokemons.map( (poke) => (
                  <li key={poke.name}>
                      <span>{poke.name}</span>
                  </li>
              )

              )  
            }
        </ul>

        <button
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
    </>
  )
}
