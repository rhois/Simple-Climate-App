/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

export class FlashMessageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }
  handleRemove() {
    this.setState({ hide: true });
  }
  renderAlert() {
    const {
      type,
      message,
    } = this.props;
    let msg;
    let styleMsg;
    let status;
    switch (type) {
      case 'success':
        if (message) {
          msg = message;
        } else {
          msg = 'Your changes have been saved..';
        }
        styleMsg = Object.assign({}, styles.alertStyle, styles.success);
        status = 'Success!';
        break;
      case 'failed':
        if (message) {
          msg = message;
        } else {
          msg = 'Change a few things up and try submitting again';
        }
        styleMsg = Object.assign({}, styles.alertStyle, styles.failed);
        status = 'Failed!';
        break;
      default:
        if (message) {
          msg = message;
        } else {
          msg = 'Info! Please read the data carefully.';
        }
        styleMsg = Object.assign({}, styles.alertStyle, styles.info);
        status = 'Info!';
        break;
    }

    return (
      <div style={styleMsg} id="alert-failed">
        <a
          onClick={() => this.handleRemove()}
          style={styles.alertSpan}
          data-dismiss="alert"
          aria-label="close"
          title="close"
          role="button"
          tabIndex="0"
        >×</a>
        <span style={{ position: 'relative' }}>
          <strong style={styles.styleStatus}>
            {status}
          </strong>
          {msg}
        </span>
      </div>
    );
  }
  render() {
    if (this.state.hide) {
      return null;
    }
    return (
      <div>
        {this.renderAlert()}
      </div>
    );
  }
}

FlashMessageComponent.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

FlashMessageComponent.defaultProps = {
  type: 'info',
  message: '',
};

export default FlashMessageComponent;
