function Special(props){

    return(
        <div className="Special">
            <img src={props.image} alt="Special" width="200" />

            <div className="SpecialDetails">
                <div className="SpecialsHeader">
                    <h3>{props.name}</h3>
                    <p className="precio">{props.price}</p>
                </div>
                <p >{props.description}</p>
                <a href="#order">Order a delivery</a>
            </div>

        </div>

    );
}
export default Special;