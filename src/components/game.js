import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { stat } from 'fs';

import {connect} from 'react-redux'
import {restart_Game, change_Feedback, aural_Update, make_Guess} from '../actions'


export class Game extends React.Component {

  // restartGame() {
  //   this.props.dispatch(restart_Game());
  // }

  //  makeGuess(guess) {
  //   guess = parseInt(guess, 10);
  //   if (isNaN(guess)) {
  //     this.props.dispatch(change_Feedback({ feedback: 'Please enter a valid number' }));
  //     return;
  //   }

  //   const difference = Math.abs(guess - this.props.correctAnswer);

  //   let feedback;
  //   if (difference >= 50) {
  //     feedback = 'You\'re Ice Cold...';
  //   } else if (difference >= 30) {
  //     feedback = 'You\'re Cold...';
  //   } else if (difference >= 10) {
  //     feedback = 'You\'re Warm.';
  //   } else if (difference >= 1) {
  //     feedback = 'You\'re Hot!';
  //   } else {
  //     feedback = 'You got it!';
  //   }

  //   this.props.dispatch(make_Guess(feedback,{
  //     guesses: [...this.props.guesses, guess]
  //     }
  //     ));

  //   // We typically wouldn't touch the DOM directly like this in React
  //   // but this is the best way to update the title of the page,
  //   // which is good for giving screen-reader users
  //   // instant information about the app.
  //   document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  // }

  // generateAuralUpdate() {
  //   const { guesses, feedback } = this.props;

  //   // If there's not exactly 1 guess, we want to
  //   // pluralize the nouns in this aural update.
  //   const pluralize = guesses.length !== 1;

  //   let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

  //   if (guesses.length > 0) {
  //     auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
  //   }


  //   this.props.dispatch(aural_Update({ auralStatus }));
  // }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
  }
}


Game.defaultProps = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 0
}

const mapStateToProps = (state) => ({
    guesses: state.guesses,
    feedback: state.feedback,
    auralStatus: state.auralStatus,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);




