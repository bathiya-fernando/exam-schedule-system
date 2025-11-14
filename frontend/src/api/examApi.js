import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchExamSessions = async () => {
  try {
    const response = await axios.get(`${baseURL}/schedules`);
    return response.data;
  } catch (error) {
    console.log("Error fetching exam schedules");
    return [];
  }
};


export const fetchExamSessionsSort = async (query) => {
  try {
    const response = await axios.get(`${baseURL}/schedules?sortBy=${query.toString()}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching exam schedules");
    return [];
  }
};