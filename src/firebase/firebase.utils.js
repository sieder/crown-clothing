import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAjD3gB506oYoxuRKl5kDNTV6RH6ujchyE",
    authDomain: "crwn-db-df6b1.firebaseapp.com",
    databaseURL: "https://crwn-db-df6b1.firebaseio.com",
    projectId: "crwn-db-df6b1",
    storageBucket: "",
    messagingSenderId: "775127558743",
    appId: "1:775127558743:web:ee208ce9c16c6f0f3fd112"
}

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    console.log(snapShot)

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase