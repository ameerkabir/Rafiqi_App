export const homepage = (req, res) => {
  console.log('what', req.body);
  res.status(200).json('This is The homepage');
};

export const postData = (req, res) => {
  console.log(req.body)
  res.status(200).json({
    data: req.body
  });
};
