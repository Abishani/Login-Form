
import { extendObservable } from 'mobx';



 /*user store*/
 class UserStore{
     constructor(){
         extendObservable(this,{

            loading: true,
            isLoggedIn: false,
            username: ''

         })
     }
 }


 //creating a instance of new UserStore class
 export default new UserStore();