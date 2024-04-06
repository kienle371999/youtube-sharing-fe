import { UserProfile } from './auth';

export type Video = {
  id: number;
  url: string;
  title: string;
  description: string;
  likeCount: number;
  userId: number;
  user: UserProfile;
  createdAt: string;
  updatedAt: string;
};

type Meta = {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: number;
  hasNextPage: number;
};

export type VideoPage = {
  data: Video[];
  meta: Meta;
};
