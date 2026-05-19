const getBanner = (req, res) => {
  res.send("get banner");
};

const getAllBanner = (req, res) => {
  res.send("get all banner");
};

const createBanner = (req, res) => {
  res.send("create banner");
};

const updateBanner = (req, res) => {
  res.send("update banner");
};

const deleteBanner = (req, res) => {
  res.send("delete banner");
};

export { getBanner, getAllBanner, createBanner, updateBanner, deleteBanner };
