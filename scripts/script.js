// !Mobile navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// !For the sproduct section
let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("small-img");
const descriptionDiv = document.querySelector('.description');
const spanElement = Array.from(descriptionDiv.getElementsByTagName("span"))[0];
const liElements = descriptionDiv.getElementsByTagName("li");
const infoDiv = document.querySelector('.single-pro-details');

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;

    spanElement.innerHTML = `Experience ultimate comfort and style with our ComfortBlend Crewneck T-Shirt. `
        +`Crafted from a premium blend of high-quality cotton and polyester, `
        +`this t-shirt offers unbeatable softness and durability, making it your go-to wardrobe staple for any occasion.`;
    liElements[0].innerHTML = 'Superior Comfort: The ComfortBlend fabric ensures a luxuriously soft feel against your skin, allowing you to stay at ease throughout the day.';
    liElements[1].innerHTML = 'Breathable and Lightweight: Designed with breathability in mind, this t-shirt keeps you cool even during hot weather, making it perfect for outdoor activities and casual outings.';
    liElements[2].innerHTML = 'Classic Crewneck Design: The timeless crewneck design adds a touch of elegance to your casual look while providing a comfortable fit around the neck.';
    liElements[3].innerHTML = 'Tailored Fit: Our t-shirt is carefully cut and stitched to offer a flattering fit that complements various body types, enhancing your overall appearance.'
    liElements[4].innerHTML = "Versatile Style: Whether you're pairing it with your favorite jeans, layering it under a jacket, or using it as a standalone statement piece, this t-shirt effortlessly adapts to any style, making it a versatile addition to your wardrobe.";
    liElements[5].innerHTML = "Durability and Longevity: Constructed with premium materials and reinforced stitching, this t-shirt is built to withstand daily wear and multiple washes, ensuring long-lasting use."

    infoDiv.getElementsByTagName("h4")[0].innerHTML = "ComfortBlend Crewneck T-Shirt";
    infoDiv.getElementsByTagName("h2")[0].innerHTML = "$79.99";
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
    spanElement.innerHTML = `Make a bold statement for both style and sustainability with our Eco-Friendly Graphic Print Organic Cotton T-Shirt. `
        + `Crafted from 100% organic cotton, this t-shirt not only offers exceptional comfort but also reflects your commitment to the environment. `
        + `Embrace a fashion-forward lifestyle while promoting eco-consciousness with every step you take.`;
    liElements[0].innerHTML = `Environmentally Conscious: Our t-shirt is made from premium organic cotton, which is grown without the use of harmful pesticides or synthetic fertilizers. `
        + `By choosing this product, you support sustainable farming practices that protect the planet and its precious resources.`
    liElements[1].innerHTML = `Soft and Gentle: The organic cotton fabric provides a soft, gentle touch against your skin, ensuring all-day comfort and preventing irritation.`;
    liElements[2].innerHTML = `Eye-Catching Graphic Print: Express your individuality with a captivating graphic print that showcases unique artistry and creativity. The high-quality, eco-friendly ink ensures the design remains vibrant even after multiple washes.`;
    liElements[3].innerHTML = `Ethically Made: This t-shirt is crafted in Fair Trade Certified™ factories, promoting fair wages and safe working conditions for the artisans involved in its production.`;
    liElements[4].innerHTML = `Classic Unisex Fit: Our t-shirt is designed to offer a comfortable, relaxed fit that complements all genders. It's suitable for a wide range of body types and sizes.`;
    liElements[5].innerHTML = `Versatile Wardrobe Essential: Whether you pair it with jeans, shorts, or skirts, this graphic print t-shirt effortlessly elevates your casual look and adds an element of conscious fashion to your wardrobe.`;

    infoDiv.getElementsByTagName("h4")[0].innerHTML = "ZenTee T-Shirts";
    infoDiv.getElementsByTagName("h2")[0].innerHTML = "$69.99";
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;

    spanElement.innerHTML = "Embark on your next adventure with confidence and comfort, courtesy of our WanderWear T-Shirt. Engineered to withstand the rigors of the great outdoors, this high-performance t-shirt is a perfect companion for hiking, camping, biking, or any active pursuit. Stay cool, dry, and focused on your journey while looking effortlessly stylish in this versatile outdoor essential." ;
    liElements[0].innerHTML = 'Moisture-Wicking Technology: The AdventureTech fabric is specially designed to wick away moisture from your skin, keeping you dry and comfortable even during intense physical activities';
    liElements[1].innerHTML = 'Quick-Drying and Breathable: This t-shirt promotes efficient airflow, allowing excess heat to escape, and dries rapidly after being exposed to water or sweat.';
    liElements[2].innerHTML = 'UPF 50+ Sun Protection: Shield yourself from harmful UV rays with the built-in UPF 50+ protection, ensuring your skin stays safe during extended hours under the sun.';
    liElements[3].innerHTML = 'Abrasion-Resistant: Reinforced with durable fibers, the AdventureTech t-shirt resists abrasions from rough surfaces and backpack straps, ensuring long-lasting performance.';
    liElements[4].innerHTML = "Tagless Design: Say goodbye to annoying tags that cause irritation. The tagless label design enhances comfort during extended wear.";
    liElements[5].innerHTML = "Athletic Fit: Designed for movement, the athletic fit of this t-shirt offers freedom of motion, making it ideal for outdoor activities and sports.";

    infoDiv.getElementsByTagName("h4")[0].innerHTML = "WanderWear T-Shirt";
    infoDiv.getElementsByTagName("h2")[0].innerHTML = "$74.99";
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;

    spanElement.innerHTML = "Experience a new level of tranquility and comfort during your yoga practice with our ArtisanAvenue T-Shirt. Crafted from a blend of eco-friendly bamboo viscose and stretchable spandex, this t-shirt is the epitome of relaxation and mindfulness. Let the soft, breathable fabric flow with your movements as you find inner peace and harmony on the yoga mat.";
    liElements[0].innerHTML = 'Natural Bamboo Fabric: The ArtisanAvenue T-shirt is made from sustainably sourced bamboo viscose, known for its exceptional softness, breathability, and moisture-wicking properties. Feel the touch of nature against your skin as you delve into your yoga flow.';
    liElements[1].innerHTML = 'Stretch and Flexibility: The incorporation of spandex provides the perfect amount of stretch, allowing the t-shirt to move with your body, ensuring unrestricted yoga poses and ultimate flexibility.';
    liElements[2].innerHTML = 'Non-Restrictive Design: The loose and flowy fit of this t-shirt offers a relaxed silhouette, ensuring comfort and confidence as you transition between yoga poses.';
    liElements[3].innerHTML = 'Temperature Regulation: Stay cool during hot yoga sessions or feel cozy during relaxation with the natural temperature-regulating properties of bamboo fabric.';
    liElements[4].innerHTML = "Anti-Bacterial and Odor-Resistant: Bamboo's natural anti-bacterial properties prevent the growth of odor-causing bacteria, keeping you fresh and odor-free even after intensive workouts.";
    liElements[5].innerHTML = "Minimalist Style: Embrace simplicity and elegance with the ZenFit t-shirt's minimalist design, allowing you to focus solely on your practice without distractions.";

    infoDiv.getElementsByTagName("h4")[0].innerHTML = "ArtisanAvenue T-Shirt";
    infoDiv.getElementsByTagName("h2")[0].innerHTML = "$77.99";
}
function addToCart(){
    let name = infoDiv.getElementsByTagName("h4")[0].innerText;
    let price = parseFloat(infoDiv.getElementsByTagName("h2")[0].innerText.replace("$",''));
    let quantity = parseInt(infoDiv.getElementsByClassName("quantity-input")[0].value);
    let img = mainImg.src;
    carts.push({img,name,price,quantity});
    localStorage.setItem("carts",JSON.stringify(carts));
    alert("Successfully add item!")
}

//! blog section
function toggleReadMore(position) {
    const blogDiv = document.getElementById("blog");
    const blogBox = Array.from(blogDiv.getElementsByClassName("blog-box"))[position];

    const shortText = blogBox.querySelector('#short-text');
    const fullText = blogBox.querySelector('#full-text');
    const readMoreBtn = blogBox.querySelector('#readMoreBtn');
  
    if (shortText.style.display === 'none') {
      shortText.style.display = 'inline';
      fullText.style.display = 'none';
      readMoreBtn.innerHTML = 'CONTINUE READING';
    } else {
      shortText.style.display = 'none';
      fullText.style.display = 'inline';
      readMoreBtn.innerHTML = 'COLLAPSE';
    }
}

//! Cart section
let carts = [];



