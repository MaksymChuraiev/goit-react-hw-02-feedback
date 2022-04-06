import {
  StatisticsInfo,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsInfoText,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsInfo>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        <StatisticsItem>
          <StatisticsInfoText>{`Good:${good}`}</StatisticsInfoText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsInfoText>{`Neutral:${neutral}`}</StatisticsInfoText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsInfoText>{`Bad:${bad}`}</StatisticsInfoText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsInfoText>{`Total:${total}`}</StatisticsInfoText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsInfoText>{`Positive feedback:${positivePercentage}%`}</StatisticsInfoText>
        </StatisticsItem>
      </StatisticsList>
    </StatisticsInfo>
  );
};
