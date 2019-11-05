import adventures from "../fake-data/adventures";

type JSONResponse<T> = {
  json: () => Promise<T>;
};

const jsonResponse = <T>(data: T): JSONResponse<T> => ({
  json: () => Promise.resolve(data)
});

const mockFetch = <T>(url: string): Promise<JSONResponse<T>> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (url) {
        case "/adventures": {
          // @ts-ignore
          return resolve(jsonResponse(adventures));
        }
        default: {
          reject("Invalid end point");
        }
      }
    }, 1000);
  });

export default mockFetch;
