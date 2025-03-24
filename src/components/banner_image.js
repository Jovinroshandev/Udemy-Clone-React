import bannerimage from "../image/banner_image.jpg"

function BannerImage() {
    return (
        <div className="banner-image">
            <img src={bannerimage} alt="Banner" />
            <div className="banner-image__offer_box">
                <h2>24-Hour Flash Sale</h2>
                <p>Learn from real-world experts for as low as ₹499.</p>
                <p>Sale ends tonight!</p>
            </div>
        </div>
    )
}

export default BannerImage