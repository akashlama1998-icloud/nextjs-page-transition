import NavbarBrand from "./brand";
import NavbarMenu from "./menu";
import NavbarRoot from "./root";

type Navbar = {
	Brand: typeof NavbarBrand;
	Menu: typeof NavbarMenu;
	Root: typeof NavbarRoot;
};

const Navbar: Navbar = {
	Brand: NavbarBrand,
	Menu: NavbarMenu,
	Root: NavbarRoot,
};

export default Navbar;
