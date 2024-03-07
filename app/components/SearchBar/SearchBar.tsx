import SearchIcon from "public/icons/Search"

function SearchBar({ value }: { value: string }) {

  return (
    <div className="flex">
      <div className="relative w-full">
        <input defaultValue={value} type="search" name="search" id="search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 rounded-lg border border-s-gray-300 border-y-gray-300" placeholder="Search for books, authors, etc." />
        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

export default SearchBar