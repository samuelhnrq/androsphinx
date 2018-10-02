export type Status = 'draft' | 'published';

export interface IPostListResponse {
  meta: IMetaListPosts;
  data: IPost[];
}

export interface IMetaListPosts {
  count: number;
  next_page: string;
  previous_page: string;
}

export interface IPost {
  slug: string;
  url: string;
  published: Date;
  created: string;
  status: Status;
  title: string;
  body: string;
  summary: string;
  seo_title: string;
  meta_description: string;
  categories: ICategoryTag[];
  tags: ICategoryTag[];
  featured_image: string;
}

export interface ICategoryTag {
  name: string;
  slug: string;
}
