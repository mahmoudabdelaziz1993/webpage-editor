import { Config } from "@measured/puck";
import Navbar from "./ui/Navbar";
import Hero01 from "./ui/Hero/01";
import ProductCollection01 from "./ui/Product/Collection/01";
import Footer from "./ui/Footer";

export const config: Config = {
    components: {
        Header: {
            render: () => <Navbar />
        },
        Hero: {
            render: () => <Hero01 />
        },
        ProductsCollection: {
            render: () => <ProductCollection01 />
        },
        Footer: {
            render: () => <Footer locale="en" />
        }
    }
}