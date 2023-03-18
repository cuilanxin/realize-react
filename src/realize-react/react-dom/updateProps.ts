export default function updateProps(dom: HTMLElement, props: ReactElement['props']) {
  const { children, style, ...other } = props;
  if (style) {
    for (const attr in style) {
      if ('width' === attr && typeof style[attr] === 'number') {
        style.width = style.width + 'px';
      }
      if ('height' === attr && typeof style[attr] === 'number') {
        style.height = style.height + 'px';
      }
      if ('fontSize' === attr && typeof style[attr] === 'number') {
        style.fontSize = style.fontSize + 'px';
      }
    }
    Object.assign(dom.style, style);
  }
  Object.assign(dom, other);
  return dom;
}
