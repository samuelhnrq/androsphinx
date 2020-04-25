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
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string;
  featured: boolean;
  page: boolean;
  meta_title?: any;
  meta_description?: any;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  custom_excerpt: string;
  excerpt: string;
  codeinjection_head?: any;
  codeinjection_foot?: any;
  og_image?: any;
  og_title?: any;
  og_description?: any;
  twitter_image?: any;
  twitter_title?: any;
  twitter_description?: any;
  custom_template?: any;
  primary_author?: any;
  primary_tag?: any;
  url: string;
}

export interface ICategoryTag {
  name: string;
  slug: string;
}
