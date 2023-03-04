import { TEXT_TYPE } from '../utils';
import functionComponent from './functionComponent';
import classComponents from './classComponents';
import updateProps from './updateProps';
/**
 *
 * @param {*} reactElement react 对象
 * @param {*} dom 挂载的 真实dom
 */
function render(reactElement: ReactElement, dom: HTMLElement | null) {
  const vDom = createDom(reactElement);
  if (vDom) {
    dom!.appendChild(vDom);
  }
}

function createDom(vDom: ReactElement): HTMLElement | Text | null {
  if (!(vDom instanceof Object)) {
    if (typeof vDom === 'boolean' || vDom === null) return null;
    return document.createTextNode(vDom);
  }
  const { type, props } = vDom;
  let dom: HTMLElement | Text;
  if (type === TEXT_TYPE) {
    dom = document.createTextNode(props.children as string);
  } else if (typeof type === 'function') {
    if ('isReactComponent' in type) {
      return classComponents(vDom);
    }
    return functionComponent(vDom);
  } else {
    dom = document.createElement(type as string);
  }
  if (props) {
    dom = updateProps(dom as HTMLElement, props);
    if (Array.isArray(props.children)) {
      // 多个儿子
      for (let index = 0; index < props.children.length; index++) {
        const element = props.children[index];
        render(element as ReactElement, dom as HTMLElement);
      }
    } else if ((props.children as ReactElement).type) {
      // 只有一个儿子
      render(props.children as ReactElement, dom as HTMLElement);
    }
  }
  return dom;
}
export default { render, createDom };
