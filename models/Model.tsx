export type TagsDetail = {
  status: string;
  type: string;
  name: string;
  tagId: number;
};

export type Movie = {
  subtitles: [];
  categories: [];
  tags: number[];
  status: string;
  timeDuration: number;
  coverImageUrl: string;
  productTotal: number;
  description: string;
  name: string;
  productId: number;
  updatedAt: Date;
  createdAt: Date;
  tagsDetail: TagsDetail[];
};

export type Tag = {
  _id: string;
  status: string;
  type: string;
  name: string;
  tagId: number;
  updatedAt: Date;
  createdAt: Date;
};
