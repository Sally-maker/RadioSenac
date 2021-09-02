interface UserProps {
  _id:string
  name: string;
  email: string;
  password: string;
  created_at:Date;
  type: 'standard' | 'admin'
}

export default UserProps