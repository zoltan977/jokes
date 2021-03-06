import httpClient from "axios";

const getApiData =
  (
    setError: React.Dispatch<React.SetStateAction<string>>,
    setWaitingForTheServer: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  async (url: string, setData: React.Dispatch<React.SetStateAction<any>>) => {
    try {
      setError("");

      setWaitingForTheServer(true);
      const response = await httpClient.get(url);
      setWaitingForTheServer(false);

      setData(response.data);
    } catch (error: any) {
      setWaitingForTheServer(false);

      const err = error?.response?.data?.error;
      const msg = error?.response?.data?.message;

      if (err) setError(`${err}: ${msg}`);
      else setError("Something went wrong!");
    }
  };

export default getApiData;
