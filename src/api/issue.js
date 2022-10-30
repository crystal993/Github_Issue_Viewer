import axiosInstance from "../utils/axiosInstance";

export const getIssue = async (page) => {
  const { data } = await axiosInstance.get('', {
    params: { 
      sort: 'comments',
      per_age : 10,
      state : 'open',
      page } })
      return data
}

export const getOneIssue = async (issueNumber) => {
  const { data } = await axiosInstance.get(`/${issueNumber}`)

  return data
}