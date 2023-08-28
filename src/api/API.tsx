import axios from "axios";
const url: string = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
