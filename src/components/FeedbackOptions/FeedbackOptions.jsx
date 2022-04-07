import React from 'react';
import {
  FeedbackOptionsButton,
  FeedbackOptionsList,
  FeedbackOptionsItem,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

// export class FeedbackOptions extends Component {
//   render() {
//     const options = this.props;
//     return (
//       <FeedbackOptionsList>
//         {options.map(item => (
//           <FeedbackOptionsItem key={item}>
//             <FeedbackOptionsButton>{item}</FeedbackOptionsButton>
//           </FeedbackOptionsItem>
//         ))}
//       </FeedbackOptionsList>
//     );
//   }
// }

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map(item => (
        <FeedbackOptionsItem key={item}>
          <FeedbackOptionsButton onClick={onLeaveFeedback}>
            {item}
          </FeedbackOptionsButton>
        </FeedbackOptionsItem>
      ))}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
