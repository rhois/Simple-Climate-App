import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { styles } from './styles';

export class Modal extends Component {
  closeModal() {
    this.props.close();
  }
  render() {
    const {
      title,
      visible,
      children,
      content,
      modalStyle,
      closeStyle,
    } = this.props;

    const state = visible ? 'visible' : 'hidden';

    return (
      <div style={styles[state]}>
        <div style={[styles.modal, modalStyle]}>
          <div style={styles.modalHeading}>
            { (React.isValidElement(title)) ? title : <h1>{title}</h1> }
            <a
              style={[styles.close, closeStyle]}
              role="button"
              tabIndex="0"
              onClick={() => { this.closeModal(); }}
            >
              &times;
            </a>
          </div>
          { content }
          { children }
        </div>
        <div
          style={styles.overlay}
          role="button"
          tabIndex="-9999"
          onClick={() => { this.closeModal(); }}
        />
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  children: PropTypes.any,
  content: PropTypes.any,
  close: PropTypes.func.isRequired,
  modalStyle: PropTypes.object,
  closeStyle: PropTypes.object,
};

Modal.defaultProps = {
  title: '',
  visible: false,
  children: '',
  content: '',
  modalStyle: {},
  closeStyle: {},
};

Modal = Radium(Modal);  // eslint-disable-line
export default Modal;
