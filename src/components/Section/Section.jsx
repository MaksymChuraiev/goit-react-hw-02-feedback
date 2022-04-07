import { Component } from 'react';
import { StatisticSection, Title } from './Section.styled';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <StatisticSection>
        <Title>{title}</Title>
        {children}
      </StatisticSection>
    );
  }
}

// export const Section = ({ title, children }) => {
//   return (
//     <StatisticSection>
//       <Title>{title}</Title>
//       {children}
//     </StatisticSection>
//   );
// };

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};
