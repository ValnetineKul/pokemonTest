import React from 'react';
import Card from '../../components/card/Card';
import styles from './styles.module.scss';
import Spinner from '../../components/spinner/Spinner';
import Input from '../../components/input/input';
// eslint-disable-next-line import/no-unresolved
import pokemonLogo from '../../assets/logo/International_Pokémon_logo.svg';

const AllPokemonsPage = ({
  pokemons,
  searchBar,
  setSearchBar,
  setShowModal,
  setCurrentPokemonModal,
}) => {
  const handleClick = (index) => {
    setCurrentPokemonModal(index);
    setShowModal(true);
  };

  const pokemonsCards = pokemons.map((pokemon, index) => (
    <div
      key={pokemon.name}
      onClick={() => handleClick(index)}
    >
      <Card
        title={(
          <h2
            className={styles.title}
          >{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </h2>
)}
        className={styles.card}
      >
        {pokemon.sprites.front_default
          ? <img src={pokemon.sprites.front_default} alt="loading.." />
          : <Spinner />}
      </Card>
    </div>
  ));

  const handleChange = (e) => {
    setSearchBar(e.target.value);
  };

  return (
    <div className={styles.containerMain}>
      <img
        className={pokemonLogo}
        src={pokemonLogo}
        alt=""
      />
      <Input
        name="search"
        type="search"
        placeholder="find pokemons"
        onChange={handleChange}
        value={searchBar}
      />
      <div className={styles.containerCard}>
        {pokemonsCards}
      </div>
    </div>
  );
};

export default AllPokemonsPage;
