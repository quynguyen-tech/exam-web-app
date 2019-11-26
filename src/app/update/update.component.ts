import { Component, OnInit } from '@angular/core'
import { UserService } from '../core/user.service'
import { AuthService } from '../core/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { User } from '../core/user.model'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  user: User = new User()
  profileForm = new FormGroup({
    studentId: new FormControl(),
    name: new FormControl()
  })

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private router: ActivatedRoute,
    private route: Router,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.router.data)
    this.router.data.subscribe(async routeData => {
      let data = routeData['data']
      if (data) {
        this.user = await this.getProfile(data)
        console.log(this.user)
        this.createForm(this.user)
      }
    })
  }

  async getProfile(data) {
    return await this.userService.getUserProfile(data)
  }

  createForm(user) {
    this.profileForm = new FormGroup({
      studentId: new FormControl(user.studentId),
      name: new FormControl(user.displayName)
    })
  }

  save(value) {
    this.userService.updateCurrentUser(this.user, value).then(
      async res => {
        console.log(res, 'thanh cong')
        this.route.navigate(['/user'])
      },
      err => console.log(err, 'loi')
    )
  }

  logout() {
    this.authService.doLogout().then(
      res => {
        this.location.back()
      },
      error => {
        console.log('Logout error', error)
      }
    )
  }
}
