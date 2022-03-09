import axios from 'axios';
import {BASE_URL} from '../Constants/Other';

const getAxiosObj = async (apiInfo, data) => {
  const Obj = {
    method: apiInfo.type,
    baseURL: BASE_URL,
    url: apiInfo.name.trim(),
    data: data || null,
    headers: {
      'content-type': 'application/json',
    },
    timeout: 30000,
  };
  return Obj;
};

const convertToQueryParams = params => {
  return (
    '?' +
    Object.keys(params)
      .map(k => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
      })
      .join('&')
  );
};

const generateUrl = (url, params) => {
  if (params) {
    return `${url}/${convertToQueryParams(params)}`;
  }
  return url;
};

export const apiCall = (apiInfo, data, params) =>
  new Promise(async (resolve, reject) => {
    const axiosObj = await getAxiosObj(apiInfo, data);
    axiosObj.url = generateUrl(axiosObj.url, params);
    console.log('url', JSON.stringify(axiosObj));

    axios(axiosObj)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => reject(error));
  });
