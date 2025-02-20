import Link from "next/link";
import CartButton from "./cart-button";
import SearchBar from "./search-bar";
import Image from "next/image";

export default function Navbar({ storeName, logoImage }: {
    storeName: string;
    logoImage: string;
}) {
    return (
        <div className="w-full    bg-zinc-50 text-zinc-950 placeholder: shadow-md">
            <div className="mx-auto  lg:px-20 py-5 px-5 max-w-screen-2xl gap-6 flex justify-between items-center ">
                {/* Start  */}
                <div className="">
                    {/* Logo & title */}
                    <div className="flex gap-3 items-center">
                        {/* Logo */}
                        {logoImage ?
                            <div className="size-12   relative">
                                <Image
                                    src={logoImage}
                                    alt="Responsive image"
                                    layout="fill"
                                    objectFit="contain" // Ensures the image covers the container
                                />
                            </div>
                            :
                            (<div className="size-10">
                                {/* SllM svg */}
                                <svg
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30.0621 0H0V33.913C0 37.2671 2.73291 39.8758 5.96272 39.8758H8.69565H14.2857H17.2671H22.8571H26.2112H31.677H31.8012V25.3416H26.2112V33.913H22.8571V17.1429H17.2671V34.0373H14.2857V8.4472H8.69565V33.913H5.96272V5.96273H30.0621C32.1739 5.96273 34.0372 7.70186 34.0372 9.93789V40H40V9.81366C40 4.34783 35.5279 0 30.0621 0Z"
                                        fill="currentColor"
                                    />
                                </svg>

                            </div>)}
                        {/* Title */}
                        <h3 className="text-2xl font-bold hidden lg:block whitespace-nowrap ">
                            {storeName}
                        </h3>
                    </div>

                </div>
                {/* End */}
                <div className="flex gap-6 items-center ">
                    {/* SearchBar */}
                    <SearchBar />
                    {/* Cart button */}
                    <CartButton />
                    {/*                Sign in */}
                    <Link href="!#"
                        className="flex items-center justify-center  py-3 px-5 bg-zinc-950 text-white rounded-lg hover:bg-zinc-800"
                    >
                        الدخول
                    </Link>
                </div>
            </div>
        </div>
    );
}