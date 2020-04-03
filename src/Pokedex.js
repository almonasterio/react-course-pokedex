import React, { Component } from 'react'
import './Pokedex.css'
import Pokemon from './Pokemon'
// const pokemonList =require('./pokemonList')


export default class Pokedex extends Component {
    render() {
        let {pokemonList} = this.props
console.log(pokemonList)
        return (
   
            <div className='Pokedex'>
              
                {pokemonList.map(pokemon => <Pokemon
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                exp={pokemon.base_experience}
                ></Pokemon>)}
            </div>
     
        )
    }
}
