import axiosInstance from "../utils/axiosInstance";

export const getIssue = async () => {
  const { data } = await axiosInstance.get('',{params:{sort:'comments'}})
  return data
}

export const getOneIssue = async(issueNumber) => {
  const {data} = await axiosInstance.get(`/${issueNumber}`)
  // console.log(data)
  return data
}