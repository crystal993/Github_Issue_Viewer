import axiosInstance from "../utils/axiosInstance";

export const getIssue = async () => {
  const { data } =     await axiosInstance.get()
  return data
}