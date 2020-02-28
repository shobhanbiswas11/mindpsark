const _ = require("lodash");

module.exports = function paginate(model) {
  return async (req, res, next) => {
    const startIndex = (req.query.page - 1) * req.query.limit;
    const endIndex = req.query.page * req.query.limit;
    const otherQuery = _.pickBy(req.query, (value, key) => {
      return ["page", "limit"].indexOf(key) === -1;
    });

    const totalNoOfData = await model.find(otherQuery).countDocuments();
    const data = await model
      .find(otherQuery)
      .limit(parseInt(req.query.limit))
      .skip(startIndex);

    res.paginatedResult = {
      paginatedArr: data,
      pervPage:
        parseInt(req.query.page) === 1 ? null : parseInt(req.query.page) - 1,
      nextPage: endIndex > totalNoOfData ? null : parseInt(req.query.page) + 1
    };

    next();
  };
};
