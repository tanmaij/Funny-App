import coca from "./coca.jpg";
import fanta from "./fanta.jpg";
import sprite from "./sprite.jpg";
import sting from "./sting.jpg";
import white from "./white.jpg";

class Image {
  constructor(type, image) {
    this.type = type;
    this.image = image;
  }
  GetImage = (type) => {
    return this.type == type;
  };
}
const images = [
  new Image("coca", coca),
  new Image("fanta", fanta),
  new Image("sprite", sprite),
  new Image("sting", sting),
  new Image("white", white),
];
export default images;
