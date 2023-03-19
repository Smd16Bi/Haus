import { nanoid } from 'nanoid'
import hero from "../assets/hero.png"
import benefit1 from "../assets/benefit1.png"
import benefit2 from "../assets/benefit2.png"
import benefit3 from "../assets/benefit3.png"

function id() {
    return nanoid();
}
let store = {
    _state: {
        header: {
            announcer: [
                { slide: "Enjoy free delivery on orders above $50" },
                { slide: "Get free shipping when you spend $50 or more" },
                { slide: "Get free shipping on orders over $50 today!" },
            ],
            navLeft: [
                { id: id(), link: "Shop", path: "/shop" },
                { id: id(), link: "Membership", path: "/membership" },
                { id: id(), link: "Our story", path: "/our-story" }
            ],
            navRight: [
                { id: id(), link: "Newsletter", path: "/newsletter" },
                { id: id(), link: "Account", path: "/account" },
                { id: id(), link: "Cart", path: "/cart" }
            ]
        },
        section: {
            heroBanner: {
                img: hero,
                title: "Alcohol for the modern drinker",
                subTitle: "Light and refreshing flavors made with real, clean ingredients you can feel good about. Just pour, sip, and enjoy.",
                urlBtn: "",
                urlTitle: "Shop ALL"
            },
            benefit: [
                { id: id(), text: "What makes Haus so special is its incredible flavors.", img: benefit1, alt: "Food & Wine" },
                { id: id(), text: "For the wine or cocktail lover whos tried it all and wants something new and refreshing.", img: benefit2, alt: "The New York Times" },
                { id: id(), text: "Cleaner, responsibly sourced, and lower in alcohol.", img: benefit3, alt:"Bon appetit"  }
            ]
        }
    },
    _callSubscribe() {
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },
    getState() {
        return this._state;
    },
}

export default store