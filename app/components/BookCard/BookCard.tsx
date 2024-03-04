import { shortenText } from "~/utils"
import LinkButton from "../Button/LinkButton"
import { useWindowSize } from "~/hooks/useWindowQuery"
import { breakpoints } from "./../../../constants"
import { useMediaQuery } from "usehooks-ts"

type TBookCardProps = {
  book: IVolumeInfo
}

function BookCard({ book }: TBookCardProps) {

  const isMediaXs = useMediaQuery(`(max-width: ${breakpoints.xxs})`, { defaultValue: false })

  return (
    <>
      <div className="flex flex-col justify-center min-h-[350px]">
        <div className="flex gap-4 mb-4">
          {(book.imageLinks?.thumbnail && !isMediaXs) && (
            <img
              src={book.imageLinks?.thumbnail}
              alt={book.title + " cover"}
              className="h-auto w-[75px] object-scale-down md:w-[200px] md:justify-self-center"
            />
          )}
          <div>
            <h2 className="heading-200 justify-self-center">{book.title}</h2>
            <p>{shortenText(book.description) || "No description available"}</p>
          </div>
        </div>
        <div className="flex justify-between xs:justify-around mt-auto sm:justify-end sm:gap-4">
          <LinkButton href="/books">
            Test Primary
          </LinkButton>
          <LinkButton href="/books" type='secondary'>
            Test Secondary
          </LinkButton>
        </div>
      </div>
    </>
  )
}

export default BookCard