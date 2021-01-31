import React from 'react'
import './icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const IconoNoCompletado = () => {
  return (
    <FontAwesomeIcon icon={faEyeSlash} className="IconoNoCompletado" />
  )
}
