interface UserProps {
  _id: string;
  email: string;
  password: string;
  created_at: Date;
  role: 'standard' | 'admin';
}

export type { UserProps };
