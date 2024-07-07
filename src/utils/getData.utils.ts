export const getData = async (api: string): Promise<any> => {
  const res = await fetch(`${process.env.DATABASE_HOST}${api}`);
  if(res.status !== 200) {
    return new Error('Failed to fetch data!');
  }
  return res.json();
}