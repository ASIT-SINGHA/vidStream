const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from 'axios';

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

  const response = await axios.post(`${API_BASE_URL}/api/v1/users/register`,dataToSend)

  return response;
}


export async function loginUser(formData) {

  const dataToSend = new FormData();

  dataToSend.append("email",formData.email)
  dataToSend.append("password",formData.password)

  const response = await axios.post(`${API_BASE_URL}/api/v1/users/login`,dataToSend)


  return response
  
}