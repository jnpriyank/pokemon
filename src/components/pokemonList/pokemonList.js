import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as listActions from "../../actions/pokemons";
import PokemonGrid from "../grid/grid";
import getColumnDefinitions from "./columnDefinitions";
import { sortByName } from "./queries";

const PokemonList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.data.pokemon;
  });
  useEffect(() => {
    dispatch(listActions.getPokemons());
  }, [dispatch]);

  return (
    <div className="pokemon">
      <h1>Pokemon List</h1>
      <PokemonGrid
        data={sortByName(data)}
        columnDefinitions={getColumnDefinitions()}
      ></PokemonGrid>
    </div>
  );
};

export default PokemonList;
