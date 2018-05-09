import firebaseApp from 'firebase'
import config from '../../enviroments/firebase'

const firebase = firebaseApp.initializeApp(config)

export default firebase
