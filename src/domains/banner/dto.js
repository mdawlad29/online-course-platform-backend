import joi from "joi";

const bannerCreateDto = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  image: joi.string().required(),
});

const bannerUpdateSchema = joi.object({
  title: joi.string().optional(),
  description: joi.string().optional(),
  image: joi.string().optional(),
});

export { bannerCreateDto, bannerUpdateDto };
