import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import BookCard from "~/components/BookCard/BookCard";
import Card from "~/components/Card/Card";
import { IBooksResponse } from "~/types/books";

const maxResults = 16

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log(request)
  // const noteListItems = await getNoteListItems({ userId });
  // return json({ noteListItems });
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${'Harry+Potter'}&startIndex=${1}&maxResults=${maxResults}&key=${process.env.GOOGLE_BOOKS_API_KEY}`);

    const books: IBooksResponse = await response.json()

    return json({
      books
    })

  } catch (err) {
    console.log(err)
  }

};

export default function BooksIndexPage() {
  const { books } = useLoaderData<typeof loader>();

  return (
    <>
      {books && (
        <div
          className="md:grid grid-cols-2 xl:grid-cols-3"
        >
          {books.items.map(book => (
            <Card key={book.id}
            >
              <BookCard
                book={book.volumeInfo}
                id={book.id}
              />
            </Card>
          ))
          }
        </div>
      )}
    </>
  )
}