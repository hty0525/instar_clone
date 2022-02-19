import {collection, addDoc,getDocs, doc, deleteDoc,setDoc } from "firebase/firestore";

class FirebaseApi {
    constructor (db){
        this.db = db
    }
    async getWord(){
        const wordList = []
        const getWordList = await getDocs(collection(this.db, "word"));
        getWordList.forEach((doc) => {
            wordList.push({...doc.data(),id:doc.id})
        });
        return wordList
    }

    async addWord(word,desc,ex,date){
        return  await addDoc(collection(this.db, "word"), {
                word,
                desc,
                ex,
                date
            })
    }

    async deleteWord(id){
        await deleteDoc(doc(this.db, "word", id));
    }

    async editWord(word,desc,ex,id,date){
        return await setDoc(doc(this.db, "word", id), {
            word,
            desc,
            ex,
            date
        })
    }
}
export default FirebaseApi