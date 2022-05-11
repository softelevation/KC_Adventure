import {wp} from '_elements';

const CommonStyles = {
  defaultFlex: {
    flex: 1,
  },
  icon: {height: 50, width: 50},
  modalStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 24,
    marginHorizontal: wp(2),
  },
  modalWithoutMarginStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 24,
    margin: 0,
  },
  inputWithBorder: {borderColor: '#A5A4A4', borderWidth: 1},
  dot: {height: 10, width: 10, borderRadius: 10},
};
export default CommonStyles;
