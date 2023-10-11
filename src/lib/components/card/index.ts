import CardCaption from "./caption";
import CardImage from "./image";
import CardLink from "./link";
import CardRoot from "./root";

type Card = {
	Caption: typeof CardCaption;
	Image: typeof CardImage;
	Link: typeof CardLink;
	Root: typeof CardRoot;
};

const Card: Card = {
	Caption: CardCaption,
	Image: CardImage,
	Link: CardLink,
	Root: CardRoot,
};

export default Card;
