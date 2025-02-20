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
                    label: "Store Name"
                },
                logoImage: {
                    type: "custom", // Add an image upload field

                    render: ({ value, onChange }) => (
                        <ImageUploadField
                            name={"Logo image"}
                            value={value}
                            onChange={onChange}
                        />)
                },

            },
            defaultProps: {
                storeName: "Store Name",
                logoImage: "/defaults/Logo.png"
            },
            render: ({ storeName, logoImage }: { storeName: string, logoImage: string }) => <Navbar storeName={storeName} logoImage={logoImage} />
        },
        Hero: {
            label: "Hero with graphic's and text",
            render: () => <Hero01 />
        },
        Hero02: {
            fields: {
                heading: {
                    type: "text"
                },
                description: {
                    type: "textarea"
                },
                buttonText: {
                    type: "text",
                    label: "Button Text"
                },
                backgroundImage: {
                    type: "custom", // Add an image upload field

                    render: ({ value, onChange }) => (
                        <ImageUploadField
                            name={"Background image"}
                            value={value}
                            onChange={onChange}
                        />)
                },

            },
            defaultProps: {
                heading: "Shirt new arrivals",
                description: "The best T shirts for your style and your budget",
                buttonText: "Get yours today",
                backgroundImage: "/defaults/Hero02.jpeg"
            },
            label: "Hero with background image",
            render: ({ heading, description, buttonText, backgroundImage }: { heading: string, description: string, buttonText: string, backgroundImage: string }) => <Hero02 heading={heading} description={description} buttonText={buttonText} backgroundImage={backgroundImage} />
        },
        ProductsCollection: {
            render: () => <ProductCollection01 />
        },
        Footer: {
            render: () => <Footer locale="en" />
        }
    }
}