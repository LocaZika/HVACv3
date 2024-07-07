'use client'
import { TAppStore, makeStore, ICarState, changeCars } from "@redux";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  data,
  children
}: {
  data: TResponse<TCarItemMinData[]>,
  children: React.ReactNode,
}) {
  const storeRef = useRef<TAppStore | null>(null);
  if( !storeRef.current ){
    storeRef.current = makeStore();
    storeRef.current.dispatch(changeCars(data.data));
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
