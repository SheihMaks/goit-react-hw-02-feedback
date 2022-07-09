import React from 'react'
import PropTypes from 'prop-types';
import {Controls} from '../Controls/FeedbackOptions';
import {Statistics} from '../feedbackStatistics/statistics';
import {FeedBackMain} from './Feedback.styled';
import { Section } from 'components/sectionDoc/Section';

export class FeedbackComponent extends React.Component{
    
    state={
    good: 0,
    neutral: 0,
    bad: 0
    }
    
    onBtnClick=(ev)=>{
        const {textContent:key}= ev.target
this.setState((prevState)=>({ [key] : prevState[key]+=1}))
    }

    countTotalFeedback=()=>{
        const {good,neutral,bad}=this.state;
     return good + neutral + bad
    }

    countPositiveFeedbackPercentage=()=>{
return Math.round((this.state.good/this.countTotalFeedback())*100)
    }

    render(){
        const{good,neutral,bad} = this.state;
        return(<FeedBackMain><Section title='Please leave feedback'>
            <Controls 
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onBtnClick}
            />
            </Section>
            <Section>
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/></Section>
</FeedBackMain>
            )
    }
}