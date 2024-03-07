import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import BookCard from "~/components/BookCard/BookCard";
import Card from "~/components/Card/Card";
import SearchBar from "~/components/SearchBar/SearchBar";
import { IBooksResponse } from "~/types/books";

const maxResults = 16

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const query = new URL(request.url).searchParams.get('search')

  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query || 'Harry+Potter'}&startIndex=${0}&maxResults=${maxResults}&key=${process.env.GOOGLE_BOOKS_API_KEY}`);

    const books: IBooksResponse = await response.json()

    return json({
      books,
      query
    })

  } catch (err) {
    console.log(err)
  }
};

export default function BooksIndexPage() {
  const { books, query } = useLoaderData<typeof loader>();


  return (
    <>
      <div className="px-2 md:grid md:grid-cols-2 xl:grid-cols-3">
        <div className="md:col-start-2 md:px-4 xl:col-start-3">
          <Form method='get'>
            <SearchBar value={query || ''} />
          </Form>
        </div>
      </div>
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