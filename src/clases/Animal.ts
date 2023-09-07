import { AnimalCode, AnimalSound, FormValues, AnimalParams } from "../types/";

class Animal {
  sound: AnimalSound;

  constructor({ sound }: AnimalParams) {
    this.sound = sound;
  }

  speak(text: string) {
    const initialText = text.trim();
    if (!initialText) {
      return "";
    }
    return initialText
      .split(" ")
      .map((word) => `${word} ${this.sound}`)
      .join(" ");
  }
}

class Lion extends Animal {
  constructor() {
    super({ sound: "roar" });
  }
}

class Tiger extends Animal {
  constructor() {
    super({ sound: "grrr" });
  }
}

class Cow extends Animal {
  constructor() {
    super({ sound: "muuu" });
  }
}

const animals: Record<AnimalCode, Animal> = {
  lion: new Lion(),
  tiger: new Tiger(),
  cow: new Cow(),
};

export const getFinalText = ({ animal, text }: FormValues) => {
  const selectedAnimal = animals[animal];
  if (selectedAnimal) {
    return selectedAnimal.speak(text);
  }
  return "";
};
