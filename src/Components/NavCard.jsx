export default function NavCard({
    businessName,
    businessDescription,
    businessLink,
    imageLink,
}) {
    return (
        <div className="card bg-base-100 image-full w-full shadow-xl rounded-none">
            <figure>
                <img
                    src={imageLink}
                    alt="Shoes"
                    className=" w-full object-cover rounded-none"
                    style={{
                        height: "500px",
                    }}
                />
            </figure>
            <div className="card-body rounded-none">
                <h2 className="card-title text-7xl rounded-none">
                    {businessName}
                </h2>
                <p className="text-2xl">{businessDescription}</p>
                <div className="card-actions justify-end">
                    <a href={businessLink}>
                        <button className="btn btn-primary">Learn More</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
