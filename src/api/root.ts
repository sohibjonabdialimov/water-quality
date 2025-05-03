import { InfoProps } from "@/types";
import axios from "axios";

export const fetchInfo = async (): Promise<InfoProps[]> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/root`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching info:", error);
    throw error;
  }
};
