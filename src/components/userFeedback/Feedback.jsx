import React from 'react'
import PropTypes from 'prop-types';
import {Controls} from '../Controls/FeedbackOptions';
import {Statistics} from '../feedbackStatistics/statistics';
import {FeedBackMain,FeedBackContainer,MainMessage,} from './Feedback.styled';

export class FeedbackComponent extends React.Component{
    
    state={
    good: 0,
    neutral: 0,
    bad: 0
    }
    
    onBtnGood=()=>{
this.setState((prevState)=>{ return {good: prevState.good +=1}})
    }

    onBtbNeutral=()=> {
        this.setState((prevState)=>{
            return {neutral:prevState.neutral+=1}
        })
    }

    onBtnBad=()=>{
        this.setState((prevState)=>{
            return {bad:prevState.bad+=1}
        })
    }

    countTotalFeedback=()=>{
        const {good,neutral,bad}=this.state;
     return good + neutral + bad
    }

    countPositiveFeedbackPercentage=()=>{
return Math.round((this.state.good/this.countTotalFeedback())*100)
    }

    render(){
        return(<FeedBackMain><FeedBackContainer>
            <MainMessage>Please leave feedback</MainMessage>
            <Controls 
            onBtnGood={this.onBtnGood}
            onBtnNeutral={this.onBtbNeutral}
            onBtnBad={this.onBtnBad}/>
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>
</FeedBackContainer></FeedBackMain>
            )
    }
}