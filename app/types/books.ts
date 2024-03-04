type TBooksResponse = {
  items: IBook[];
  kind: string;
  totalItems: number
}

interface IBook {
  volumeInfo: IVolumeInfo;
  id: string;
}

interface IVolumeInfo {
  searchInfo: TBookSearchInfo;
  imageLinks: TBookImages;
  industryIdentifiers: TBookIdentifier[];
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  description: string;
  pageCount: number;
  publishedDate: string;
  publisher: string;
  ratings_count: number;
  title: string;
  subtitle: string;
}

type TBookSearchInfo = {
  textSnippet: string;
  selfLink: string;
}

type TBookImages = {
  smallThumbnail: string;
  thumbnail: string;
}

type TBookIdentifier = {
  type: string;
  identifier: string;
}