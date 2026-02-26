import { useFonts } from 'expo-font';

export const useRawlineFonts = () => {
  return useFonts({
    'Rawline-BlackItalic': require('../font/Rawline-Black.ttf'),
    'Rawline-Black': require('../font/Rawline-Black.ttf'),
    'Rawline-BoldItalic': require('../font/Rawline-BoldItalic.ttf'),
    'Rawline-Bold': require('../font/Rawline-Bold.ttf'),
    'Rawline-ExtraBoldItalic': require('../font/Rawline-ExtraBoldItalic.ttf'),
    'Rawline-ExtraBold': require('../font/Rawline-ExtraBold.ttf'),
    'Rawline-ExtraLightItalic': require('../font/Rawline-ExtraLightItalic.ttf'),
    'Rawline-ExtraLight': require('../font/Rawline-ExtraLight.ttf'),
    'Rawline-Italic': require('../font/Rawline-Italic.ttf'),
    'Rawline-LightItalic': require('../font/Rawline-LightItalic.ttf'),
    'Rawline-Light': require('../font/Rawline-Light.ttf'),
    'Rawline-MediumItalic': require('../font/Rawline-MediumItalic.ttf'),
    'Rawline-Medium': require('../font/Rawline-Medium.ttf'),
    'Rawline-Regular': require('../font/Rawline-Regular.ttf'),
    'Rawline-SemiBoldItalic': require('../font/Rawline-SemiBoldItalic.ttf'),
    'Rawline-SemiBold': require('../font/Rawline-SemiBold.ttf'),
    'Rawline-ThinItalic': require('../font/Rawline-ThinItalic.ttf'),
    'Rawline-Thin': require('../font/Rawline-Thin.ttf'),
  });
};
