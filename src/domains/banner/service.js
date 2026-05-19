import { errorHandler } from "../../utils/responseHandler.js";
import { bannerCreateDto } from "./dto.js";

const getAllBanner = () => {};

const getBanner = () => {};

const createBanner = async (payload) => {
  const { error, value } = bannerCreateDto.validate(payload);
  if (error) {
    return errorHandler(res, {
      statusCode: 400,
      message: error.details[0].message,
    });
  }

  return await value;
};

const updateBanner = () => {};

const deleteBanner = () => {};

export { createBanner, getAllBanner, getBanner, updateBanner, deleteBanner };
