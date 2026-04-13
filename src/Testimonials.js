import Testimonial from "./Testimonial";
function Testimonials(){
    const testimonials = [
        {
            name: "John Doe",
            rating: 5,
            review: "This restaurant is amazing! The food is delicious and the service is excellent. I highly recommend it to everyone."
        },
        {           name: "Jane Smith",         rating: 4,


            review: "I had a great experience at this restaurant. The atmosphere is cozy and the staff is friendly. The only reason I gave it 4 stars instead of 5 is because the wait time was a bit long."
        },
        {       name: "Michael Johnson",         rating: 3,             review: "The food was decent, but nothing extraordinary. The prices were a bit high for the portion sizes. I might give it another try, but I'm not in a hurry to go back."       },
        {            name: "Emily Davis",         rating: 5,             review: "I absolutely loved this restaurant! The menu has a great variety of options and everything I tried was delicious. The staff was attentive and made sure we had a wonderful dining experience. I will definitely be coming back!" }
    ];
    return(
        <div className="Testimonials">
            <div className="container">
                <div className="TestimonialsContent">
                    <h2>Testimonials</h2>
                    <div className="Reviews">
                        {testimonials.map((testimonial)=>(
                            <Testimonial
                                key={testimonial.name}
                                name={testimonial.name}
                                rating={testimonial.rating}
                                review={testimonial.review}
                            />
                        )
                        )
                        }
                    </div>

                </div>

            </div>

        </div>
    );
}
export default Testimonials;