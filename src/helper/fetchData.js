import axios from 'axios';
import Cookies from 'js-cookie';

export function fetchUserData_API() {
  return axios.post(`${process.env.REACT_APP_URL_API}user/get_user`, {
    email: Cookies.get('email'),
  });
}

export function fetchDetailCart_API() {
  return axios.post(`${process.env.REACT_APP_URL_API}cart/getDataCart`, {
    email: Cookies.get('email'),
  });
}

export function updateAmountCart_API(productId, amount) {
  return axios.post(`${process.env.REACT_APP_URL_API}cart/updateAmount`, {
    email: Cookies.get('email'),
    productId: productId,
    amount: amount,
  });
}

export function deleteProductCart_API(productId) {
  return axios.post(`${process.env.REACT_APP_URL_API}cart/deleteCart`, {
    email: Cookies.get('email'),
    productId: productId,
  });
}

export function testGetImage() {
  return axios.get(`${process.env.REACT_APP_URL_API}file/images`);
}
