abstract class Component {
  static isReactComponent = {};
  state: Readonly<{}>;
  //
  public context: any;
  public setState: any;
  public forceUpdate: any;
  public refs: any;
  //
  constructor(public props: ReactElement['props']) {
    this.props = props;
    this.state = {};
  }
  abstract render(): ReactNode;
}
export default Component;
