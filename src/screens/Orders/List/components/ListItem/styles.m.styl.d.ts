declare namespace StylesMStylNamespace {
  export interface IStylesMStyl {
    orderNumber: string;
    row: string;
    row_first: string;
    row_second: string;
  }
}

declare const StylesMStylModule: StylesMStylNamespace.IStylesMStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesMStylNamespace.IStylesMStyl;
};

export = StylesMStylModule;
