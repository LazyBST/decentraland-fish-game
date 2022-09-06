import { FISH_CONSTANTS } from "./constants";

export const getRandomSpeed = () => {
  const { MAX_SPEED, MIN_SPEED, PRECISION } = FISH_CONSTANTS;
  const speed =
    (Math.floor(
      Math.random() * (MAX_SPEED * PRECISION - MIN_SPEED * PRECISION)
    ) +
      MIN_SPEED * PRECISION) /
    PRECISION;

  return speed;
};

export const getRandomJump = () => {
  const { MAX_JUMP, MIN_JUMP, PRECISION } = FISH_CONSTANTS;
  const jump =
    (Math.floor(Math.random() * (MAX_JUMP * PRECISION - MIN_JUMP * PRECISION)) +
      MIN_JUMP * PRECISION) /
    PRECISION;

  return jump;
};

export const getRandomFishInitialPositions = () => {
  const {
    X_POS_MAX,
    X_POS_MIN,
    Y_POS_MAX,
    Y_POS_MIN,
    Z_POS_MAX,
    Z_POS_MIN,
    PRECISION,
  } = FISH_CONSTANTS;

  const x =
    (Math.floor(
      Math.random() * (X_POS_MAX * PRECISION - X_POS_MIN * PRECISION)
    ) +
      X_POS_MIN * PRECISION) /
    PRECISION;

  const y =
    (Math.floor(
      Math.random() * (Y_POS_MAX * PRECISION - Y_POS_MIN * PRECISION)
    ) +
      Y_POS_MIN * PRECISION) /
    PRECISION;

  const z =
    (Math.floor(
      Math.random() * (Z_POS_MAX * PRECISION - Z_POS_MIN * PRECISION)
    ) +
      Z_POS_MIN * PRECISION) /
    PRECISION;

  return { x, y, z };
};
