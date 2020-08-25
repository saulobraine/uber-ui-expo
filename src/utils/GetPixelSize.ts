import { Platform, PixelRatio } from 'react-native';

export const GetPixelSize = (pixels: number) => {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels)
  })
}