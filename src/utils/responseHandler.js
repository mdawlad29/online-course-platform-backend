const successHandler = (res, { message, data = {}, statusCode = 200 }) => {
  res.status(statusCode).json({
    data: data,
    success: true,
    message: message,
    statusCode: statusCode,
  });
};

const errorHandler = (res, { message, data = {}, statusCode = 500 }) => {
  res.status(statusCode).json({
    data: data,
    success: false,
    message: message,
    statusCode: statusCode,
  });
};

export { successHandler, errorHandler };
