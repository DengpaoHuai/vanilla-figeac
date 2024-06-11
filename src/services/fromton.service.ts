import { Fromton } from "../types/fromton.type";

export const createFromton = async (fromton: Omit<Fromton, "_id">) => {
  const body = JSON.stringify(fromton);
  const response = await fetch(
    "https://crudcrud.com/api/3db7dd93b4464effbb3e8a86838a167c/fromton",
    {
      method: "POST",
      body: body,
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data: Fromton = await response.json();
  return data;
};

export const getFromtons = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/3db7dd93b4464effbb3e8a86838a167c/fromton"
  );
  const data: Fromton[] = await response.json();
  return data;
};
