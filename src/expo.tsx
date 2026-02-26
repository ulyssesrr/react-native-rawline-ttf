import { useFonts } from 'expo-font';

export const useRawlineFonts = () => {
  return useFonts({
    'Rawline-BlackItalic': require('react-native-rawline-ttf/font/Rawline-BlackItalic.ttf'),
    'Rawline-Black': require('react-native-rawline-ttf/font/Rawline-Black.ttf'),
    'Rawline-BoldItalic': require('react-native-rawline-ttf/font/Rawline-BoldItalic.ttf'),
    'Rawline-Bold': require('react-native-rawline-ttf/font/Rawline-Bold.ttf'),
    'Rawline-ExtraBoldItalic': require('react-native-rawline-ttf/font/Rawline-ExtraBoldItalic.ttf'),
    'Rawline-ExtraBold': require('react-native-rawline-ttf/font/Rawline-ExtraBold.ttf'),
    'Rawline-ExtraLightItalic': require('react-native-rawline-ttf/font/Rawline-ExtraLightItalic.ttf'),
    'Rawline-ExtraLight': require('react-native-rawline-ttf/font/Rawline-ExtraLight.ttf'),
    'Rawline-Italic': require('react-native-rawline-ttf/font/Rawline-Italic.ttf'),
    'Rawline-LightItalic': require('react-native-rawline-ttf/font/Rawline-LightItalic.ttf'),
    'Rawline-Light': require('react-native-rawline-ttf/font/Rawline-Light.ttf'),
    'Rawline-MediumItalic': require('react-native-rawline-ttf/font/Rawline-MediumItalic.ttf'),
    'Rawline-Medium': require('react-native-rawline-ttf/font/Rawline-Medium.ttf'),
    'Rawline-Regular': require('react-native-rawline-ttf/font/Rawline-Regular.ttf'),
    'Rawline-SemiBoldItalic': require('react-native-rawline-ttf/font/Rawline-SemiBoldItalic.ttf'),
    'Rawline-SemiBold': require('react-native-rawline-ttf/font/Rawline-SemiBold.ttf'),
    'Rawline-ThinItalic': require('react-native-rawline-ttf/font/Rawline-ThinItalic.ttf'),
    'Rawline-Thin': require('react-native-rawline-ttf/font/Rawline-Thin.ttf'),
  });
};
