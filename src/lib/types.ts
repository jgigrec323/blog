
export interface Post {
    id: number;
    title: string;
    content: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    categories: Category[];
    tags: Tag[];
    comments: Comment[];
    images: Image[];
    views: number;
    shares: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    posts: Post[];
  }
  
  export interface Tag {
    id: number;
    name: string;
    posts: Post[];
  }
  
  export interface Comment {
    id: number;
    content: string;
    createdAt: Date;
    postId: number;
    post: Post;
  }
  
  export interface Image {
    id: number;
    url: string;
    postId: number;
    post: Post;
  }
  