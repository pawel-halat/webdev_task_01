import type { ApiError } from "../types/api-error";

export const onError = (error: ApiError) => {
  if (error.response) {
    const { status, data } = error.response;

    switch (status) {
      case 400:
        throw new Error(`Bad Request: ${data.message || "Invalid request"}`);
      case 401:
        throw new Error("Unauthorized: Please check your credentials");
      case 403:
        throw new Error(
          "Forbidden: You don't have permission to access this resource"
        );
      case 404:
        throw new Error(`Not Found: The requested resource doesn't exist`);
      case 500:
        throw new Error("Server Error: Please try again later");
      default:
        throw new Error(`Request failed with status ${status}`);
    }
  } else if (error.request) {
    throw new Error("Network Error: Unable to connect to the server");
  } else {
    throw new Error(`Request Error: ${error.message}`);
  }
};
