// import { Component } from 'react';
import {
  FeedbackOptionsButton,
  FeedbackOptionsList,
  FeedbackOptionsItem,
} from './FeedbackOptions.styled';

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
