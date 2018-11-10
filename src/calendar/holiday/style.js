import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.holiday';

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    holidayItemView: {
      flexDirection: 'row',
      marginVertical: 5
    },
    holidayDateText: {
      fontFamily: appStyle.textHolidayFontFamily,
      fontSize: appStyle.textHolidayFontSize,
      color: appStyle.holidayTextColor,
      width: 50,
      letterSpacing: 0.6
    },
    holidayDescText: {
      fontFamily: appStyle.textHolidayFontFamily,
      fontSize: appStyle.textHolidayFontSize,
      color: appStyle.holidayDescTextColor,
      letterSpacing: 0.6
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
