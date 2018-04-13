export const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    zIndex: 10000,
  },
  modal: {
    left: '25%',
    top: '5em',
    width: '50%',
    padding: '20px',
    marginBottom: '5em',
    position: 'fixed',
    background: '#ffffff',
    border: '1px solid #ededed',
    borderRadius: '3px',
    zIndex: 10001,
  },
  modalHeading: {
    padding: 0,
  },
  close: {
    position: 'absolute',
    top: '18px',
    right: '20px',
    padding: '4px',
    height: '1.5em',
    width: '1.5em',
    cursor: 'pointer',
    borderRadius: '99%',
    border: '1px solid #ededed',
    lineHeight: '0.8em',
    textDecoration: 'none',
    textAlign: 'center',
  },
  visible: {
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
};

export default styles;
