import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAOP3AZFxoMcajNl2xItDcyiTGlP0NVVPk',

	authDomain: 'dnsclone2.firebaseapp.com',

	projectId: 'dnsclone2',

	storageBucket: 'dnsclone2.appspot.com',

	messagingSenderId: '200160608112',

	appId: '1:200160608112:web:f014a55258408ff612d9b5',
}

// инициализация firebase
initializeApp(firebaseConfig)

// получение данных из коллекции
export const db = getFirestore()
