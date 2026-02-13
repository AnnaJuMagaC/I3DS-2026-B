import React from 'react'

const LinkSocial = ({url, icon}) => {
  return (
    <a href={url}>
        <ion-icon name={icon}></ion-icon>
    </a>
  )
}

export default LinkSocial
