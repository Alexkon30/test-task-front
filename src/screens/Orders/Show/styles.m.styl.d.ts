declare namespace StylesMStylNamespace {
  export interface IStylesMStyl {
    items: string;
    itemsList: string;
    screen: string;
    screenWrapper: string;
    status: string;
    statusTag: string;
  }
}

declare const StylesMStylModule: StylesMStylNamespace.IStylesMStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesMStylNamespace.IStylesMStyl;
};

export = StylesMStylModule;
