import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import Modal from '../../components/modal/Modal';
import Divider from '../../components/divider/Divider';

const PokemonDetailsModal = ({
  pokemons,
  show,
  currentPokemonModal,
  setShowModal,
  setCurrentPokemonAbilityIndex,
}) => (
  <Modal
    show={show}
  >
    <div className={styles.pokemonDetailsContainer}>
      <h3>
        {
          pokemons[currentPokemonModal].name[0].toUpperCase() +
          pokemons[currentPokemonModal].name.slice(1)
        }
      </h3>
      <img src={pokemons[currentPokemonModal].sprites.front_default} alt="" />
      <div>{`Height: ${pokemons[currentPokemonModal].height}`}</div>
      <div>{`Weight: ${pokemons[currentPokemonModal].weight}`}</div>
      <div>{`Experience: ${pokemons[currentPokemonModal].base_experience}`}</div>
      <Divider />
      <div>Abilities:</div>
      <ul>
        {pokemons[currentPokemonModal].abilities.map((ability, index) => (
          <div key={ability.ability.name} onClick={() => setCurrentPokemonAbilityIndex(index)}>
            <NavLink
              onClick={() => setShowModal(false)}
              to="/ability"
            >
              <li>{ability.ability.name}</li>
            </NavLink>
          </div>
        ))}
      </ul>
      <button type="button" onClick={() => setShowModal(false)}>x</button>
    </div>
  </Modal>
);

export default PokemonDetailsModal;
