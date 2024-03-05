// eslint-disable @typescript-eslint/no-unused-vars

export interface IBooksResponse {
  items: IBook[];
  kind: string;
  totalItems: number
}

export interface IBook {
  volumeInfo: IVolumeInfo;
  id: string;
}

export interface IVolumeInfo {
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

export interface TBookSearchInfo {
  textSnippet: string;
  selfLink: string;
}

export interface TBookImages {
  smallThumbnail: string;
  thumbnail: string;
}

export interface TBookIdentifier {
  type: string;
  identifier: string;
}