import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'SF-Pro-Text-Bold': require('./src/assets/fonts/SF-Pro-Text-Bold.otf'),
  });