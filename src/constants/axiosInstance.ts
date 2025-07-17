import axios from "axios";

// Load environment variables
const baseUrl = process.env.NEXT_PUBLIC_GHL_API_BASE_URL;
const authToken = process.env.NEXT_PUBLIC_GHL_API_AUTH_KEY;

// Check for missing variables
if (!baseUrl || !authToken) {
  throw new Error("Missing go high level environment variables.");
}

// Create and export Axios instance
export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
  timeout: 10000, // 10 seconds
});