import { useEffect, useState } from 'react';
import { Dimensions, Platform } from 'react-native';

export default function useResponsive() {
  const [width, setWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const handler = ({ window }: { window: { width: number } }) => setWidth(window.width);
    const sub = Dimensions.addEventListener?.('change', handler);
    return () => {
      try { sub?.remove?.(); } catch {}
    };
  }, []);

  const isWeb = Platform.OS === 'web';
  const isLarge = width > 900 || (isWeb && width > 700);
  const isTablet = width >= 600 && width <= 900;
  const isMobile = width < 600;

  return { width, isWeb, isLarge, isTablet, isMobile };
}
