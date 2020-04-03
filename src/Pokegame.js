import React, { Component } from 'react'
import Pokedex from './Pokedex'
import './Pokegame.css'

export default class Pokegame extends Component {
    render() {
let hand1 =[]
let hand2 = []

let pokemonList = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]
let handCreator = () => {
for (let i=0; i<4; i++) {
    hand1.push(pokemonList.splice(Math.floor(Math.random()*pokemonList.length),1));
    hand1 = hand1.flat(1)
}
hand2 = [...pokemonList]
}
handCreator()

let hand1Exp = hand1.reduce((ac,cv) => ac+cv.base_experience,0)
let hand2Exp = hand2.reduce((ac, cv) => ac + cv.base_experience, 0)
console.log(hand1Exp)


        return (
            <div className="pokegame">
            <h2>Pokegame</h2>
                <h3 className={(hand1Exp>hand2Exp)? "winner" : "loser"}>{(hand1Exp>hand2Exp)? ("Winning Hand!!") : ("Losing Hand!!") }</h3>
                <h4>Total Experience: {hand1Exp}</h4>
                <Pokedex pokemonList={hand1}/>
                <h3 className={(hand2Exp>hand1Exp)? "winner" : "loser"}>{(hand2Exp>hand1Exp)? ("Winning Hand!!") : ("Losing Hand!!") }</h3>
                <h4>Total Experience: {hand2Exp}</h4>
                <Pokedex pokemonList={hand2}/>
            </div>
        )
    }
}
