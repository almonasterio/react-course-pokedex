import React, {Component} from 'react'
import './Pokemon.css'


export default class Pokemon extends Component {
//     constructor() {
//         super();
//         // const {id, name, type, base_experience} = this.props.data
// this.data = this.props.data
//     }


render() {
  let {id, name, type, exp} = this.props

const imgId = () => {
   (id<999) && (id=`00${id}`.slice(-3))
 
}
imgId()
    return(
      
        <div className='pokemon'>
            <h4 className='poke-name'>{name}</h4>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}></img>
            <p>Type: {type}</p>
            <p>EXP: {exp}</p>
        </div>

    )
    }

}
