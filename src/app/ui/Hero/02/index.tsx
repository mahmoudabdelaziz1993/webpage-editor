export default function Hero02() {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8  sm:px-6 lg:px-20">
                {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

                <section
                    className="overflow-hidden rtl:-scale-1 bg-[url(https://images.unsplash.com/photo-1561365452-adb940139ffa?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-cover bg-top bg-no-repeat object-bottom rounded-lg"
                >
                    <div className="bg-black/50 backdrop-brightness-75 p-8 md:p-12 lg:px-16 lg:py-28">
                        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Shirts</h2>

                            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
                                doloribus iure architecto quae voluptatum beatae excepturi dolores.
                            </p>

                            <div className="mt-4 sm:mt-8">
                                <a
                                    href="#"
                                    className="inline-block rounded-lg bg-zinc-50 px-12 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-100 focus:ring-3 focus:ring-zinc-100 focus:outline-hidden"
                                >
                                    Get Yours Today
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    )
}