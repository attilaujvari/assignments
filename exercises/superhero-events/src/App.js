import React, { Component } from 'react'
import SuperHero from './SuperHero.js'
import data from './superHeroes.json'
import './style.css'

class App extends Component {
    constructor(){
        super()
    }

    sayCatchPhrase = (catchPhrase) => {
        alert(catchPhrase)
    }

    render(){
        
        const mappedSuperHeroes = data.superHeroes
                    .map((hero, i) => 
                        <SuperHero 
                            key={i} 
                            sayCatchPhrase={this.sayCatchPhrase}
                            name={hero.name} 
                            imgUrl={hero.imgUrl} 
                            catchPhrase={hero.catchPhrase}/>)

        return (
            <div>
                {mappedSuperHeroes}
            </div>
        )
    }
}

export default App