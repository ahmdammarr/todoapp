import AsyncStorage from "@react-native-async-storage/async-storage";
import { to } from "await-to-js";

export const getItem = async (key: string) => {
  const [err, res] = await to(AsyncStorage.getItem(key));

  return { err, res };
};
export const setItem = async (key: string, value: string) => {
  const [err, res] = await to(AsyncStorage.setItem(key, value));
  console.log('err',err)
  return {
    err,
    res,
  };
};

export const removeItem = async (key: string) => {
  const [err, res] = await to(AsyncStorage.removeItem(key));
  return {
    err,
    res,
  };
};

export const removeAll = async () => {
    const [err, res] = await to(AsyncStorage.clear());
    return {
      err,
      res,
    };
  };


// export const testKey =()=> setItem('test','testing')
// export const getKey =()=> getItem('test')