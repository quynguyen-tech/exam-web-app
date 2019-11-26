export class User {
  uid: string
  email: string
  photoURL?: string
  displayName?: string
  studentId?: string
  result?: any

  constructor() {
    this.uid = ''
    this.email = ''
    this.photoURL = ''
    this.displayName = ''
  }
}
