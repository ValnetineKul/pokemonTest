import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPokemonAbilityDetail, fetchPokemonsActions, setSearchBar } from "./redux/Actions";
import AllPokemonsPage from "./containers/pokemonPage/AllPokemonsPage";
import { getFilteredPokemons } from "./redux/selectors/pokemonFilter";
import PokemonDetailsModal from "./containers/pokemonDetailsModal/PokemonDetailsModal";
import AbilityDetails from "./containers/abilityDetails/AbilityDetails";

const App = ({ pokemons, searchBar, pokemonAbility, ...props }) => {

  useEffect(() => {
    props.fetchPokemonsActions();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [currentPokemonModal, setCurrentPokemonModal] = useState(0);
  const [currentPokemonAbilityIndex, setCurrentPokemonAbilityIndex] = useState(0);

  return (
    <div className="App">
      <div className='app-wrapper-content'>
        <Route path="/pokemons"
               render={() => <AllPokemonsPage
                 pokemons={pokemons}
                 searchBar={searchBar}
                 setSearchBar={props.setSearchBar}
                 setShowModal={setShowModal}
                 setCurrentPokemonModal={setCurrentPokemonModal}
               />}
        />
        <Route path="/ability"
               render={() =>
                 <AbilityDetails
                   pokemons={pokemons}
                   pokemonAbility={pokemonAbility}
                   currentPokemonModal={currentPokemonModal}
                   currentPokemonAbilityIndex={currentPokemonAbilityIndex}
                   fetchPokemonsActions={props.fetchPokemonsActions}
                   fetchPokemonAbilityDetail={props.fetchPokemonAbilityDetail}
                 />}
        />
        {showModal && <PokemonDetailsModal
          pokemons={pokemons}
          show={showModal}
          currentPokemonModal={currentPokemonModal}
          setShowModal={setShowModal}
          currentPokemonAbilityIndex={currentPokemonAbilityIndex}
          setCurrentPokemonAbilityIndex={setCurrentPokemonAbilityIndex}
        />}
        <Redirect to="/pokemons" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemons: getFilteredPokemons(state),
  searchBar: state.pokemonPage.searchBar,
  pokemonAbility: state.pokemonPage.pokemonAbility
});

export default withRouter(connect(mapStateToProps, {
  fetchPokemonsActions,
  setSearchBar,
  fetchPokemonAbilityDetail,
})(App));
