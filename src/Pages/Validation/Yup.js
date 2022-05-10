import { object, string } from 'yup';


const schema = object({
    name: string().required(),
    email: string().email().required(),
    phone: string().required().min(10).max(10)
})

export default schema;