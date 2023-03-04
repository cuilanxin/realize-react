declare type ReactNode = number | string | ReactElement | null | undefined | boolean;

const Component: {
  new (props: ReactElement['props']): Component; // <- 构造签名
  isReactComponent: {};
  props: ReactElement['props'];
  state: Readonly<{}>;
  render(): ReactNode;
};
declare type Component = typeof Component;

declare type FunctionComponent = (props: ReactElement['props']) => ReactNode;

declare type ReactElement = {
  type: string | number | Symbol | FunctionComponent | Component;
  props: Readonly<{}> & {
    children?: ReactNode | ReactNode[];
    style?: CSSStyleDeclaration;
  };
};
