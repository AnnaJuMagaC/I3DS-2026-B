import React from 'react'

const LinkSocial = ({url, icon}) => {
  return (
    <a href={url}>
        <ion-ion name={icon}></ion-ion>
    </a>
  )
}

export default LinkSocial
