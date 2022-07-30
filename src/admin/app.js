import themes from "strapi-code-themes";
import BILogo from "./extensions/BILogo.png";
import BILicon from "./extensions/BILicon.ico";

const config = {
  locales: [],
  theme: {
    colors: themes.dracula,
  },
  menu: {
    logo: BILogo,
  },
  auth: {
    logo: BILogo,
  },
  head: {
    favicon: BILicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
