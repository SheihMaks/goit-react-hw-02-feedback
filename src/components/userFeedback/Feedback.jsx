import React from 'react'
import PropTypes from 'prop-types';
import {FeedBackMain,FeedBackContainer,ButtonsDiv,Button} from './Feedback.styled'
export class FeedbackComponent extends React.Component{
    state={
    ngood: 0,
    neutral: 0,
    bad: 0
    }
    render(){
        return(<FeedBackMain><FeedBackContainer>
            <h1>Please leave feedback</h1>
            <ButtonsDiv>
                <Button>Good</<Button>
                <<Button>Neutral</<Button>
                <<Button>Bad</<Button>
            </ButtonsDiv>

            </FeedBackContainer></FeedBackMain>)
    }
}