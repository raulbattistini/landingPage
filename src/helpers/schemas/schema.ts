import * as Yup from 'yup';

export const registerSchema = Yup.object({
    name: Yup.string().required('É necessário preencher este campo.'),
    email: Yup.string().email('Digite um endereço de email válido.').required('É necessário preencher esse campo.')
})