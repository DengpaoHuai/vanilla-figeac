import { Fromton } from "../types/fromton.type";

export const createFromton = async ({
  name,
  price,
  expirationDate,
}: Omit<Fromton, "_id">) => {
  const body = JSON.stringify({ name, price, expirationDate });
  const response = await fetch(
    "https://crudcrud.com/api/75a25ac1f68641059e5955e067529903/fromton",
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
    "https://crudcrud.com/api/75a25ac1f68641059e5955e067529903/fromton"
  );
  const data: Fromton[] = await response.json();
  return data;
};

export const deleteFromton = async (id: string) => {
  const response = await fetch(
    "https://crudcrud.com/api/75a25ac1f68641059e5955e067529903/fromton/" + id,
    {
      method: "DELETE",
    }
  );
};
