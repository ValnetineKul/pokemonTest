import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as classnames from 'classnames';
import Card from '../../components/card/Card';
import styles from './styles.module.scss';
import Icon from '../../components/icon/Icon';

const AbilityDetails = ({
  pokemons,
  pokemonAbility,
  currentPokemonModal,
  currentPokemonAbilityIndex,
  fetchPokemonAbilityDetail,
}) => {
  useEffect(() => fetchPokemonAbilityDetail(pokemons[currentPokemonModal]
    .abilities[currentPokemonAbilityIndex].ability.name), []);
  return (
    <div className={styles.abilityDetail}>
      {pokemonAbility && (
      <Card
        className={classnames(styles.card, styles.cardMain)}
        title={
          pokemonAbility.name[0].toUpperCase() +
          pokemonAbility.name.slice(1)
        }
      >
        <div>{pokemonAbility.effect_entries[0].effect}</div>
      </Card>
      )}
      <NavLink to="/pokemons"><Icon icon="arrow-left" /></NavLink>
    </div>
  );
};

export default AbilityDetails;
