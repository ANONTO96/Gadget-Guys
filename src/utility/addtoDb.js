import { toast } from "react-toastify";

const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('Cart-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        toast.warn('This product is already exist in the Cart')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('Cart-list',storedListStr);
        toast.success('This product is added to your Cart')
    }
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list')
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        toast.warning('This product is already exist in the wish list')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr);
        toast.info('This product is added to your Wish List')
    }
}
export {addToStoredCartList, getStoredCartList, addToStoredWishList, getStoredWishList}