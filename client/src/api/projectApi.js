import API_BASE_URL from "./api";
import { getToken } from "../services/tokenService";

/**
 * Fetch all projects (PUBLIC)
 */
export const getAllProjectsApi = async () => {
  const res = await fetch(`${API_BASE_URL}/projects`);
  const data = await res.json();
  return { status: res.status, data };
};

/**
 * Create project (ADMIN)
 */
export const createProjectApi = async (project) => {
  const token = getToken();

  const res = await fetch(`${API_BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(project),
  });

  const data = await res.json();
  return { status: res.status, data };
};

/**
 * Update project
 */
export const updateProjectApi = async (id, project) => {
  const token = getToken();

  const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(project),
  });

  const data = await res.json();
  return { status: res.status, data };
};

/**
 * Delete project
 */
export const deleteProjectApi = async (id) => {
  const token = getToken();

  const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return { status: res.status, data };
};
