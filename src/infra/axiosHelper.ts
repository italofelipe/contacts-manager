import axios from "axios";
import { envMapper } from "./envMapper";
import Firebase from "./firebase";
import RequestData from "./request";

type HttpRequest = {
  method: "get" | "post" | "put" | "delete";
  data?: Contact;
};

export const axiosCallHandler = async (requestData: HttpRequest) => {
  const endpoint = new Firebase(envMapper).endpointURL;
  axios.defaults.baseURL = endpoint;



  switch (requestData.method) {
    case "get":
      try {
        const response = await axios.get<Contact[]>("/users.json");
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
        const response = await axios.post("/users.json", {
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
          `/users.json/${requestData.data!.id}`,
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
          `/users.json/${requestData.data!.id}`
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
