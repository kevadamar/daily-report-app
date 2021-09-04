import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataLocal = async ({ key, data }) => {
  try {
    console.log('Success save local', typeof data);
    if (typeof data === 'number' || data instanceof Number) {
      data = data.toString();
    }
    if (Object.keys(data).length === 0 || data.length === 0) {
      return { data: null, error: true, msg: 'Empty data' };
    }

    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    await AsyncStorage.setItem(`@${key}`, data);

    return { data, error: false, msg: 'Success save' };
  } catch (e) {
    console.log(e);
    return { data: null, error: true, msg: 'Error save from AsyncStorage' };
  }
};

export const getDataLocal = async ({ key }) => {
  try {
    let jsonValue = await AsyncStorage.getItem(`@${key}`);
    if (!jsonValue) {
      return {
        data: jsonValue,
        error: true,
        msg: `Empty data from key : ${key}`,
      };
    }
    if (jsonValue !== null || jsonValue !== undefined) {
      if (
        jsonValue.includes('{') &&
        jsonValue.includes(':') &&
        jsonValue.includes('}')
      ) {
        jsonValue = JSON.parse(jsonValue);
      }
    } else {
      return { data: null, error: true, msg: `Empty data from key : ${key}` };
    }
    console.log('Success get local', !jsonValue);
    return { data: jsonValue, error: false, msg: 'Success get data' };
  } catch (e) {
    console.log(e);
    return { data: null, error: true, msg: 'Error save from AsyncStorage' };
  }
};

export const removeDataLocal = async ({ key }) => {
  try {
    await AsyncStorage.removeItem(`@${key}`);
    return { data: null, error: false, msg: 'Success remove' };
  } catch (e) {
    console.log(e);
    return { data: null, error: true, msg: 'Error save from AsyncStorage' };
  }
};
