import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
function Header() {
  const [inputSearch, setInputSearch] = useState('')
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
          alt=''
        />
      </div>
      <div className='header__center'>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder='Search'
          type='text'
        />
        {/* <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link> */}
        <SearchIcon className='header__searchButton' />
      </div>
      <div className='header__right'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          alt='Nabeel Bhatti'
          src='https://yt3.ggpht.com/yti/ANoDKi7CKckXo6ena8Qm9qyeBHLRAEZ3XqThyKmGb4LU=s88-c-k-c0x00ffffff-no-rj-mo'
        />
      </div>
    </div>
  )
}

export default Header
