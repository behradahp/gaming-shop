import { Category } from "../@types/api.types";

// Icons
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import GamepadIcon from "@mui/icons-material/Gamepad";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import CasinoIcon from "@mui/icons-material/Casino";
import ModeFanOffIcon from "@mui/icons-material/ModeFanOff";
import AodIcon from "@mui/icons-material/Aod";
import MouseIcon from "@mui/icons-material/Mouse";

// Images
import gamingPhone from "../assets/images/categories/gaming-phone.png";
import gamingLaptop from "../assets/images/categories/gaming-laptop.png";
import gamingConsole from "../assets/images/categories/gaming-console.png";
import gamingAccessories from "../assets/images/categories/gaming-accessories.png";
import giftCard from "../assets/images/categories/gift-card.png";
import games from "../assets/images/categories/games.png";

export const categories: Category[] = [
  {
    id: 1,
    fa_title: "گوشی گیمینگ",
    en_title: "gaming phone",
    icon: PhoneAndroidIcon,
    image: gamingPhone,
    url: "https://api.digikala.com/v1/facet/search/category-mobile-phone/special-features-for-gaming/?facetURL%5B0%5D=category-mobile-phone&facetURL%5B1%5D=special-features-for-gaming&page=1",
    subcategory: [],
  },
  {
    id: 2,
    fa_title: "لپ تاپ گیمینگ",
    en_title: "gaming laptop",
    icon: LaptopMacIcon,
    image: gamingLaptop,
    url: "https://api.digikala.com/v1/promotions/plp_203174334/?page=1",
    subcategory: [],
  },
  {
    id: 3,
    fa_title: "کنسول بازی",
    en_title: "gaming console",
    icon: GamepadIcon,
    image: gamingConsole,
    url: "https://api.digikala.com/v1/categories/game-console/search/?page=1",
    subcategory: [
      {
        id: 31,
        fa_title: "کنسول خانگی",
        en_title: "home gaming console",
        icon: SportsEsportsIcon,
        url: "https://api.digikala.com/v1/categories/station-gaming-consoles/search/?page=1",
      },
      {
        id: 32,
        fa_title: "کنسول دستی و پرتابل",
        en_title: "portable gaming console",
        icon: VideogameAssetIcon,
        url: "https://api.digikala.com/v1/categories/portable-gaming-consoles/search/?page=1",
      },
      {
        id: 33,
        fa_title: "نینتندو",
        en_title: "nintendo",
        icon: ModeFanOffIcon,
        url: "https://api.digikala.com/v1/brands/nintendo/?page=1",
      },
    ],
  },
  {
    id: 4,
    fa_title: "لوازم جانبی کنسول بازی",
    en_title: "gaming accessories",
    icon: HeadphonesIcon,
    image: gamingAccessories,
    url: "https://api.digikala.com/v1/categories/gaming-console-accessories/search/?page=1",
    subcategory: [
      {
        id: 41,
        fa_title: "ست گیمینگ",
        en_title: "gaming set",
        icon: ModeFanOffIcon,
        url: "https://api.digikala.com/v1/tags/gaming-set/?page=1",
      },
      {
        id: 42,
        fa_title: "کیبورد گیمینگ",
        en_title: "gaming keyboard",
        icon: KeyboardIcon,
        url: "https://api.digikala.com/v1/categories/keyboard/search/?types%5B0%5D=4584&page=1",
      },
      {
        id: 43,
        fa_title: "کیس گیمینگ",
        en_title: "gaming case",
        icon: AodIcon,
        url: "https://api.digikala.com/v1/categories/computer-chassis/search/?page=1",
      },
      {
        id: 44,
        fa_title: "ماوس گیمینگ",
        en_title: "gaming mouse",
        icon: MouseIcon,
        url: "https://api.digikala.com/v1/categories/mouse/search/?types%5B0%5D=6170&page=1",
      },
    ],
  },
  {
    id: 5,
    fa_title: "گیفت کارت",
    en_title: "gift card",
    icon: CardGiftcardIcon,
    image: giftCard,
    url: "https://jsonblob.com/api/jsonBlob/1342857875114090496",
    subcategory: [],
  },
  {
    id: 6,
    fa_title: "بازی کنسول",
    en_title: "games",
    icon: CasinoIcon,
    image: games,
    url: "https://jsonblob.com/api/jsonBlob/1342856639543435264",
    subcategory: [
      {
        id: 61,
        fa_title: "بازی ps5",
        en_title: "ps5 games",
        icon: ModeFanOffIcon,
        url: "https://api.digikala.com/v1/facet/search/category-home-console-games/compatible-with-consoles-playstation-5/?facetURL%5B0%5D=category-home-console-games&facetURL%5B1%5D=compatible-with-consoles-playstation-5&page=1",
      },
      {
        id: 62,
        fa_title: "بازی ps4",
        en_title: "ps4 games",
        icon: ModeFanOffIcon,
        url: "https://api.digikala.com/v1/facet/search/category-home-console-games/compatible-with-consoles-playstation-4/?facetURL%5B0%5D=category-home-console-games&facetURL%5B1%5D=compatible-with-consoles-playstation-4&page=1",
      },
      {
        id: 63,
        fa_title: "بازی ایکس باکس ۳۶۰",
        en_title: "xbox 360 games",
        icon: ModeFanOffIcon,
        url: "https://api.digikala.com/v1/facet/search/category-home-console-games/compatible-with-consoles-xbox-360/?facetURL%5B0%5D=category-home-console-games&facetURL%5B1%5D=compatible-with-consoles-xbox-360&page=1",
      },
      {
        id: 64,
        fa_title: "بازی کامپیوتر PC",
        en_title: "pc games",
        icon: ModeFanOffIcon,
        url: "https://api.digikala.com/v1/categories/pc-game/search/?page=1",
      },
    ],
  },
];
