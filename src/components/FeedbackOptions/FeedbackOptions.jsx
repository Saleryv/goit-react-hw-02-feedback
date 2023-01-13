import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
      <div className={css.feedback}>       
        {options.map(option => ( 
        <div key={option} className={css.counter}>
          <button
            name={option}
            className={css.btn}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </div>
))}
      </div>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};