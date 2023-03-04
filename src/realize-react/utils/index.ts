import { TEXT_TYPE } from './type-symbol';
export { TEXT_TYPE } from './type-symbol';

export function wrapToVom(children: ReactNode[]): ReactNode | ReactNode[] {
  const newChildren = Array<ReactNode>();
  for (let index = 0; index < children.length; index++) {
    const element = children[index];
    if (typeof element === 'string' || typeof element === 'number') {
      newChildren.push({ type: TEXT_TYPE, props: { children: element } });
      continue;
    }
    newChildren.push(element);
  }
  if (newChildren.length > 1) return newChildren;
  return newChildren[0];
}
