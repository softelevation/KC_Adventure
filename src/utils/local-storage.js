import AsyncStorage from '@react-native-async-storage/async-storage';

const PREFIX_KEY = '@kce/';

export async function clearAsync() {
  await AsyncStorage.clear();
}

export async function saveAsync(key, data) {
  try {
    await AsyncStorage.setItem(`${PREFIX_KEY}${key}`, data);
  } catch (e) {}
}

export async function getAsync(key) {
  try {
    const data = await AsyncStorage.getItem(`${PREFIX_KEY}${key}`);
    if (!data) {
      return null;
    }
    return data;
  } catch (e) {
    return null;
  }
}
//
export async function mergeAsync(key, data) {
  try {
    await AsyncStorage.multiSet([`${PREFIX_KEY}${key}`, JSON.stringify(data)]);
  } catch (e) {}
}
