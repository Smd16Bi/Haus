import { nanoid } from 'nanoid'
import hero from "../assets/hero.png"
import benefit1 from "../assets/benefit1.png"
import benefit2 from "../assets/benefit2.png"
import benefit3 from "../assets/benefit3.png"
import prod1 from "../assets/prod1.png"
import prod2 from "../assets/prod2.png"
import prod3 from "../assets/prod3.png"

function id() {
    return nanoid();
}

const ADDCART = "Add cart"
const PLUS = "Plus"
const MINUS = "Minis"

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
                { id: id(), text: "Cleaner, responsibly sourced, and lower in alcohol.", img: benefit3, alt: "Bon appetit" }
            ],
            featured: {
                title: "Made with natural ingredients, nothing fake",
                urlBtn: "",
                urlTitle: "Shop All Flavors"
            }
        },
        cart: [],
        products: [
            {
                id: id(),
                name: "The Sampler Kit",
                description: "Try a variety of Haus flavors with our customizable four-bottle kit. Each bottle serves 2-3 drinks.",
                price: 20.00,
                img: prod1,
                alt: "Product name The Sampler Kit",
                isBestSeller: false
            },
            {
                id: id(),
                name: "Grapefruit Jalapeño",
                description: "Light and refreshing, this aperitif is a bright blend of citrus with a subtle kick of fresh jalapeño.",
                price: 25.00,
                img: prod2,
                alt: "Product name Grapefruit Jalapeño",
                isBestSeller: true
            },
            {
                id: id(),
                name: "Citrus Flower",
                description: "A fresh Californian take on the apéritif. Made with crisp lemon and subtle elderflower.",
                price: 30.00,
                img: prod3,
                alt: "Product name Citrus Flower",
                isBestSeller: true
            }
        ]
    },
    _callSubscribe() {
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        switch (action.type) {
            case ADDCART:
                let selectProduct = {
                    id: "",
                    name: "",
                    img: "",
                    quantity: 0,
                    price: 0,
                }
                this._state.products.filter(el => {
                    if (el.id === action.id) {
                        selectProduct.id = el.id;
                        selectProduct.name = el.name;
                        selectProduct.img = el.img;
                        selectProduct.price = el.price;
                        selectProduct.quantity = 1;
                    }
                    return el
                })
                this._state.cart.push(selectProduct);
                this._callSubscribe(this._state);
                break;
            case PLUS:
                action.obj.filter(el => {
                    if (el.id === action.id) {
                        el.quantity++;
                        el.total = el.quantity * el.price
                        return el
                    } else {
                        return el
                    }
                })
                this._callSubscribe(this._state);
                break
            case MINUS:
                action.obj.filter(el => {
                    if (el.id === action.id && el.quantity >= 2 ) {
                        el.quantity--;
                        el.total = el.quantity * el.price
                        return el
                    } else {
                        return el
                    }
                })
                this._callSubscribe(this._state);
                break
            default:
                break;
        }
    }
}

export const actionCreateAddToCart = (id) => {
    return { type: ADDCART, id: id }
}
export const actionCreatePlus = (id, obj) => {
    return { type: PLUS, id: id, obj: obj }
}
export const actionCreateMinus = (id, obj) => {
    return { type: MINUS, id: id, obj: obj }
}

export default store