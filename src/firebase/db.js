import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where,
    doc,
    getDoc 
} from "firebase/firestore"
import { app } from "./config"

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
        // Incorporar mensaje aquí
        console.error ("Error al cargar los productos ", error)
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
        // Incorporar mensaje aquí
        console.error ("Error al cargar los productos ", error)
    }
}

export const getOneProduct = async (id, setProduct) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
        setProduct(docSnap.data())
    } else {
        // Incorporar mensaje aquí
        console.log("No such document!");
    }

}