import {StatisticsContainer,StatisticsHeader,StatisticsList,StatisticsItem} from './statistics.styled';

export const Statistics=({good,neutral,bad,total,positivePercentage})=>{
    return (<StatisticsContainer>
        <StatisticsHeader>Statistics</StatisticsHeader>
        <StatisticsList>
            <StatisticsItem>Good: {good}</StatisticsItem>
            <StatisticsItem>Neutral: {neutral}</StatisticsItem>
            <StatisticsItem>Bad: {bad}</StatisticsItem>
            <StatisticsItem>Total: {total}</StatisticsItem>
            <StatisticsItem>Positive feedback: {positivePercentage}%</StatisticsItem>
        </StatisticsList>
    </StatisticsContainer>)
}