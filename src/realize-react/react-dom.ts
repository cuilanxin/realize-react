import { TEXT_TYPE } from './utils';

/**
 *
 * @param {*} reactElement react 对象
 * @param {*} dom 挂载的 真实dom
 */
function render(reactElement: ReactElement, dom: HTMLElement | null) {
  const vDom = createDom(reactElement);
  dom!.appendChild(vDom);
}

function createDom(vDom: ReactElement): HTMLElement {
  const { type, props } = vDom;
  let dom: HTMLElement | Node;
  if (type === TEXT_TYPE) {
    dom = document.createTextNode(props.children as string);
  } else {
    dom = document.createElement(type as string);
  }
  if (props) {
    if (Array.isArray(props.children)) {
      // 多个儿子
      for (let index = 0; index < props.children.length; index++) {
        const element = props.children[index];
        render(element as ReactElement, dom as HTMLElement);
      }
    } else if ((props.children as ReactElement)?.type) {
      // 只有一个儿子
      render(props.children as ReactElement, dom as HTMLElement);
    }
  }
  // @ts-ignore
  return dom;
}
export default { render };
