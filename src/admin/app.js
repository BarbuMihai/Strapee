import themes from "strapi-code-themes";
import BILogo from "./assets/BILogo.png";
import BILicon from "./assets/BILicon.ico";

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
