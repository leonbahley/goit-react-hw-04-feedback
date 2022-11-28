import PropTypes from 'prop-types';
import './Notification.css';
const Notification = ({ message }) => {
  return <p className="Message">{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
