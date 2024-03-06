import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";
import invariant from "tiny-invariant";

import { requireUserId } from "~/session.server";
import { IBook } from "~/types/books";


export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.bookId, "Book not found")
  const id = params.bookId.includes("__") ? params.bookId.split("__")[1] : 'error:404'
  if (id === 'error:404') {
    throw new Response("Not Found", { status: 404 });
  }

  console.log(userId)

  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.GOOGLE_BOOKS_API_KEY}`)

  const book: IBook = await response.json()


  if (!book) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ book });
};

export default function BookDetailPage() {
  const data = useLoaderData<typeof loader>();

  const { volumeInfo } = data.book


  return (
    <div className="max-w-medium m-auto">
      <div className="grid grid-cols-5 gap-10">
        {volumeInfo.imageLinks?.thumbnail && (
          <img
            src={volumeInfo.imageLinks.thumbnail}
            alt={`${volumeInfo.title} cover`}
          />
        )}
        <div className="col-span-4">
          <h1 className="heading-100 pb-4">{volumeInfo.title}</h1>
          <div className="flex flex-col gap-2">
            {volumeInfo.subtitle && (
              <h2>{volumeInfo.subtitle}</h2>
            )}
            {volumeInfo.authors && (
              <p><strong>By:</strong> {volumeInfo.authors.join(', ')}</p>
            )}
            {volumeInfo.publishedDate && (
              <p><strong>Published:</strong> {volumeInfo.publishedDate}</p>
            )}
            {volumeInfo.pageCount && (
              <p><strong>Page Count:</strong> {volumeInfo.pageCount}</p>
            )}
          </div>
        </div>
      </div>
      <div className="pt-10">
        <h2 className="heading-200 pb-6">Description</h2>
        <p dangerouslySetInnerHTML={{ __html: volumeInfo.description }}>
        </p>
      </div>
    </div>
  )
}