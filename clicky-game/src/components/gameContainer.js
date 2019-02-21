import React, { Component } from 'react';
import trump from '../trumps.json'
import TrumpCard from './TrumpCard'
import Nav from './Nav'

const style = {
    backgroundColor: 'red'
}

class GameContainer extends Component {

    state = {
        score: 0,
        trump: trump,
        clickedTrumps: [],
        unselectedTrumps: trump.map(flag=> {
            return trump.trump
        })
    };

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    handleClick = event => {
        if(this.state.score === 12){
            return false;
        }

        const checkIfClicked = this.state.clickedFlags.indexOf(event.target.id) > -1;

        if(checkIfClicked) {
            this.handleLoss(event.target.alt);
        } else {
            let index = this.state.unselectedCountries.indexOf(event.target.alt)
            this.setState({
                score: this.state.score +1,
                clickedFlags: this.state.clickedFlags.concat(event.target.id),
                unselectedCoutries: this.state.unselectedCountries.splice(index,1)
            }, () => {
                if (this.state.score === 12) {
                    this.handleWin();
            }
            })
        }
    };

    handleLoss = trump => {
        alert('You lose.\nYou already guessed ' + trump + '\nYou missed ' + this.state.unselectedCountries.join(', '))
        this.resetGame()
    }

    handleWin = () => {
        alert('You Win! You got all the flags!')
        this.resetGame()
    }

    resetGame = () => {
        this.setState({
            score: 0,
            trump: trump,
            clickedTrumps: [],
            unselectedTrumps: trump.map(flag=> {
                return flag.trump
            })
        })
    }

    render(){
        return (
            <div style={style}>
                <Nav score={this.state.score} />
                <div className='container'> 
                    {this.shuffle(this.state.flags).map(flag => {
                    return <TrumpCard id={flag.id} key={flag.id} image={flag.image} country={flag.country} handleClick={this.handleClick} />
                })}
                </div>
            </div>
        )
    }
}

export default GameContainer;
