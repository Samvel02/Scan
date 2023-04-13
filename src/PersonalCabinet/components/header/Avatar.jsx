import React from 'react'
import AvatarImg from '../../../images/Avatar/Avatar.svg'

const Avatar = () => {
  return (
    <div className='containerAvatar'>
        <div className='textContainerAvatar'>
            <p className='nameContainerAvatar'>Алексей А.</p>
            <button className='btnContainerAvatar'>Выйти</button>
        </div>
        <img src={AvatarImg} alt="img" className='imgAvatar' />
    </div>
  )
}

export {Avatar}