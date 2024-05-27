export interface UserView {
  userId: number;
  userName: string;
  userPhoto: string;
}

export interface Comment {
  commentId: number;
  commentText: string;
  commentUserName: string;
  commentUserPhoto: string;
  createdAt: string;
}

export interface AuthorDetails {
  authorId: number;
  authorName: string;
  authorPhoto: string;
}

export interface NewAndTrendingItem {
  id: number;
  name: string;
  view: number;
  faves: number;
  votes: number;
  score: number;
  createdAt: string;
  views: UserView[];
  newView: number;
  category: string;
  description: string;
  newLikes: number;
  newContent: boolean;
  recommended: boolean;
  type: "game" | "art" | "video" | "audio" | "movie";
  contentImage: string;
  comments: Comment[];
  authorDetails: AuthorDetails;
}

export interface NewAndTrendingData {
  newAndTrending: NewAndTrendingItem[];
}
