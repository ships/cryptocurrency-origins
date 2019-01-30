import React from 'react'
import QRCode from 'qrcode.react'

const QRLinkSized = ({ size, href }) => (
  <a href={href}>
    <QRCode
     value={href}
     size={size}
     bgColor='#FFFFFF00'
    />
  </a>
)

export default QRLinkSized
