import ReactDOM from './';

export default function functionComponent(vDom: ReactElement) {
  const { type, props } = vDom;
  const functionDom = (type as FunctionComponent)(props);
  return ReactDOM.createDom(functionDom as ReactElement);
}
