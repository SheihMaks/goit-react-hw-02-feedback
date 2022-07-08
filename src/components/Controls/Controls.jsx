import {FeedbackOptions,Button} from './Controls.styled'


export const Controls=({onBtnGood,onBtnNeutral,onBtnBad})=>{
return(<FeedbackOptions>
                <Button type='button' onClick={onBtnGood}>Good</Button>
                <Button type='button' onClick={onBtnNeutral}>Neutral</Button>
                <Button type='button' onClick={onBtnBad}>Bad</Button>
            </FeedbackOptions>)
}