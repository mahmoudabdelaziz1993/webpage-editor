import React, { ChangeEvent } from "react";

interface ImageUploadFieldProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ name, value, onChange }) => {
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target?.result as string;
                onChange(imageUrl); // Pass the image URL to Puck
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className=" flex flex-col gap-4">
            <label htmlFor={name} className="text-sm mb-4 inline-flex gap-2">
                <span className="size-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M22.5 18.5h-.304c-.94 0-1.877-.274-2.564-.917a11 11 0 0 1-2.061-2.624l-.82-1.459h-.5l-.822 1.459a11 11 0 0 1-1.75 2.32a4.6 4.6 0 0 1-1.919-1.062a15.3 15.3 0 0 1-2.868-3.674L7.75 10.5h-.498l-1.141 2.043a15.3 15.3 0 0 1-3.286 4.053a3.5 3.5 0 0 1-1.325.722m0 5.182v-21h21v21zm15-13a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z" strokeWidth="1" /></svg>
                </span>
                {name}</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border rounded-sm p-2"
            />
            {value && (
                <div>
                    <img src={value} alt="Uploaded" style={{ maxWidth: "100px", marginTop: "10px" }} />
                </div>
            )}
        </div>
    );
};

export default ImageUploadField;