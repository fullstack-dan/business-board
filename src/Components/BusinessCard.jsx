import { useState } from "react";

const steelInfo =
    "Ironclad Steel stands at the heart of the city, its towering smokestacks and roaring furnaces a testament to industrial might. Specializing in the production of high-grade steel for machinery, architecture, and defense, Ironclad Steelworks fuels the city's relentless drive for progress. The factory operates 24/7, embodying the unyielding spirit of innovation and endurance in a harsh, unforgiving world. Employees are the backbone of this operation, ensuring precision and quality in every forged product. ";
const dinerInfo =
    "Astraeus Diner is a beloved oasis in the heart of Ironclad, where the smell of sizzling comfort food fills the air amidst the city's steel and smoke. Known for its homemade meals, hearty stews, and fresh-baked bread, Astraeus Diner serves as a refuge for the city's hardworking citizens, offering a taste of warmth and tradition in a world that feels cold and mechanical. The diner runs 24/7, with loyal patrons always returning for their favorite dishes. ";
const astrobootsInfo =
    "AstroBoots is Ironclad's premier footwear manufacturer, specializing in crafting the finest boots built to endure the harsh conditions of the city. Combining advanced technology with old-world craftsmanship, AstroBoots ensures every pair is designed for both durability and comfort, making it the choice for workers, explorers, and those who rely on their feet to navigate the tough industrial landscape. Whether it's for long shifts in the factory or a trek through the iron-clad streets, AstroBoots provides unmatched quality and reliability. ";
const techInfo =
    "IronTech is the heart of technological innovation in Ironclad, dedicated to designing and creating cutting-edge technology accessible to the common man. Specializing in practical gadgets, machines, and tools, IronTech focuses on providing everyday solutions for the citizens of Ironclad, ensuring that even in a world of industry and struggle, technology remains a tool for progress. Whether it's advanced mechanical tools for workers or personal tech to improve daily life, IronTech ensures the city keeps moving forward. ";

const businesses = [
    {
        businessName: "IronTech",
        businessDescription: techInfo,
        businessLink: "#",
        compRating: 4.8,
        cultureRating: 4.3,
        sustainabilityRating: 4.1,
        compensation: "71 Iron Notes/wk",
        tags: ["Technology", "Innovation"],
    },
    {
        businessName: "AstroBoots",
        businessDescription: astrobootsInfo,
        businessLink: "#",
        compRating: 3.8,
        cultureRating: 4.6,
        sustainabilityRating: 4.4,
        compensation: "54 Iron Notes/wk",
        tags: ["Footwear", "Durability"],
    },
    {
        businessName: "Ironclad Steel",
        businessDescription: steelInfo,
        businessLink: "#",
        compRating: 4.5,
        cultureRating: 3.7,
        sustainabilityRating: 3.2,
        compensation: "63 Iron Notes/wk",
        tags: ["Steel", "Industry"],
    },
    {
        businessName: "Astraeus Diner",
        businessDescription: dinerInfo,
        businessLink: "#",
        compRating: 3.9,
        cultureRating: 4.7,
        sustainabilityRating: 4.5,
        compensation: "47 Iron Notes/wk",
    },
];

export default function BusinessCard({
    businessName,
    businessDescription,
    businessLink,
    imageLink,
    tags,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const Modal = ({ businessName, imageLink }) => {
        const ratingColor = (rating) => {
            if (rating > 4.3) {
                return "text-green-500";
            } else if (rating > 3.5) {
                return "text-yellow-500";
            }
            return "text-red-500";
        };

        const business = businesses.find(
            (business) => business.businessName === businessName
        );
        return (
            <dialog className="modal modal-bottom sm:modal-middle" open>
                <div className="modal-box w-full">
                    <h2 className="font-bold text-xl text-center">
                        {businessName}
                    </h2>
                    <img
                        src={imageLink}
                        className="w-full max-h-64"
                        alt={businessName}
                    />
                    <p className="py-4">
                        {business.businessDescription}
                        <br />
                    </p>
                    <h3 className="text-center font-semibold mb-2">
                        Average Compensation: {business.compensation}
                    </h3>
                    <h3 className="text-center font-semibold mb-2">
                        Worker Ratings
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="w-full flex flex-col items-center">
                            <h4>Compensation</h4>
                            <p
                                className={
                                    "font-semibold " +
                                    ratingColor(business.compRating)
                                }
                            >
                                {business.compRating} / 5
                            </p>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <h4>Culture</h4>
                            <p
                                className={
                                    "font-semibold " +
                                    ratingColor(business.cultureRating)
                                }
                            >
                                {business.cultureRating} / 5
                            </p>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <h4>Sustainability</h4>
                            <p
                                className={
                                    "font-semibold " +
                                    ratingColor(business.sustainabilityRating)
                                }
                            >
                                {business.sustainabilityRating} / 5
                            </p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        );
    };

    return (
        <>
            <div
                className="card bg-base-100 w-96 shadow-xl"
                onClick={openModal}
            >
                <figure>
                    <img
                        src={imageLink}
                        alt={businessName}
                        className="max-h-64 w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {businessName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{businessDescription}</p>

                    <div className="card-actions justify-end">
                        {tags.map((tag) => (
                            <div key={tag} className="badge badge-outline">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <Modal businessName={businessName} imageLink={imageLink} />
            )}
        </>
    );
}
