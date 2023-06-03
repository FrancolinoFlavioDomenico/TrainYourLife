export interface ListPageModel {
  title?: string;
  list: ListItemModel[];
}

export interface ListItemModel {
  title: string;
  subTitle?: string;
  itemId: number | string;
  fromList: string;
  isWhitCheckBox: boolean;
  urlToRedirect: string | number;
}
