export default function updateProps(dom: HTMLElement, props: ReactElement['props']) {
  for (const key in props) {
    if (key === 'children') continue;
    if (key === 'style') {
      for (const attr in props.style) {
        if ('width' === attr && typeof props.style[attr] === 'number') {
          props.style.width = props.style.width + 'px';
        }
        if ('height' === attr && typeof props.style[attr] === 'number') {
          props.style.height = props.style.height + 'px';
        }
        if ('fontSize' === attr && typeof props.style[attr] === 'number') {
          props.style.fontSize = props.style.fontSize + 'px';
        }
      }
      Object.assign(dom.style, props.style);
      continue;
    }
    // @ts-ignore
    dom[key] = props[key];
  }
  return dom;
}
