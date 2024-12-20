import { loadAsync } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import '@/src/shared/styles/global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    async function loadResources() {
      try {
        // 폰트 로드
        await loadAsync({
          'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.ttf'),
          'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // 리소스 로드 완료 후 스플래시 스크린 숨김
        await SplashScreen.hideAsync();
      }
    }

    loadResources();
  }, []);

  return <Stack />;
}
