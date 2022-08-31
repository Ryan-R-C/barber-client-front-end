import { toast } from "react-toastify"
import { firebaseStorage } from '../../firebase'


export default async function uploadImage2(newImage, setImage) {
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

    const id = toast.loading("Please wait...")

    const imageName = newImage.name.replace(/ /g, "_")

    const uploadTask = await firebaseStorage.ref(`files/${imageName}`).put(newImage)
    .then(
        () => {
        toast.update(id, { render: "Enviada com sucesso!", type: "success", isLoading: false, autoClose: 5000, closeButton: true, ...basicToast })
        return firebaseStorage
            .ref('files')
            .child(imageName)
            .getDownloadURL()
        }
    )
    .catch(
        (error) => {
            console.log(error)
            toast.update(id, { render: "Algo deu errado...", type: "error", isLoading: false, autoClose: 5000, closeButton: true })
        },
    )
    
        // .on(
        //     "state_changes",
        //     (snapshot) => {
        //         let percentage = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
        //         console.log(percentage)
        //         toast.update(id, { render: `${percentage}%`, isLoading: true })
        //     },
        //     (error) => {
        //         console.log(error)
        //         toast.update(id, { render: "Algo deu errado...", type: "error", isLoading: false, autoClose: 5000, closeButton: true })
        //     },
        //     () => {
        //         toast.update(id, { render: "Enviada com sucesso!", type: "success", isLoading: false, autoClose: 5000, closeButton: true, ...basicToast })
        //         return firebaseStorage
        //             .ref('files')
        //             .child(imageName)
        //             .getDownloadURL()
        //     }
        // )
    // )


    console.log("uploadTask")
    console.log(uploadTask)

    setImage && setImage(uploadTask)

    return uploadTask


}