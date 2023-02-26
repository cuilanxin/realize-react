import { wrapToVom } from './utils';
/**
 *
 * @param {*} type HTML 元素 函数组件 类组件
 * @param {*} props
 * @param  {...any} children 子元素
 * @returns {type, key, props:{ children, ...props}} React 对象
 */
function createElement(type: string, props: Record<string, any>, ...children: Array<ReactNode>): ReactElement {
  if (children.length > 1) {
    return {
      type,
      props: {
        ...props,
        children: children.map(wrapToVom),
      },
    };
  } else {
    return {
      type,
      props: {
        ...props,
        children: wrapToVom(children[0]),
      },
    };
  }
}

export default {
  createElement,
};
