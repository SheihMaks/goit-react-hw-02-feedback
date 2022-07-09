import {FeedbackOptions,Button} from './FeedbackOptions.styled'


export const Controls=({options,onLeaveFeedback})=>{
return(<FeedbackOptions>{options.map(el=>
                <Button type='button' onClick={onLeaveFeedback} key={el}>{el}</Button>              
)}</FeedbackOptions>)
}