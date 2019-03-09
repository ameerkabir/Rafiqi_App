const homepage = (req, res) => {
  const { country, wantToStartOwnBusines , bachelor} = req.query;
  console.log({ country }, { wantToStartOwnBusines });

  if (country === 'UK' && wantToStartOwnBusines) {
    res.status(200).json({
      message:
        'we suggest a integration related Training opportunity provided by Refugee Start Force you can now apply here:'
    });
  }
  // res.status(200).json('This is The homepage')
};
module.exports = homepage;
