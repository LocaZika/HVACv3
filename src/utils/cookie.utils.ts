'use server'
import { cookies } from "next/headers"
import { typeOf } from "@utils";

interface IOptionsCookie {
  type: 'get'| 'set' | 'delete' | 'getAll' | 'has',
  path: string,
  value: string,
  secure: boolean,
  expires: number | Date,
  httpOnly: boolean,
}
export const cookie = (name: string, options: Partial<IOptionsCookie>) => {
  const cookie = cookies();
  switch (options.type) {
    case 'get':
      return cookie.get(name);
    case 'set':
      return cookie.set({
        name: name,
        value: JSON.stringify(options.value),
        path: options.path ?? '/',
        secure: options.secure?? false,
        expires: options.expires ?? undefined,
        httpOnly: options.httpOnly?? false,
      });
    case 'delete':
      return cookie.delete(name);
    default:
      return cookie.get(name);
  }
}