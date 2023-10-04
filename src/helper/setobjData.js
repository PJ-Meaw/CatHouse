export function setObjUserData(obj){
    return {
        _id : obj._id,
        email : obj.email,
        telNo : obj.telNo,
        address : obj.address,
        role : obj.role,
        likeProduct : obj.likeProduct,
        cart : obj.cart,
        waitingPayment : obj.waitingPayment,
        transportDetail : obj.transportDetail,
        hashedCode : obj.hashedCode,
    }
}