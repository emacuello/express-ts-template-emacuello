import 'dotenv/config';
import * as joi from 'joi';

interface Env {
	PORT: number;
}
const envsSchema = joi
	.object({
		PORT: joi.number().required(),
	})
	.unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}
export const envs = value as Env;
