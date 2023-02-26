import { TEXT_TYPE } from './type-symbol';
export { TEXT_TYPE } from './type-symbol';

export function wrapToVom(children: ReactNode): ReactNode {
  if (typeof children === 'string' || typeof children === 'number') {
    return { type: TEXT_TYPE, props: { children } };
  } else if (children) {
    return children;
  }
  return null;
}
