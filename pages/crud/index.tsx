import { useEffect } from "react";
import { app, db } from "../../firebaseConfig";
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
const Index = () => {
    const userRef = collection(db, 'user')

    const addToDatabase = async () => {
        await addDoc(userRef, {
            name: "User2",
            email: 'user2@gmail.com'
        }).then(() => alert('data added'))
            .catch(error => console.log(error))
    }

    const getData = async () => {
        // await getDocs(userRef)
        //     .then(res => {
        //         console.log(res.docs.map(item => {
        //             return {...item.data(), id: item.id}
        //         }))
        //     } )
        //     .catch(error => alert(error.message))

        //Realtime update
        onSnapshot(userRef,
            (res) => {
                console.log(res.docs.map(item => {
                    return { ...item.data(), id: item.id }
                }))
            })
    }

    useEffect( ()=> {
        getData()
    } )

    const updateData = async () => {
        const docToUpdate = doc(db, 'user', '8ZcsUdWiANo3Pee8enJ8');
        await updateDoc(docToUpdate, {
            email: 'email@gmail.com',
            password: 'wordpass'
        }).then(() => alert('dataUpdated'))
            .catch(error => alert(error.message))
    }

    const deleteData = async () => {
        const docToUpdate = doc(db, 'user', '8ZcsUdWiANo3Pee8enJ8');
        await deleteDoc(docToUpdate,).then(() => alert('data Deleted'))
            .catch(error => alert(error.message))
    }

    return (
        <div className="flex flex-col gap-2 align-center justify-center mt-5">
            <button
                onClick={addToDatabase}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add to db
            </button>

            <button
                onClick={getData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Get data.check in console
            </button>

            <button
                onClick={updateData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Get data.check in console
            </button>

            <button
                onClick={deleteData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Get data.check in console
            </button>

        </div>
    );
};

export default Index;
