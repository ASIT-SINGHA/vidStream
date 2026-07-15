const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function registerUser(formData) {
  const dataToSend = new FormData();
  
  dataToSend.append("fullName", formData.fullName);
  dataToSend.append("username", formData.username);
  dataToSend.append("email", formData.email);
  dataToSend.append("password", formData.password);

  if (formData.avatar?.length > 0) {
    dataToSend.append("avatar", formData.avatar[0]);
  }

  if (formData.coverImage?.length > 0) {
    dataToSend.append("coverImage", formData.coverImage[0]);
  }

  const response = await fetch(
    `${API_BASE_URL}/api/v1/users/register`,
    { method: "POST", body: dataToSend }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Something went wrong during registration.");
  }

  return data;
}
