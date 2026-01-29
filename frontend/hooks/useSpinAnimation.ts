import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { ANIMATION } from '../constants/theme';

export function useSpinAnimation(duration = ANIMATION.spinDuration) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue, duration]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return { spin, spinValue };
}
