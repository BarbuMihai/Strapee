import themes from "strapi-code-themes";

const config = {
  locales: [],
  theme: {
    colors: themes.githubDarkMode,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
