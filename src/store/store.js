import { nanoid } from 'nanoid'
import hero from "../assets/hero.png"

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
                { id: id(), link: "Shop", path: "/shop"},
                { id: id(), link: "Membership", path: "/membership"},
                { id: id(), link: "Our story", path: "/our-story"}
            ],
            navRight: [
                { id: id(), link: "Newsletter", path: "/newsletter"},
                { id: id(), link: "Account", path: "/account"},
                { id: id(), link: "Cart", path: "/cart"}
            ]
        },
        section: {
            heroBanner: {
                img: hero,
                title: "Alcohol for the modern drinker",
                subTitle: "Light and refreshing flavors made with real, clean ingredients you can feel good about. Just pour, sip, and enjoy.",
                urlBtn: "",
                urlTitle: "Shop ALL"
            }
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