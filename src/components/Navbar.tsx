'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar: React.FC<{}> = () => {
  const [active, setActive] = React.useState<boolean>(false)

  return (
    <>
      <section style={{ paddingTop: '3.25rem' }}>
        <nav
          className='navbar is-fixed-top has-shadow'
          role='navigation'
          aria-label='main navigation'
        >
          <div className='navbar-brand'>
            <Link className='navbar-item' href='/'>
              <Image src='/images/icon.png' alt='Logo image' width='28' height='28' />
            </Link>

            <button
              role='button'
              className={`navbar-burger ${active ? 'is-active' : ''}`}
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasic'
              onClick={() => {
                setActive(!active)
              }}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </button>
          </div>

          <div id='navbarBasic' className={`navbar-menu ${active ? 'is-active' : ''}`}>
            <div className='navbar-start'>
              <Link className='navbar-item' href='/'>
                ホーム
              </Link>
            </div>

            <div className='navbar-end'>
              <a className='navbar-item' rel='me' href='https://www.nicovideo.jp/user/91385177'>
                ニコニコ動画
              </a>

              <a
                className='navbar-item'
                rel='me'
                href='https://youtube.com/channel/UC7OazbQ3Eo9vrkcReXGIZkQ'
              >
                YouTube
              </a>

              <a className='navbar-item' rel='me' href='https://twitter.com/kanomiyanic'>
                Twitter
              </a>
              <a className='navbar-item' rel='me' href='https://mstdn.aoirint.com/@kanomiyanic'>
                Fediverse
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar
