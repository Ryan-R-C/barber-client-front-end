import axios from "axios"
import { toast } from "react-toastify"
import { api, ip, porta } from "../api"

import { firebaseStorage } from '../../firebase'
import { useState } from "react"


export default async function uploadImage2(newImage, setImage) {

    // const [ progress, setProgress ] = useState(0)

    const id = toast.loading("Please wait...")



    const imageName = newImage.name.replace(/ /g, "_")

    const uploadTask = firebaseStorage.ref(`files/${imageName}`).put(newImage)

    const basicToast = {
        position:'top-right',
        autoClose:5000,
        hideProgressBar:false,
        newestOnTop:false,
        closeOnClick: true,
        rtl:false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true
    }


    const result = await uploadTask.on(
        "state_changes",
        (snapshot) => {
            let percentage = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
            console.log(percentage)
            toast.update(id, {render: `${percentage}%`, isLoading: true });
        },
        (error) => {
            console.log(error)
            toast.update(id, {render: "Algo deu errado...", type: "error", isLoading: false, autoClose: 5000, closeButton: true });
        },
        () => {
            firebaseStorage
                .ref('files')
                .child(imageName)
                .getDownloadURL()
                .then(imageUrl => setImage(imageUrl))
                toast.update(id, {render: "Enviada com sucesso!", type: "success", isLoading: false, autoClose: 5000, closeButton: true, ...basicToast});
        }
    )




    console.log(result)

    return result


}