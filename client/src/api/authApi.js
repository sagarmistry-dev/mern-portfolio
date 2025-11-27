import API_BASE_URL from "./api";

/**
 * loginUserApi
 * Sends email/password to /api/auth/login
 * Returns { status, data } where data is parsed JSON
 */
export const loginUserApi = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json().catch(() => ({}));
  return { status: response.status, data };
};
