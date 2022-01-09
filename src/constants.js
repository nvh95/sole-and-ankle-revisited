export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phoneMin: 600,
  tabletMin: 950,
};

export const QUERIES = {
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMin / 16}rem)`,
};
