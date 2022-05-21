import axios from "axios";
import RequestData from "./request";

type HttpRequest = {
  method: "get" | "post" | "put" | "delete";
  data?: Contact;
};

export const axiosCallHandler = async (requestData: HttpRequest) => {
  axios.defaults.baseURL = "/api";

  switch (requestData.method) {
    case "get":
      try {
        const response = await axios.get("/contacts");
        const responseObj = new RequestData({
          response: response.data,
          error: false,
          loading: false,
        });

        return responseObj.getRequestData();
      } catch (error) {
        const responseObj = new RequestData({
          response: null,
          error: !!error,
          loading: false,
        });
        return responseObj.getRequestData();
      }
    case "post":
      try {
        const response = await axios.post("/contacts", {
          email: requestData.data!.email,
          phone: requestData.data!.phone,
          name: requestData.data!.name,
        });
        const responseObj = new RequestData({
          response: response.data,
          error: false,
          loading: false,
        });
        return responseObj.getRequestData();
      } catch (error) {
        const responseObj = new RequestData({
          response: null,
          error: !!error,
          loading: false,
        });
        return responseObj.getRequestData();
      }
    case "put":
      try {
        const response = await axios.put(
          `/contacts${requestData.data!.id}`,
          {
            email: requestData.data!.email,
            phone: requestData.data!.phone,
            name: requestData.data!.name,
          }
        );
        const responseObj = new RequestData({
          response: response.data,
          error: false,
          loading: false,
        });
        return responseObj.getRequestData();
      } catch (error) {
        const responseObj = new RequestData({
          response: null,
          error: !!error,
          loading: false,
        });
        return responseObj.getRequestData();
      }
    default:
      try {
        const response = await axios.delete(
          `/contacts${requestData.data!.id}`
        );
        const responseObj = new RequestData({
          response: response.data,
          error: false,
          loading: false,
        });
        return responseObj.getRequestData();
      } catch (error) {
        const responseObj = new RequestData({
          response: null,
          error: !!error,
          loading: false,
        });
        return responseObj.getRequestData();
      }
  }
};
