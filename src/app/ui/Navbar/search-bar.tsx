'use client'


export default function SearchBar() {
    return (
        <form
            className="w-full max-w-xs border rounded-lg flex items-center py-2 px-3 justify-between focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 ">
            <input type="text" className="appearance-none  w-full bg-transparent  text-gray-700 leading-tight focus:outline-none" placeholder="Search" />
            {/* icon search button */}
            <button type="submit" className="flex items-center justify-center  size-6 p-1 rounded-full hover:bg-slate-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"

                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>
            {/* sign in button */}

        </form>
    )
}