import * as Yup from 'yup'

const capitalizeFirstLetter = (value) => {
    if (value) {
        return value[0] === value[0].toUpperCase()
    }
    return true
};

export const initialValuesSignUoSchema = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

export const initialValuesSignInSchema = {
    email: '',
    password: '',
}

export const signUpSchema = Yup.object({
    firstName: Yup.string()
    .required('Введите имя.')
    .min(4, 'Имя должно содержать минимум из 4 символов.')
    .test('capitalize-first-letter', 'Первая буква имени должна быть заглавной.', capitalizeFirstLetter),
    lastName: Yup.string()
    .required('Введите фамилию.')
    .min(4, 'Фамилия должна содержать минимум из 4 символов.')
    .test('capitalize-first-letter', 'Первая буква фамилии должна быть заглавной.', capitalizeFirstLetter),
    email: Yup.string().required('Введите почту.').email('Некорректный email.'),
    password: Yup.string().required('Введите пароль.').min(6, 'Пароль должен содержать минимум из 6 символов.')
})

export const signInSchema = Yup.object({
    email: Yup.string().required('Введите почту.').email('Некорректный email.'),
    password: Yup.string().required('Введите пароль.').min(6, 'Пароль должен содержать минимум из 6 символов.')
})