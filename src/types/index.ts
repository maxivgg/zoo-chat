export type AnimalCode = "lion" | "tiger" | "cow";

export type FormValues = {
  animal: AnimalCode;
  text: string;
};

export type AnimalParams = {
  sound: AnimalSound;
};

export type AnimalSound = "roar" | "grrr" | "muuu";
