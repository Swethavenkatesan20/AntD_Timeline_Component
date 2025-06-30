import { useState, useCallback } from 'react';
import { MODES } from '../constants/timelineConstants';

export default function useTimelineMode(externalMode, onChange) {
  const isControlled = externalMode !== undefined;
  const isValid = MODES.includes(externalMode);
  const fallbackMode = 'left';

  const [internalMode, setInternalMode] = useState(isValid ? externalMode : fallbackMode);
  const mode = isControlled ? externalMode : internalMode;

  const setMode = useCallback(
    (nextMode) => {
      if (!MODES.includes(nextMode)) return;
      if (!isControlled) setInternalMode(nextMode);
      if (onChange) onChange(nextMode);
    },
    [isControlled, onChange]
  );

  return [mode, setMode];
}
