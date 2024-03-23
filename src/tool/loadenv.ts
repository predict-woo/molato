export const isDev = import.meta.env.DEV; // automatically provided
export const backServer = isDev
  ? import.meta.env.VITE_DEV_BACK_URL
  : import.meta.env.VITE_PROD_BACK_URL; // use proxy in dev mode

// devicet-type 감지
const userAgent = navigator.userAgent.toLowerCase();
const maxTouchPoints = navigator.maxTouchPoints || 0;
export const deviceType = userAgent.includes("taxi-app-webview/ios")
  ? "app/ios"
  : userAgent.includes("taxi-app-webview/android")
  ? "app/android"
  : userAgent.includes("taxi-app-webview")
  ? "app/else"
  : userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ipod") ||
    (userAgent.includes("macintosh") && maxTouchPoints > 1)
  ? "mobile/ios"
  : userAgent.includes("android")
  ? "mobile/android"
  : "else";
