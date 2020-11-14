export const isMobile = (): boolean => {
  return (
    Cypress.config("viewportWidth") <
    Cypress.env("mobileViewportWidthBreakpoint")
  );
};

export default {
  isMobile
};
