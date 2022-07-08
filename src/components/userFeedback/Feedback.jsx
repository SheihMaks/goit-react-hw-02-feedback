import React from 'react'
import PropTypes from 'prop-types';
import {Controls} from '../Controls/Controls'
import {FeedBackMain,FeedBackContainer,MainMessage,StatisticsContainer,StatisticsHeader,StatisticsList,StatisticsItem} from './Feedback.styled'

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
return (this.state.good/this.countTotalFeedback())*100
    }

    render(){
        return(<FeedBackMain><FeedBackContainer>
            <MainMessage>Please leave feedback</MainMessage>
            <Controls 
            onBtnGood={this.onBtnGood}
            onBtnNeutral={this.onBtbNeutral}
            onBtnBad={this.onBtnBad}/>
            <StatisticsContainer>
                <StatisticsHeader>Statistics</StatisticsHeader>
                <StatisticsList>
                    <StatisticsItem>Good: {this.state.good}</StatisticsItem>
                    <StatisticsItem>Neutral: {this.state.neutral}</StatisticsItem>
                    <StatisticsItem>Bad: {this.state.bad}</StatisticsItem>
                    <StatisticsItem>Total: {this.countTotalFeedback()}</StatisticsItem>
                    <StatisticsItem>Positive feedback: {this.countPositiveFeedbackPercentage()}%</StatisticsItem>
                </StatisticsList>
            </StatisticsContainer>
</FeedBackContainer></FeedBackMain>
            )
    }
}