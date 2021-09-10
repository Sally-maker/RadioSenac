interface UserProps {
  _id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  role: 'standard' | 'admin';
}

export default UserProps;
