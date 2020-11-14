const texthook = async (context) => {
  console.log(context.params.user.email);
  setTimeout(() => {
    console.log("azucar");
  }, 1000);
  return context;
};

module.exports = texthook;
