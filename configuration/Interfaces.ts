export interface Category {
  id: number;
  name: string;
  post_count: number;
}

export interface User {
  key: string;
  user: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
}
