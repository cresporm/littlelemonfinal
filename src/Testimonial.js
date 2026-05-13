import UsrIcon from './abc.jpg'

function Testimonial(){

    return(
        <div className="Testimonial">
            <h3>Rating</h3>
            <div id="user">
                <img src={UsrIcon} alt="Rating" width="100" height="100" />
                <p>Name</p>
            </div>
            <p>Review</p>
        </div>
    );
}export default Testimonial;

