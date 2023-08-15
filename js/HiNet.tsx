import Constants from './expend/dao/Constants';

/**
 * 发送get请求
 * @param api
 */
export function get(api: String) {
  return async (params?: {}) => {
    const {headers, url} = Constants;
    return handleData(
      fetch(buildParams(url + api, params), {
        headers: {
          ...headers,
        },
      }),
    );
  };
}

/**
 * 发送post请求
 * @param api
 */
export function post(api: string) {
  return (params: {}) => {
    return async (queryParams?: {} | string) => {
      const {headers, url} = Constants;
      var data = params instanceof FormData ? params : JSON.stringify(params);
      return handleData(
        fetch(buildParams(url + api, queryParams), {
          method: 'POST',
          body: data,
          headers: {
            'content-type': 'application/json',
            ...headers,
          },
        }),
      );
    };
  };
}

/**
 * 处理接口返回数据
 * @param doAction
 */
function handleData(doAction: Promise<any>) {
  return new Promise((resolve, reject) => {
    doAction
      .then(res => {
        //解析Content-Type 防止将非json数据进行json转换
        const type = res.headers.get('Content-Type');
        if ((type || '').indexOf('json') !== -1) {
          return res.json();
        }
        return res.text();
      })
      .then(result => {
        console.log(JSON.stringify(result));
        if (typeof result === 'string') {
          throw new Error(result);
        }
        const {code, msg, data: {list = undefined} = {}} = result;
        if (code === 401) {
          //跳转到登录页
          return;
        }
        resolve(list || result);
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 *
 * @param url 构建url参数
 * @param params
 * @returns
 */
function buildParams(url: string, params?: {} | string): string {
  let newUrl = new URL(url);
  let finalUrl;
  if (typeof params === 'object') {
    for (const [key, value] of Object.entries(params)) {
      newUrl.searchParams.append(key, value as string);
    }
    finalUrl = newUrl.toString();
  } else if (typeof params === 'string') {
    //适配path参数
    finalUrl = url.endsWith('/') ? url + params : url + '/' + params;
  } else {
    finalUrl = newUrl.toString();
  }

  return finalUrl;
}
