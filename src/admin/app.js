import themes from "strapi-code-themes";

const config = {
  locales: [],
  theme: {
    colors: themes.dracula,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
