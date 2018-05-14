import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import './Home.css'

class Home extends Component {
  state = {
    links: [
      {
        href: 'mailto:mail@halas.codes?subject=Hello there!',
        icon: 'fal fa-envelope',
        label: 'Mail'
      },
      {
        href: 'https://www.linkedin.com/in/rudolf-halas/',
        icon: 'fab fa-linkedin',
        label: 'LinkedIn'
      },

      {
        href: 'https://github.com/hrcc',
        icon: 'fab fa-github',
        label: 'Github'
      },

      {
        href: 'https://laracasts.com/@HRcc',
        icon: 'fab fa-laravel',
        label: 'Laracasts'
      }
    ]
  }

  render () {
    return (
      <div className="flex flex-col">
        <div className="Page--landing min-h-screen flex flex-col">
          <Navbar links={this.state.links}></Navbar>

          <section className="flex flex-col flex-1 justify-center">
            <h1 className="text-grey-light font-sans font-normal text-shadow">
              I am <span className="font-bold text-shadow2">Rudolf Halás</span>.<br/>
              Product-oriented full-stack engineer<br/>
              based in Slovakia.
            </h1>
          </section>
        </div>
      </div>
    )
  }
}

export default Home
