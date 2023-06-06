import styles from '@/styles/Button.module.css'
import classNames from 'classnames'
import React from 'react'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  const buttonClasses = classNames('text-white', 'px-6', 'py-2', className)

  return (
    <button className={`${styles.btn} ${buttonClasses}`} {...props}>
      {children}
    </button>
  )
}

export default Button
