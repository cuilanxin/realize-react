declare type ReactNode = number | string | ReactElement | null | undefined | boolean;

const Component: {
  isReactComponent: {};
  props: ReactElement['props'];
  state: Readonly<{}>;
  render(): ReactNode;
};
declare type Component = new (props: ReactElement['props']) => typeof Component; // <- 构造签名 Component;

declare type FunctionComponent = (props: ReactElement['props']) => ReactNode;

declare type ReactElement = {
  type: string | number | Symbol | FunctionComponent | Component;
  props: Partial<HTMLElement> & {
    children?: ReactNode | ReactNode[];
    style?: CSSStyleDeclaration;
  };
};
