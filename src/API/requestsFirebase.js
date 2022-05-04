import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getDocument, setUser, updateDocument} from "../store/slices/userSlices";
import {doc, getDoc, serverTimestamp, setDoc, updateDoc} from "firebase/firestore";
import {db, storage} from "../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

export const handleLogin = async (email, password, dispatch) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))
        })
        .catch(console.error)
}

export const handleRegister = (email, password, dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))
        })
        .catch(console.error)
}

export const fetchData = async (id, dispatch) => {
    const docSnap = await getDoc(doc(db, `users`, id));
    if (docSnap.exists()) {
        const user = docSnap.data()
        dispatch(getDocument({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            avatar: user.avatar.img,
            preferences: user.preferences,
            country: user.country,
        }))
        console.log(user);
    } else {
        console.log("No such document!");
    }
}

export const uploadFile = (file, setPer, setAvatar) => {
    const name = new Date().getTime() + file.name
    console.log(name)
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setPer(progress)
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    break
            }
        },
        (error) => {
            console.log(error)
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setAvatar((prev) => ({...prev, img: downloadURL}))
            });
        }
    );
}

export const handleAdd = async (
    e, ava, avatar, username, firstname, lastname, country, preferences, dispatch, id
) => {
    e.preventDefault()
    try {
        if (ava !== null) {
            const docRef = await doc(db, `users`, id)
            avatar && (await updateDoc(docRef, {avatar}))
            await updateDoc(docRef, {
                username,
                firstname,
                lastname,
                country,
                preferences,
                timeStamp: serverTimestamp(),
            })
            console.log("Document written with ID: ", docRef.id);
        } else {
            const docRef = await setDoc(doc(db, `users`, id), {
                username,
                firstname,
                lastname,
                country,
                preferences,
                avatar,
                timeStamp: serverTimestamp()
            });
            await dispatch(updateDocument({
                id: docRef.id
            }))
        }
    } catch (err) {
        console.log(err)
    }
    fetchData(id, dispatch)
}