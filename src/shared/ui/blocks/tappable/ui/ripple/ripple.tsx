import React, { useState, useLayoutEffect, FC } from 'react';
import { RippleStyles } from './ripple.styles';
import { RippleTypes } from '@shared/ui/blocks/tappable/ui/ripple/ripple.types';

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number | undefined,
  cleanUpFunction: () => void,
) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration! * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

export const Ripple: FC<RippleTypes> = ({ effect }) => {
  const [rippleArray, setRippleArray] = useState<any[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, effect?.duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: {
    currentTarget: {
      getBoundingClientRect: () => {
        width: number;
        height: number;
        x: number;
        y: number;
      };
    };
    pageX: number;
    pageY: number;
  }) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size: number =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleStyles.Ripple
      effect={{ paint: effect?.paint, duration: effect?.duration }}
      onMouseDown={addRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, key) => {
          return (
            <span
              key={'span' + key}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            ></span>
          );
        })}
    </RippleStyles.Ripple>
  );
};
