import React from "react";
import Responsive from "react-responsive";
import * as medias from "./ResponsiveMedias";

//---- Tags for JSX ----//
export const Mobile = (props) => <Responsive {...props} maxWidth={600} />;
export const Tablet = (props) => (
  <Responsive {...props} minWidth={601} maxWidth={1023} />
);
export const MobileTablet = (props) => (
  <Responsive {...props} maxWidth={1023} />
);
export const TabletDesktop = (props) => (
  <Responsive {...props} minWidth={601} />
);
export const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
export const Terminal = (props) => (
  <Responsive {...props} width={1080} height={1920} />
);

//---- media queries for css-js ----//

// export const miniMobile = '@media (max-width: 300px)';
// export const mobile = '@media (max-width: 600px)';
// export const tablet = '@media (min-width: 601px) and (max-width: 1023px)';
// export const mobileTablet = '@media (max-width: 1023px)';
// export const desktop = '@media (min-width: 1024px)';
// export const landscape = '@media screen and (orientation: landscape)';
// export const iPhone = '@media only screen and (min-device-width: 320px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)';
// export const iPad = '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)';
const media = "@media ";
export const miniMobile = media + medias.miniMobile;
export const mobile = media + medias.mobile;
export const tablet = media + medias.tablet;
export const mobileTablet = media + medias.mobileTablet;
export const desktop = media + medias.desktop;
export const landscape = media + medias.landscape;
export const iPad = media + medias.iPad;
export const terminal = media + medias.terminal;

/**
 * has the advantage of being synchronous (unlike when we use redux)
 * @returns {string}
 */
export function getCurrentScreen() {
  let screen = "desktop";
  const width = window.innerWidth;
  const height = window.innerHeight;
  // display screen for mobile
  if (width <= 600 && height <= 1024) {
    screen = "mobile";
  }
  // display screen for tablet
  if (width > 600 && width < 1024 && height <= 1280) {
    screen = "tablet";
  }

  return screen;
}

/*------ page header height -------*/

// for desktop
export const getHeaderHeight = (
  service = "foodcheri",
  withBannerHeight = false,
  headerHeight
) => {
  const isFoodcheriService = service === "foodcheri";
  const isFridgeService = service === "fridge";

  let baseHeight =
    headerHeight || (isFoodcheriService ? 64 : isFridgeService ? 68 : 67);
  if (withBannerHeight) {
    baseHeight += 47;
  }
  return baseHeight;
};

export const HEADER_HEIGHT = 68;
// for mobile
export const MOBILE_HEADER_HEIGHT = 60;
export const ACCOUNT_MOBILE_HEADER_HEIGHT = 50;

/*------ mealPlanner -------*/
export const MOBILE_MEALPLANNER_FILTER_HEIGHT = 45;
export const TABLET_MEALPLANNER_FILTER_HEIGHT = 45;

/*------ window size -------*/
/**
 * Return the width and the height of the window
 */
export function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
