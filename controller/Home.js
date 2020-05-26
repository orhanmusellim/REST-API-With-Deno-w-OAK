export default {
  index(ctx) {
    const data = {
      title: "Home Page",
    };
    ctx.response.body = data;
  },
};
