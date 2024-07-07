'use server'
import { cookies } from "next/headers";

interface IUserData{
  email: string;
  password: string;
}
export default async function login(formData: FormData): Promise<void>{
  const userData: IUserData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };
  const cookie = cookies();
  const sendUserData = await fetch(`${process.env.DATABASE_HOST}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const userRes: TResponse<string> = await sendUserData.json();
  if(userRes.ok)
  cookie.set('user', JSON.stringify(userData));
  console.log(userData);
}