import {collection, addDoc,getDocs, doc, deleteDoc,setDoc } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserSessionPersistence,
    onAuthStateChanged,
    updateProfile
}
from 'firebase/auth'
import firebase from './firebase'

class UserApis {
    constructor (db = firebase){
        this.db = db;
        this.auth = getAuth();
    }

    async join(userData){
        const {email,pw,name} = userData;
        return createUserWithEmailAndPassword(this.auth, email, pw)
        .then((user) => {
            updateProfile(this.auth.currentUser, {
                displayName: name
            });
            const data = {
                user : {
                    id:user.user.uid,
                    name,
                },
                isLogin:true,
            }
            return data
            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
            // ..
        });
    }

    async login(loginData){
        const {id,pw} = loginData
        return setPersistence(this.auth, browserSessionPersistence)
            .then(() => signInWithEmailAndPassword(this.auth, id, pw))
            .then(user=>{
                console.log(user)
                const data = {
                    user : {
                        id:user.user.uid,
                        name:user.user.displayName,
                    },
                    isLogin:true,
                }
                return data
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    async logOut(){
            return await signOut(this.auth).then((result) => {
                const data = {
                    user : {
                        id:null,
                        name:null,
                    },
                    isLogin:false,
                }
                return data
            }).catch((error) => {

            });
    }


    userStatus(){
    const userData = { isLogin: null, user: {} };
    const response = new Promise((resolve, reject) => {
        onAuthStateChanged(this.auth, (user) => {
        if (user) {
            userData.user = { id: user.uid, name: user.displayName };
            userData.isLogin = true;
            resolve(userData);
        } else {
            userData.user = { id: null, name: null };
            userData.isLogin = false;
            resolve(userData);
        }
        });
    });
    return response;
    }
}


export default UserApis