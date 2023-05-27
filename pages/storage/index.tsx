import React, { useState } from "react";
import { storage } from "@/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { error } from "console";

type inputType = React.ChangeEvent<HTMLInputElement>;

const index = () => {
    const [data, setData] = useState({});

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const inputRef = ref(storage, data.name);
        const uploadTask = uploadBytesResumable(inputRef, data);
        uploadTask.on("state_changed",
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                console.log("Upload is " + progress + "% done");

                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },
            error => alert(error.message),
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        );
    };
    return (
        <div>
            <form action="" onSubmit={(e) => handleFileUpload(e)}>
                <input type="file" onChange={(e) => setData(e.target.files[0])} />
                <button type="submit"> Upload </button>
            </form>
        </div>
    );
};

export default index;
