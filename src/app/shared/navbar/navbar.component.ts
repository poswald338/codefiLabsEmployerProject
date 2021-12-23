import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core'
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'
import { NavigationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private toggleButton: any
  private sidebarVisible: boolean
  private subs = new Subscription()
  home: boolean

  constructor(
    public location: Location, 
    private element: ElementRef, 
    private router: Router) {
    this.sidebarVisible = false
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0]
    this.subs.add(
      this.router.events.subscribe((y: NavigationEnd) => {
        if(y instanceof NavigationEnd) {
          if(this.router.url === '/') {
            this.home = true
          } else {
            this.home = false
          }
        }
      })
    )

  }
  sidebarOpen() {
    const toggleButton = this.toggleButton
    const html = document.getElementsByTagName('html')[0]
    setTimeout(function () {
      toggleButton.classList.add('toggled')
    }, 500)
    html.classList.add('nav-open')

    this.sidebarVisible = true
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0]
    // console.log(html)
    this.toggleButton.classList.remove('toggled')
    this.sidebarVisible = false
    html.classList.remove('nav-open')
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton
    // const body = document.getElementsByTagName('body')[0]
    if (this.sidebarVisible === false) {
      this.sidebarOpen()
    } else {
      this.sidebarClose()
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path())

    if (titlee === '/home') {
      return true
    }
    else {
      return false
    }
  }
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path())
    if (titlee === '/documentation') {
      return true
    }
    else {
      return false
    }
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }
}
