import { useState, type ChangeEvent, type FormEvent } from "react";

// 💡 Обобщённая версия — принимает любой тип T
function useForm<T extends Record<string, string>>(initialState: T) {
    
    
    const [formData, setFormData] = useState<T>(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        return formData;
    };

    return {
        formData,
        handleChange,
        handleSubmit,
    };
}

export default useForm;