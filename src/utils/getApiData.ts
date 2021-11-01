import httpClient from "axios";

const getApiData = async (
  url: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    setError("");
    const response = await httpClient.get(url);
    setData(response.data);
  } catch (error: any) {
    const err = error?.response?.data?.error;
    const msg = error?.response?.data?.message;

    if (err) setError(`${err}: ${msg}`);
    else setError("Something went wrong!");
  }
};

export default getApiData;
