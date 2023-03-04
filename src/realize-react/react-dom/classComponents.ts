import ReactDOM from './';

export default function classComponents(vDom: ReactElement) {
  const { type, props } = vDom;
  const classDom = new (type as Component)(props);
  const renderDom = classDom.render();
  return ReactDOM.createDom(renderDom as ReactElement);
}
