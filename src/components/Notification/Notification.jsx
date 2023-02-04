import { Component } from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.message}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;