import { Outlet } from "@remix-run/react";



export default function BooksPage() {

  return (
    <>
      <p>Layout</p>
      <main>
        <Outlet />
      </main>
    </>
  )
}