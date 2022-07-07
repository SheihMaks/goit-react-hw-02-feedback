import React from 'react'
import PropTypes from 'prop-types';
import {FeedBackMain,FeedBackContainer,MainMessage,FeedbackOptions,Button,StatisticsContainer,StatisticsHeader,Statistics,StatisticsItem} from './Feedback.styled'
export class FeedbackComponent extends React.Component{
    // static defaultProps = {
    //     igood: 2,
    // ineutral: 2,
    // ibad: 2
    //   };
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

    OnBtnBad=()=>{
        this.setState((prevState)=>{
            return {bad:prevState.bad+=1}
        })
    }

    countTotalFeedback=()=>{
     return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage=()=>{
return (this.state.good/this.countTotalFeedback())*100
    }

    render(){
        return(<FeedBackMain><FeedBackContainer>
            <MainMessage>Please leave feedback</MainMessage>
            <FeedbackOptions>
                <Button type='button' onClick={this.onBtnGood}>Good</Button>
                <Button type='button' onClick={this.onBtbNeutral}>Neutral</Button>
                <Button type='button' onClick={this.OnBtnBad}>Bad</Button>
            </FeedbackOptions>
            <StatisticsContainer>
                <StatisticsHeader>Statistics</StatisticsHeader>
                <Statistics>
                    <StatisticsItem>Good: {this.state.good}</StatisticsItem>
                    <StatisticsItem>Neutral: {this.state.neutral}</StatisticsItem>
                    <StatisticsItem>Bad: {this.state.bad}</StatisticsItem>
                    <StatisticsItem>Total: {this.countTotalFeedback()}</StatisticsItem>
                    <StatisticsItem>Positive feedback: {this.countPositiveFeedbackPercentage()}%</StatisticsItem>
                </Statistics>
            </StatisticsContainer>
</FeedBackContainer></FeedBackMain>
            )
    }
}