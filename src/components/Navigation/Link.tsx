import { useCallback } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Page } from "@/shared/types"

type Props = {
    text: string,
    currentPage: Page,
    setCurrentPage: (page: Page) => void
}

const Link = ({ text, currentPage, setCurrentPage }: Props) => {
    const updatedText = text.toLowerCase().replace(/ /g, '-').trim() as Page
    const setCurrentPageCached = useCallback(setCurrentPage, [updatedText])
  return (
    <AnchorLink
        className={`${currentPage === updatedText ? "text-p-500" : ""} hover:text-p-300 transition duration-500`}
        href={`#${updatedText}`}
        onClick={() => setCurrentPageCached(updatedText)}>
        { text }
    </AnchorLink>
  )
}

export default Link
