import { Config } from "@measured/puck";
import Navbar from "./ui/Navbar";
import Hero01 from "./ui/Hero/01";
import ProductCollection01 from "./ui/Product/Collection/01";
import Footer from "./ui/Footer";
import Hero02 from "./ui/Hero/02";
import ImageUploadField from "./ui/inputs/image upload";

export const config: Config = {
    categories: {
        Navbar: {
            components: ["Header"]
        },
        Hero: {
            components: ["Hero", "Hero02"]
        },
        "Product Collection": {
            components: ["ProductsCollection"]
        },
        Footer: {
            components: ["Footer"]
        }
    },
    components: {

        Header: {

            label: "Navbar e-commerce with search",
            fields: {
                storeName: {
                    type: "text",
                },
                logoImage: {
                    type: "custom", // Add an image upload field
                    label: "Logo Image",
                    render: ({ value, onChange }) => (
                        <ImageUploadField
                            name={"Upload your logo"}
                            value={value}
                            onChange={onChange}
                        />)
                },

            },
            defaultProps: {
                storeName: "Sllm store",
                logoImage: "/globe.svg"
            },
            render: ({ storeName, logoImage }: { storeName: string, logoImage: string }) => <Navbar storeName={storeName} logoImage={logoImage} />
        },
        Hero: {
            label: "Hero with graphic's and text",
            render: () => <Hero01 />
        },
        Hero02: {
            label: "Hero with background image",
            render: () => <Hero02 />
        },
        ProductsCollection: {
            render: () => <ProductCollection01 />
        },
        Footer: {
            render: () => <Footer locale="en" />
        }
    }
}