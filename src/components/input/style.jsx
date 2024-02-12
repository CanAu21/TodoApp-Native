import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    color: colors.textPrimary,
    fontSize: 16,
  },
  icon: {
    fontSize: 26,
    color: colors.bgPrimary,
    marginLeft: 10,
  },
});

export default styles;
