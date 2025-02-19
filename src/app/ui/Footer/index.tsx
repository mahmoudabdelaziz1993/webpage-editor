import LanguageSwitcher from "../LanguageSwitcher";

export default function Footer({ locale }: {
    locale: "en" | "ar"
}) {
    return (
        <footer className="bg-zinc-950 text-zinc-50 ">
            <div className="px-6 py-6 lg:px-20 flex flex-col gap-4 mx-auto max-w-screen-2xl">
                {/* top section */}
                <div className="flex w-full justify-between items-center">
                    {/* start */}
                    {/* Logo & title */}
                    <div className="flex w-full max-w-xs gap-3 items-center">
                        {/* Logo */}
                        <div className="size-10">
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

                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-bold hidden lg:block text-inherit ">
                            شعار الموقع
                        </h3>
                    </div>
                    {/* center */}
                    {/* social icons */}
                    <div className="flex-1 grid place-items-center w-full">
                        <ul className="flex items-center gap-4">
                            {/* Facebook */}
                            <li>
                                <a href="!#" target="_blank" className="p-4 flex items-center justify-center rounded-full hover:bg-zinc-100/20" >
                                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.001 19.938a8.001 8.001 0 0 0-1-15.938a8 8 0 0 0-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.73 2.73 0 0 1 12.537 6.9c.382-.205.857-.328 1.687-.381q.494-.032 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.73.73 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></path></svg>
                                </a>
                            </li>
                            {/* Twitter */}
                            <li>
                                <a href="!#" target="_blank" className="p-4 flex items-center justify-center rounded-full hover:bg-zinc-100/20" >
                                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>
                                </a>
                            </li>
                            {/* Instagram */}
                            <li>
                                <a href="!#" target="_blank" className="p-4 flex items-center justify-center rounded-full hover:bg-zinc-100/20" >
                                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path><path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"></path></g></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* end */}
                    {/* controls */}
                    <div className="flex w-full max-w-xs gap-3 justify-end">
                        <LanguageSwitcher locale={locale} />
                    </div>
                </div>
                {/* divider */}
                <div className="border-t border-current"></div>
                {/* bottom section */}
                <div className="flex justify-between items-center gap-3">
                    {/* start */}
                    <div className="">
                        {/* policy Links */}
                        <ul className="flex items-center gap-4 list-none ">
                            {/* Privacy Policy */}
                            <li>
                                <a href="!#" className="text-sm hover:underline hover:underline-offset-4" target="_blank">
                                    سياسة الخصوصية                            </a>
                            </li>
                            {/* Terms & Conditions */}
                            <li>
                                <a href="!#" className="text-sm hover:underline hover:underline-offset-4" target="_blank">
                                    شروط الاستخدام                            </a>
                            </li>
                            {/* Return Policy */}
                            <li>
                                <a href="!#" className="text-sm hover:underline hover:underline-offset-4" target="_blank">
                                    سياسة الاسترجاع                            </a>
                            </li>
                        </ul>
                    </div>
                    {/* end */}
                    {/* contact list */}
                    <div className="">
                        <ul className="flex items-center gap-4 list-none justify-end">
                            {/* Call us */}
                            <li>
                                <a href="!#" className="text-sm hover:underline hover:underline-offset-4 [&_svg]:size-4 inline-flex gap-2 items-center" target="_blank">


                                    <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.665 11.7749V13.7749C14.6657 13.9605 14.6277 14.1443 14.5533 14.3144C14.479 14.4845 14.3699 14.6372 14.233 14.7628C14.0962 14.8883 13.9347 14.9838 13.7588 15.0433C13.5829 15.1028 13.3966 15.1249 13.2117 15.1082C11.1602 14.8853 9.18966 14.1843 7.45833 13.0615C5.84755 12.038 4.48189 10.6723 3.45833 9.06152C2.33165 7.32233 1.63049 5.34219 1.41166 3.28152C1.395 3.09717 1.41691 2.91136 1.47599 2.73594C1.53508 2.56052 1.63004 2.39932 1.75484 2.2626C1.87964 2.12589 2.03153 2.01666 2.20086 1.94187C2.37018 1.86708 2.55322 1.82836 2.73833 1.82819H4.73833C5.06187 1.82501 5.37552 1.93958 5.62084 2.15054C5.86615 2.36151 6.02638 2.65449 6.07166 2.97486C6.15608 3.6149 6.31263 4.24334 6.53833 4.84819C6.62802 5.08681 6.64744 5.34613 6.59427 5.59544C6.5411 5.84475 6.41757 6.0736 6.23833 6.25486L5.39166 7.10152C6.3407 8.77055 7.72263 10.1525 9.39166 11.1015L10.2383 10.2549C10.4196 10.0756 10.6484 9.95209 10.8977 9.89892C11.1471 9.84575 11.4064 9.86516 11.645 9.95486C12.2498 10.1806 12.8783 10.3371 13.5183 10.4215C13.8422 10.4672 14.1379 10.6303 14.3493 10.8799C14.5608 11.1294 14.6731 11.4479 14.665 11.7749Z" stroke="#E7E7E7" strokeWidth="1.2" strokeLinecap="round" />
                                    </svg>
                                    +966 537 989 704

                                </a>
                            </li>
                            {/* Email us */}
                            <li>
                                <a href="!#" className="text-sm hover:underline hover:underline-offset-4 [&_svg]:size-4 inline-flex gap-2 items-center" target="_blank">
                                    <svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6693 2.50521C14.6693 1.77188 14.0693 1.17188 13.3359 1.17188H2.66927C1.93594 1.17188 1.33594 1.77188 1.33594 2.50521M14.6693 2.50521V10.5052C14.6693 11.2385 14.0693 11.8385 13.3359 11.8385H2.66927C1.93594 11.8385 1.33594 11.2385 1.33594 10.5052V2.50521M14.6693 2.50521L8.0026 7.17188L1.33594 2.50521" stroke="#E7E7E7" strokeWidth="1.2" strokeLinecap="round" />
                                    </svg>
                                    contact@sllm.sa
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};        