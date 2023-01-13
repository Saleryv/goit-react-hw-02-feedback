import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({message}) => {
  return (
    <div>
      <h2 className={css.title}>{message}</h2>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};