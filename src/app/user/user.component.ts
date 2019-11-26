import { Component, OnInit } from '@angular/core'
import { UserService } from '../core/user.service'
import { AuthService } from '../core/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { User } from '../core/user.model'

@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User()
  profileForm = new FormGroup({
    studentId: new FormControl(),
    name: new FormControl()
  })

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.route.data)
    this.route.data.subscribe(async routeData => {
      let data = routeData['data']
      if (data) {
        this.user = await this.getProfile(data)
        console.log('-s--sd-adardata', data)
      }
    })
  }

  async getProfile(data) {
    return await this.userService.getUserProfile(data)
  }

  createForm() {
    this.profileForm = new FormGroup({
      studentId: new FormControl(),
      name: new FormControl()
    })
  }

  save(value) {
    this.userService.updateCurrentUser(this.user, value).then(
      async res => {
        this.user = await this.getProfile(this.user)
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
