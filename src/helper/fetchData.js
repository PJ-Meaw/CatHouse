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

export function getBestSeller() {
  return axios.get(`${process.env.REACT_APP_URL_API}product/best_selling`);
}

export function paymentCreditcard(
  productList,
  cardNumber,
  expirationDate,
  holderName,
  cvcCode,
  totalPrice,
  addressData
) {
  const FinalProductList = [];
  for (let product of productList) {
    FinalProductList.push({
      productId: product._id,
      quantity: product.amount,
      merchantEmail: product.merchantEmail,
    });
  }
  return axios.post(`${process.env.REACT_APP_URL_API}payment/credit_card`, {
    email: Cookies.get('email'),
    productList: FinalProductList,
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    holderName: holderName,
    cvcCode: cvcCode,
    amount: totalPrice,
    address: addressData,
  });
}
