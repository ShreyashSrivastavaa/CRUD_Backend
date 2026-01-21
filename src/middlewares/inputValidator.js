import Joi from 'joi';


const userSchemema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});


const validateUserInput = (req, res, next) => {
    const { error } = userSchemema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
export default validateUserInput;