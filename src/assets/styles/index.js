import {wp} from '_elements';

const CommonStyles = {
  defaultFlex: {
    flex: 1,
  },
  icon: {
    height: 50,
    width: 50,
  },
  addPhoto: {
    height: 85,
    width: wp(82),
  },
  modalStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 24,
    marginHorizontal: wp(2),
  },
  modalEmergencyStyle: {
    borderRadius: 24,
    marginHorizontal: wp(4),
    // position: 'absolute',
  },
  modalWithoutMarginStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 24,
    margin: 0,
  },
  inputWithBorder: {
    borderColor: '#A5A4A4',
    borderWidth: 1,
  },
  congratulationModal: {
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 24,
    margin: 0,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  tourImage: {
    width: wp(100),
    height: 208,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: wp(4),
  },
};
export default CommonStyles;
