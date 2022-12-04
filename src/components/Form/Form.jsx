import React from 'react'
import "./Form.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {saveOrder} from '../../services/saveOrder'

const Form = ({products, total, handleClose}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            direction: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'El maximo son 15 caracteres')
                .min(2, 'El minimo son 2 caracteres')
                .matches(/^[aA-zZ\s]+$/, "Solo letras")
                .required('* Requerido'),
            phone: Yup.number()
                .required('* Requerido'),
            email: Yup.string()
                .email('Direccion de email invalida')
                .required('* Requerido'),
            emailConfirmation: Yup.string()
                .email('Direccion de email invalida')
                .oneOf([Yup.ref('email'), null], 'Los emails deben coincidir')
                .required('* Requerido'),
            direction: Yup.string()
                .max(30, 'El maximo son 30 caracteres')
                .matches(/^[aA-zZ\s]+$/, "Solo letras")
                .required('* Requerido'),
        }),
        onSubmit: values => {
            const buyer = values
            saveOrder(buyer, products, total, handleClose)
        },
        });
    return (
        <div className='form-container'>
            <div className='close-button'>
                <button onClick={handleClose}>X</button>
            </div>
            <form className='form-content' onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input className={formik.touched.name && formik.errors.name ? "error" : ""} type="text" name="name" id='name' onChange={formik.handleChange} value={formik.values.name}/>
                <label htmlFor="email">Email:</label>
                <input className={formik.touched.email && formik.errors.email ? "error" : ""} type="email" name="email" id='email' onChange={formik.handleChange} value={formik.values.email}/>
                <label htmlFor="email">Confirmar email:</label>
                <input className={formik.touched.emailConfirmation && formik.errors.emailConfirmation ? "error" : ""} type="email" name="emailConfirmation" id='emailConfirmation' onChange={formik.handleChange} value={formik.values.emailConfirmation}/>
                <label htmlFor="phone">Telefono:</label>
                <input className={formik.touched.phone && formik.errors.phone ? "error" : ""} type="tel" name="phone" id='phone' onChange={formik.handleChange} value={formik.values.phone}/>
                <label htmlFor="direction">Dirección:</label>
                <input className={formik.touched.direction && formik.errors.direction ? "error" : ""} type="text" name="direction" id='direction' onChange={formik.handleChange} value={formik.values.direction}/>
                <button type="submit">Confirmar</button>
            </form>
        </div>
    )
}

export default Form