import React from 'react'
import PropTypes from 'prop-types';
import {FeedBackMain,FeedBackContainer,MainMessage,ButtonsDiv,Button,StatisticsContainer,StatisticsHeader,Statistics,StatisticsItem} from './Feedback.styled'
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
    render(){
        return(<FeedBackMain><FeedBackContainer>
            <MainMessage>Please leave feedback</MainMessage>
            <ButtonsDiv>
                <Button>Good</Button>
                <Button>Neutral</Button>
                <Button>Bad</Button>
            </ButtonsDiv>
            <StatisticsContainer>
                <StatisticsHeader>Statistics</StatisticsHeader>
                <Statistics>
                    <StatisticsItem>Good: {this.state.good}</StatisticsItem>
                    <StatisticsItem>Neutral: {this.state.neutral}</StatisticsItem>
                    <StatisticsItem>Bad: {this.state.bad}</StatisticsItem>
                </Statistics>
            </StatisticsContainer>
</FeedBackContainer></FeedBackMain>
            )
    }
}