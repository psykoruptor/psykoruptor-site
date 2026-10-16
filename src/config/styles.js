const fireColor = "red";
const shadowColor = "black";
const shineColor = "white";

export const fireShadow0 = `
  drop-shadow(0px -0.5px 0.5px ${shineColor})
  drop-shadow(0px -2px 1.5px ${fireColor})
  drop-shadow(0px 1px 1px ${shadowColor})
  drop-shadow(0px 2px 3px ${shadowColor})
`;

export const fireShadow1 = `
  drop-shadow(0px -2px 2px ${fireColor})
  drop-shadow(0px 2px 2px ${shadowColor})
`;