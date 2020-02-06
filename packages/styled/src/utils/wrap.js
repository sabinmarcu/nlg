// @flow

import {
  type StylePair,
} from '../types';

export type WrapProps = StylePair | StylePair[]

export const wrap = (...parts: WrapProps): string[] => {
  if (parts.length === 2
    && typeof parts[0] === 'string'
    && typeof parts[1] === 'string'
  ) {
    return [`%c${parts[0]}`, parts[1]];
  }
  const partial = parts.reduce(
    (prev, [template, style]) => ({
      template: `${prev.template}%c${template}`,
      styles: [...prev.styles, style],
    }),
    ({ template: '', styles: [] }),
  );
  return [partial.template, ...partial.styles];
};

export default wrap;
