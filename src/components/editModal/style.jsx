import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '80%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  closeButtonText: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertical: 6,
    paddingHorizontal: 30,
    color: 'black',
  },
  closeButton: {color: colors.textPrimary},
  confirmButton: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertical: 6,
    paddingHorizontal: 30,
    backgroundColor: colors.textPrimary,
  },
  confirmButtonText: {color: colors.white},
  validationText: {
    color: colors.danger,
    textAlign: 'center',
  },
});

export default styles;
