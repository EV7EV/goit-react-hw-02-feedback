import PropTypes from 'prop-types';
import { Button, FeedBackWrapper } from './Feedback.styled';

export const Feedback = ({ options, leaveFeedback }) => {
  return (
    <FeedBackWrapper>
      {options &&
        options.map(option => (
          <Button
            type="button"
            key={option}
            name={option}
            onClick={leaveFeedback}
          >
            {option}
          </Button>
        ))}
    </FeedBackWrapper>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  leaveFeedback: PropTypes.func.isRequired,
};
