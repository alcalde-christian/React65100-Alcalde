import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where,
    doc,
    getDoc,
    addDoc 
} from "firebase/firestore"
import { app } from "./config"
import Swal from "sweetalert2"

const db = getFirestore(app)

export const getProducts = async (setProducts) => {
    try {
        const querySnapshot = await getDocs(collection(db, "items"))
        const products = []
    
        querySnapshot.forEach((doc) => {
          products.push(doc.data())
        })
    
        setProducts(products)
    } catch (error) {
        Swal.fire({
            title: "Ups!",
            text: "Se ha producido un error al cargar los productos",
            icon: "error",
            footer: error
        })
    }
}


export const getProductsByCategory = async (category, setProducts) => {
    try {
        const q = query(collection(db, "items"), where("category", "==", category))
        const querySnapshot = await getDocs(q)
        const products = []
    
        querySnapshot.forEach((doc) => {
            products.push(doc.data())
        })
    
        setProducts(products)
    } catch (error) {
        Swal.fire({
            title: "Ups!",
            text: "Se ha producido un error al cargar los productos",
            icon: "error",
            footer: error
        })
    }
}

export const getOneProduct = async (id, setProduct) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        setProduct(docSnap.data())
    } else {
        Swal.fire({
            title: "Ups!",
            text: "No se ha encontrado ningún producto con ese código",
            icon: "error"
        })
    }
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        return docRef.id
    } catch (error) {
        Swal.fire({
            title: "Ups!",
            text: "Se ha producido un error al ingresar su orden",
            icon: "error",
            footer: error
        })
    }
}
