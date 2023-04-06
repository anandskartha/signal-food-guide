import React from 'react'
type Props = {
    children: React.ReactNode
}

const SharedLearnLink = ({ children }: Props) => {
  return (
    <a href="https://food-guide.canada.ca/en/"
        target="_blank"
        rel="noreferrer"
        className='text-sm font-bold text-p-500 underline hover:text-s-500'
    >
        <p>{ children }</p>
    </a>
  )
}

export default SharedLearnLink
