import { getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { usersCollection, db } from "firestoreService";

export const getUsers = async () => {
  const userSnapshot = await getDocs(usersCollection);
  const userList = userSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return userList;
};

export const setUser = async (newUserData: any) => {
  addDoc(usersCollection, newUserData);
};

export const deleteUser = async (userId: string) => {
  deleteDoc(doc(usersCollection, userId));
};

export const updateUser = async (userId: string, newUserData: any) => {
  updateDoc(doc(usersCollection, userId), newUserData);
};
