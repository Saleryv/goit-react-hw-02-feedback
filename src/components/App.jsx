import  { Component }  from 'react';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVote = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return ((good / (good + neutral + bad)) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    // const percentage = Number(this.countPositiveFeedbackPercentage().toFixed(0));
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleVote}
          />
          {this.countTotalFeedback() < 1 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good = {good}
              neutral = {neutral}
              bad = {bad}
              total = {total}
              positivePercentage = {percentage}
            />
          )}
        </Section>
      </>
    );
  }
}