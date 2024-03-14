'use client'

const serviceTypes: string[] = ['ऋण', 'बचत', 'बीमा', 'अन्य'];


import { useState, ChangeEvent, FormEvent } from "react";
import { PhotoIcon } from "@heroicons/react/16/solid";
import * as yup from 'yup';

interface FormData {
    title: string;
    description: string;
    type: string;
    cover: File | null;
}

const schema = yup.object().shape({
    title: yup.string().required('शीर्षक आवश्यक क्षेत्र हो'),
    description: yup.string().required('विवरण आवश्यक क्षेत्र हो'),
    type: yup.string().oneOf(['ऋण', 'बचत', 'बीमा', 'अन्य']).required('प्रकार निम्न मान मध्ये एक हुनुपर्छ: ऋण, बचत, बीमा, अन्य'),
    cover: yup.mixed().required('कभर एक आवश्यक क्षेत्र हो'),
});

const ServiceFormComp = () => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        description: "",
        type: "",
        cover: null
    });
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData({ ...formData, cover: file });
        setSelectedImage(file ? URL.createObjectURL(file) : "");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await schema.validate(formData, { abortEarly: false });
            setErrors([]);
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('type', formData.type);
            formDataToSend.append('cover', formData.cover as Blob);
                            const response = await fetch('/api/services/add', {
                                method: "POST",
                                body: formDataToSend
                            });
                            console.log(await response.json());
                        
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                setErrors(error.errors);
            }
            console.error("Form validation error:", error);
        }
    };

    return (
        <div className=" flex justify-between items-center max-w-4xl mx-auto px-3 bg-gray-100 rounded-md py-5">
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block font-semibold text-gray-700 dark:text-white mb-2">शीर्षक</label>
                    <input type="text" placeholder="सेवाको शीर्षक" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 w-full border bg-white outline-none focus:outline-green-500 rounded-lg" />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block font-semibold text-gray-700 dark:text-white mb-2">विवरण</label>
                    <textarea id="description" placeholder="सेवाको लागि विवरण लेख्नुहोस्" name="description" value={formData.description} onChange={handleChange} className="mt-1 p-2 w-full border outline-none bg-white focus:outline-green-500 rounded-lg"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block font-semibold text-gray-700 mb-2 dark:text-white">प्रकार</label>
                    <select id="category" name="type" value={formData.type} onChange={handleChange} className="mt-1 outline-none p-2 w-full bg-white border rounded-lg">
                        <option value="">प्रकार चयन गर्नुहोस्</option>
                        {serviceTypes.map((category) => (
                            <option className="outline-none" value={category} key={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4 mt-5">
                    <label htmlFor="cover" className="w-full">
                        <input type="file" id="cover" accept="image/*" name="cover" onChange={handleFileChange} hidden />
                        <div className=" h-40 rounded flex bg-white px-6 py-2 items-center justify-center border-2 border-dashed cursor-pointer">
                            {selectedImage ? (
                                <img src={selectedImage} className="h-full w-full object-cover" alt="" />
                            ) : (
                                <span className="flex gap-x-5 items-center">
                                    <PhotoIcon className="h-8 w-8 block text-gray-800" />
                                    आवरण तस्वीर चयन गर्नुहोस्</span>
                            )}
                        </div>
                    </label>
                </div>
                {errors.length > 0 && (
                    <div className="mb-4 text-red-500">
                        {errors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}
                <div className="flex items-end justify-end">
                <button type="submit" className="tracking-wide px-7 self-end py-3 rounded-md bg-green-500 hover:bg-green-600 text-white">सेवा थप्नुहोस्</button>

                </div>
            </form>
            
        </div>
    );
};

export default ServiceFormComp;
