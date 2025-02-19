/* eslint-disable @next/next/no-img-element */
export default function Hero01() {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8  sm:px-6 lg:px-20">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-zinc-950 p-8 md:p-12 lg:px-16 lg:py-24 rounded-lg">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                                sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                                volutpat quisque ut interdum tincidunt duis.
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
                            src="https://images.unsplash.com/photo-1739652398594-b418fd631543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D"
                            className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                        />

                        <img
                            alt=""
                            src="https://plus.unsplash.com/premium_photo-1730828574028-831312bc36b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
                            className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}