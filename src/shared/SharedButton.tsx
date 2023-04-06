import React, { useCallback } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Page } from './types'

type Props = {
    children: React.ReactNode,
    toPage: Page,
    setCurrentPage: (page: Page) => void
}

const SharedButton = ({ children, toPage, setCurrentPage }: Props) => {
    const setCurrentPageCached = useCallback(setCurrentPage, [toPage])
    return (
        <AnchorLink
        className="rounded-md bg-s-500 px-10 py-2 hover:bg-p-500 hover: text-white"
        onClick={() => setCurrentPageCached(toPage)}
        href={`#${toPage}`}
        >{ children }</AnchorLink>
    )
}

export default SharedButton