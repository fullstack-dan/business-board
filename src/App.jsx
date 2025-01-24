import { BrowserRouter } from "react-router";
import "./App.css";
import NavCard from "./components/NavCard";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import BusinessCard from "./components/BusinessCard";

// images used throughout the site
import ironPlant from "./assets/images/iron_plant.jpg";
import diner from "./assets/images/diner.jpg";
import shoeStore from "./assets/images/shoe_store.jpg";
import tech from "./assets/images/tech.jpg";
import logo from "./assets/images/logo.png";

const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href="/">
                        <img
                            src={logo}
                            alt="EntreAstraeus"
                            className="h-18 rounded-full"
                        />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Add your business</a>
                        </li>
                        <li>
                            <a href="">Register</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Hero */}
            <div className="w-full flex flex-col gap-4 items-center text-center mt-8">
                <h1 className="text-4xl font-bold">
                    Welcome to EntreAstraeus!
                </h1>
                <h2>
                    Here, you can learn more about the businesses working
                    tirelessly to bring Ironclad back to its former glory!
                    <br />
                    Check out some of our featured businesses below!
                </h2>
            </div>

            {/* Carousel */}
            <div className="carousel w-full mt-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <NavCard
                        businessName="Ironclad Steel"
                        businessDescription="Best steel in the city!"
                        businessLink="https://www.google.com"
                        imageLink={ironPlant}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <NavCard
                        businessName="Astraeus Diner"
                        businessDescription="Join us for a meal!"
                        businessLink="https://www.google.com"
                        imageLink={diner}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <NavCard
                        businessName="AstroBoots"
                        businessDescription="Step into the future!"
                        businessLink="https://www.google.com"
                        imageLink={shoeStore}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <NavCard
                        businessName="IronTech"
                        businessDescription="Tech for the common man."
                        businessLink="https://www.google.com"
                        imageLink={tech}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <a href="#slide1" className="btn btn-xs btn-primary">
                    1
                </a>
                <a href="#slide2" className="btn btn-xs btn-primary">
                    2
                </a>
                <a href="#slide3" className="btn btn-xs btn-primary">
                    3
                </a>
                <a href="#slide4" className="btn btn-xs btn-primary">
                    4
                </a>
            </div>

            {/* Main Content */}
            <main className="container mx-auto flex flex-col items-center">
                {/* Business Grid */}
                <h1 className="text-3xl font-bold text-center mt-16 mb-8">
                    Dive deeper into our featured businesses!
                </h1>
                <div className="grid grid-cols-2 gap-12 w-4/6 place-items-center">
                    <BusinessCard
                        businessName="Ironclad Steel"
                        businessDescription="The best steel in the city!"
                        imageLink={ironPlant}
                        tags={["Industry", "Steel"]}
                    />
                    <BusinessCard
                        businessName="Astraeus Diner"
                        businessDescription="Join us for a meal!"
                        imageLink={diner}
                        tags={["Food", "Comfort"]}
                    />
                    <BusinessCard
                        businessName="AstroBoots"
                        businessDescription="Step into the future!"
                        imageLink={shoeStore}
                        tags={["Fashion", "Shoes"]}
                    />
                    <BusinessCard
                        businessName="IronTech"
                        businessDescription="Tech for the common man!"
                        imageLink={tech}
                        tags={["Technology", "Software"]}
                    />
                </div>

                {/* About Section */}
                <div className="w-full flex gap-4 justify-center items-center text-center mt-16">
                    <div className="card bg-neutral text-neutral-content w-96 min-h-96">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-black">
                                What is EntreAnstraeus?
                            </h2>
                            <p>
                                EntreAstraeus is a platform dedicated to
                                showcasing the businesses of Astraeus, and
                                specifically in Ironclas! We believe in the
                                empowerment of local entrepreneurs, by creating
                                a board dedicated to showcasing their unique
                                businesses.
                                <br />
                                <br />
                                We share only opportunities that are local to
                                this area, and provide fair and ethical
                                opportunities for all businesses to find loyal
                                employees. Looking to find your next job to help
                                Ironclas? EntreAstraeus is the place to be!
                            </p>
                        </div>
                    </div>

                    <div className="card bg-neutral text-neutral-content w-96">
                        <div className="card-body items-center text-center min-h-96">
                            <h2 className="card-title font-black">
                                Why Astraeus?
                            </h2>
                            <p>
                                The Astraeus Economic Development Council (AEDC)
                                is a team of local business leaders and
                                entrepreneurs who are dedicated to the regrowth
                                of the city and Ironclad! Using our service to
                                showcase these businesses, we hope to help spark
                                a revival in the city's economy.
                                <br />
                                <br />
                                We believe that by supporting local businesses,
                                we can help to create a more sustainable and
                                prosperous future for Ironclad. We hope you'll
                                join us in supporting these businesses and
                                helping to rebuild our city!
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer bg-base-200 text-base-content mt-8 flex justify-center items-center w-full p-8">
                <div className="text-center w-full">
                    <p className="w-full">
                        Made with ❤️ by{" "}
                        <a
                            href="https://github.com/fullstack-dan"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                        >
                            fullstack-dan
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://github.com/zteanes"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                        >
                            zteanes
                        </a>{" "}
                        for{" "}
                        <a
                            href="https://www.bletchley.org/contests/sustainable-futures-3-01-paths-to-progress?utm_campaign=Mastery+Quest+Announcement+-+Sustainable+Futures-+wp3+wk1+-+012025&utm_content=Mastery+Quest+-+Sustainable+Futures+-+wp3+wk1+-+01-20-25&utm_medium=email_action&utm_source=customer.io"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                        >
                            Bletchley Institute Sustainable Futures 3.01
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/about" element={<AboutPage />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
