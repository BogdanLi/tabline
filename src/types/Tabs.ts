export interface ITab {
  id: number;
  label: string;
  value: string;
  bookmarks: IBookmark[];
}

export interface IBookmark {
  id: number;
  label: string;
  href: string;
}
