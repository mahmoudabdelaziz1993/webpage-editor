/* eslint-disable @next/next/no-img-element */
export default function Hero01({ title, description, figure01, figure02 }: { title: string; description: string; figure01: string; figure02: string; }) {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8  sm:px-6 lg:px-20">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-zinc-950 p-8 md:p-12 lg:px-16 lg:py-24 rounded-lg">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                {title}
                            </h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">
                                {description}
                            </p>

                            <div className="mt-4 md:mt-8">
                                <a
                                    href="#"
                                    className="inline-block rounded-lg border border-white bg-white px-12 py-3 text-sm font-medium text-zinc-950 transition hover:bg-transparent hover:bg-zinc-200 focus:ring-3 focus:ring-white focus:outline-hidden"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt=""
                            src={figure01}
                            className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                        />

                        <img
                            alt=""
                            src={figure02}
                            className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}