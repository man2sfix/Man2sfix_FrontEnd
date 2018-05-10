import Firebase from 'firebase'
import config from '../../enviroments/firebase'

const firebase = Firebase.initializeApp(config)

export default firebase
