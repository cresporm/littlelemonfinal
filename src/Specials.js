import Special from "./Special";
import Greeksalad from "./greeksalad.jpg";
import Lemondessert from "./lemondessert.jpg";
import Bruschetta from "./bruchetta.svg";

function Specials(){

    const specials =
    [
        {
            name: "Greek Salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: "$12.99",
            image: Greeksalad
        },
        {
            name: "Bruschetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with a tomato mixture.",
            price: "$5.99",
            image: Bruschetta
        },
        {
            name: "Lemon Dessert",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: "$5.00",
            image: Lemondessert
        }
    ];
    return(
        <div className="container">
            <div className="Specials">
                <div className="SpecialsHeader">
                    <h2>This week's specials!</h2>
                    <button className="LittleButton">Online Menu</button>
                </div>
                <div className="SpecialDishes">
                    {specials.map((special) => (
                        <Special
                            key={special.name}
                            name={special.name}
                            description={special.description}
                            price={special.price}
                            image={special.image}
                        />
                    ))}
                </div>

            </div>

        </div>

    );
}
export default Specials;