import Image from "next/image";
import styles from "./ContactFormComponent.module.scss";
import data from "@/modules/es.json";
import React from "react";

interface ContactFormValues {
    name: string;
    lastname: string;
    phone: string;
    mail: string;
    consultation: string;
}

interface ContactRadioValues {
    comercio: string,
    logistica: string,
    gestion: string,
    administracion: string,
    turismo_profesional: string,
    vehiculos: string,
    otros: string,
}

interface Props {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    formValues: ContactFormValues;
    radioValues: ContactRadioValues;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    errorMessage: string;
}

interface InputsLabel {
    text: string,
    value: string,
    placeholder: string

}

interface SelectionOption {
    id: string;
    label: string;
}

export default function ContactFormComponent({ handleSubmit, formValues, radioValues, handleChange, errorMessage }: Props) {
    return (
        <div className={styles["container-section-contact-form"]}>
            <form onSubmit={handleSubmit} className={styles["form"]}>
                <p className={styles["form-title"]}>{data.contact.form.title}</p>

                <div className={styles["container-information"]}>
                    <label className={styles["container-label"]}>
                        Nombre
                        <input
                            required
                            className={styles["container-input"]}
                            placeholder="Escriba aquí"
                            type="text" name="name" value={formValues.name} onChange={handleChange} />
                    </label>

                    <label className={styles["container-label"]}>
                        Apellido
                        <input
                            required
                            className={styles["container-input"]}
                            placeholder="Escriba aquí"
                            type="text" name="lastname" value={formValues.lastname} onChange={handleChange} />
                    </label>
                    <label className={styles["container-label"]}>
                        Teléfono
                        <input
                            required
                            className={styles["container-input"]}
                            placeholder="Escriba aquí"
                            type="text" name="phone" value={formValues.phone} onChange={handleChange} />
                    </label>
                    <label className={styles["container-label"]}>
                        Email
                        <input
                            className={styles["container-input"]}
                            placeholder="Escriba aquí"
                            required
                            type="email" name="mail" value={formValues.mail} onChange={handleChange} />
                    </label>

                    <div className={styles["container-section-check-select"]}>
                        <label className={styles["container-title-checkSelect"]}>
                            {data.contact.form.checkSelect.title}
                        </label>

                        <div className={styles["container-selection"]}>
                            {
                                data.contact.form.checkSelect.checks.map((option: SelectionOption) => {
                                    const optionId = option.id as keyof ContactRadioValues;

                                    return (
                                        <React.Fragment key={option.id}>
                                            <input
                                                type="checkbox"
                                                className={styles["checkbox-input"]}
                                                name={optionId}
                                                value={option.label}
                                                id={optionId}
                                                onChange={handleChange}
                                                checked={radioValues[optionId] === option.label}
                                            />
                                            <label className={styles["form-flex"]} htmlFor={optionId}>
                                                <div className={styles["checkbox"]}>
                                                    <Image className={styles["check-icon"]}
                                                        src={data.contact.form.checkSelect.icon.imgSrc}
                                                        alt={data.contact.form.checkSelect.icon.imgAlt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                </div>
                                                <p className={styles["selection-label"]}>{option.label}</p>
                                            </label>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>



                    </div>

                    <div className={styles["container-section-textarea"]}>
                        <label className={styles["container-label"]}>
                            {data.contact.form.message}
                        </label>

                        <textarea
                            className={styles["container-textarea"]}
                            placeholder={data.contact.form.placeholder}
                            name="consultation"
                            value={formValues.consultation}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className={styles["container-form-button"]}>
                    <button className={styles["form-button"]} type="submit">{data.contact.form.sendButton}</button>
                </div>
                {
                    errorMessage && <p className={styles["text-error-message"]}>{errorMessage}</p>
                }
            </form>
        </div>
    )
}