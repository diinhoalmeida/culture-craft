export interface UserView {
  userId: number;
  userName: string;
  userPhoto: string;
}

interface Comment {
  commentId: number;
  commentText: string;
}

interface AuthorDetails {
    authorId: number;
    authorName: string;
    authorPhoto: string;
  }

export interface NewAndTrendingItem {
  id: number;
  name: string;
  views: UserView[];
  newView: number;
  newLikes: number;
  newContent: boolean;
  recommended: boolean;
  type: "game" | "art" | "video" | "audio";
  contentImage: string;
  comments: Comment[];
  authorDetails: AuthorDetails;
}

export interface NewAndTrendingData {
  newAndTranding: NewAndTrendingItem[];
}
