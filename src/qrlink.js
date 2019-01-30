import React from 'react'
import QRCode from 'qrcode.react'

const QRLink = ({ href }) => (
  <a href={href}>
    <QRCode
     value={href}
     size={512}
     bgColor='#FFFFFF00'
    />
  </a>
)

export default QRLink
