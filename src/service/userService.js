import http from '../helper/configAxios';

// email: string,
// updateObj:  {telNo: string , profileName: string}
const updateProfile = (data) => {
  return http.post('user/update', data);
};

// email: string,
// updateObj: { password: string, newPassword: string}
const confirmPasswordEmail = (data) => {
  return http.post('user/send_email', data);
};

// email: string,
/* updateObj: {
"address": string,
"code" : number,
"district": string,
"firstName": string,
"lastName": string,
"province": string,
"subDistrict": string,
"telNo": string
} */
const addNewAddress = (data) => {
  return http.post('user/create_address', data);
};

/* updateObj: {
"address": string,
"code" : number,
"district": string,
"firstName": string,
"lastName": string,
"province": string,
"subDistrict": string,
"telNo": string
} */
const updateAddress = (data) => {
  return http.post('user/update_address', data);
};

// _id: string (id of address obj)
const delAddress = (data) => {
  return http.post('user/del_address', data);
};

// email: string
const getOrderOfUser = (data) => {
  return http.post('user/order_list', data);
};

export default {
  updateProfile,
  confirmPasswordEmail,
  addNewAddress,
  updateAddress,
  delAddress,
  getOrderOfUser,
};
