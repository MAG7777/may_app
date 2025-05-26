import { useState } from "react";
import { validatePassword, checkPasswordMatch, checkRequiredFields } from "./validators";
import "./RegForm.css";

function RegForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [selectedYear, setSelectedYear] = useState("");
    const [requiredFieldsError, setRequiredFieldsError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const handleNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
        const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedYear(e.target.value);


    const handlePasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPasword = e.target.value;
        setPassword(newPasword);
        setIsPasswordValid(validatePassword(newPasword));
        setPasswordMatch(checkPasswordMatch(password, confirmPassword));

    }


    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPasword = e.target.value;
        setConfirmPassword(newConfirmPasword);
        setPasswordMatch(checkPasswordMatch(password, newConfirmPasword));
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const allFields = checkRequiredFields([
            name,
            email,
            password,
            confirmPassword,
            selectedYear
        ]);

        const isFormValid = allFields && isPasswordValid && passwordMatch;

        if (!isFormValid) {
            setRequiredFieldsError(true);
            setShowSuccessMessage(false);

            return;

        }

        setRequiredFieldsError(false);
        setShowSuccessMessage(true);

        const formData = {
            name,
            email,
            password,
            confirmPassword,
            selectedYear,
        };

        alert(JSON.stringify(formData, null, 2));

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    }

    const handleReset = () => {
        setName("");
        setEmail("");
        setPassword("");
        setIsPasswordValid(true);
        setConfirmPassword("");
        setSelectedYear("");
    };

    const years = Array.from(
        { length: 40 },
        (_, i) => new Date().getFullYear() - i);




    return (
        <div className="section">
            <h1>Registration form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={handleNameChanged} />
                <input type="email" placeholder="Email" onChange={handleEmailChanged} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChanged} />
                {
                    !isPasswordValid && (
                        <div className="error-message">
                            The password must contain Latin letters and numbers and be at least 8 characters long.
                        </div>
                    )
                }
                <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                {
                    !passwordMatch && (
                        <div className="error-message">
                            The passwords don't match yet
                        </div>
                    )
                }

                <select value={selectedYear} onChange={handleYearChange}>
                    <option value="">Date of graduation:</option>
                    {
                        years.map((year) => (
                            <option key={year.toString()} value={year}>{year}</option>
                        ))
                    }
                </select>

                <button type="submit">Submit</button>
                <button type="reset" onClick={handleReset}>Clear form</button>
                {
                    requiredFieldsError && (
                        <div className="error-message">Check that the form fields are filled in</div>

                    )
                }

                {
                    showSuccessMessage && (
                        <div className="success-message">Data sent successfully</div>

                    )
                }
            </form>
        </div>
    );
}

export default RegForm;