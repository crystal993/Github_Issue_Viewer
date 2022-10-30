import axiosInstance from "../utils/axiosInstance";

export const getIssue = async (pageNumber) => {
  const { data } = await axiosInstance.get(`/repos/angular/angular-cli/issues?sort=comments&page=${pageNumber}&state=open`)
      return data
}

export const getOneIssue = async (issueNumber) => {
  const { data } = await axiosInstance.get(`/repos/angular/angular-cli/issues/${issueNumber}`)
  return data
}