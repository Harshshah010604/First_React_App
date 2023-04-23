import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Counter from "./Counter";
export default function HomePage(){
    const name="Harsh"
    const age=18
    const address="In your Head"
    console.log(name)
    return(
        <div>
            <Navbar/>
            <Counter/>
            <h1>My name is {name}</h1>
            <h2>My age is {age}</h2>
            <h3>I live in {address}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quisquam.
            </p>
            <Footer/>
        </div>
    )
}