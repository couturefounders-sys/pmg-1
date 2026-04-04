import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';

export interface FirestoreDoc {
  id: string;
  [key: string]: unknown;
}

export async function getCollection(
  collectionName: string,
  orderField: string = 'createdAt',
  orderDirection: 'asc' | 'desc' = 'desc'
): Promise<FirestoreDoc[]> {
  if (!db) {
    console.warn(`Firebase not initialized - returning empty collection for ${collectionName}`);
    return [];
  }
  const q = query(
    collection(db, collectionName),
    orderBy(orderField, orderDirection)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
}

export async function getDocument(
  collectionName: string,
  docId: string
): Promise<FirestoreDoc | null> {
  if (!db) {
    console.warn(`Firebase not initialized - cannot get document from ${collectionName}`);
    return null;
  }
  const docRef = doc(db, collectionName, docId);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}

export async function addDocument(
  collectionName: string,
  data: Record<string, unknown>
): Promise<string> {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  return docRef.id;
}

export async function updateDocument(
  collectionName: string,
  docId: string,
  data: Record<string, unknown>
): Promise<void> {
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

export async function deleteDocument(
  collectionName: string,
  docId: string
): Promise<void> {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
}
