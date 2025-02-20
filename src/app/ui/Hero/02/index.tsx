import Image from "next/image";

export default function Hero02({ heading, description, buttonText, backgroundImage }: { heading: string; description: string; buttonText: string; backgroundImage: string; }) {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8  sm:px-6 lg:px-20">
                {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

                <section
                    className={`overflow-hidden rtl:-scale-1    rounded-lg`}
                >

                    <div className="bg-zinc-950/50    p-8 md:p-12 lg:px-16 lg:py-28 relative">
                        <div className="absolute inset-0 h-full w-full  -z-10 ">
                            <Image src={backgroundImage} alt="Hero image" fill className="object-cover" />
                        </div>
                        {/* <img src="/defaults/Hero02.jpeg" alt="Hero image"
                            className=" "
                        /> */}
                        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">{heading}</h2>

                            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                                {description}
                            </p>

                            <div className="mt-4 sm:mt-8">
                                <a
                                    href="#"
                                    className="inline-block rounded-lg bg-zinc-50 px-12 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-100 focus:ring-3 focus:ring-zinc-100 focus:outline-hidden"
                                >
                                    {buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    )
}