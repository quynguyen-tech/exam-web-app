import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise'
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'
import { User } from '../core/user.model'

@Injectable()
export class UserService {
  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) {}

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve(user)
        } else {
          reject('No user logged in')
        }
      })
    })
  }

  updateCurrentUser(user: User, value) {
    console.log(user, value)
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    )
    let result = user.result || []
    result.push(value.result)
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: value.name || user.displayName,
      photoURL: value.photoURL || user.photoURL,
      studentId: value.studentId || user.studentId,
      result
    }
    console.log('data', data)

    return userRef.set(data, { merge: true })
  }
  getUserProfile(data) {
    return this.afs
      .collection('users')
      .doc(data.uid)
      .ref.get()
      .then(user => {
        console.log('0--===', user)
        if (user.exists) {
          console.log('=--- user', user.data())
          return user.data()
        }
        return data
      })
      .catch(function(error) {
        console.log('Error getting document:', error)
        return null
      })
  }
}
