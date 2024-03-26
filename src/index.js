const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const links = document.querySelectorAll("nav a");
for(let i = 0; i < links.length; i++){
  const linkText = siteContent.nav[`nav-item-${i+1}`];
  links[i].textContent = linkText;
  links[i].classList.add("italic")
}

const logoImg = document.querySelector(".logo")
logoImg.src = siteContent.images["logo-img"]

const ctaHeader = document.querySelector(".cta h1");
ctaHeader.textContent = siteContent.cta.h1

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta.button

const ctaImg = document.querySelector("#cta-img")
ctaImg.src = siteContent.images["cta-img"]

const accentImg = document.querySelector("#middle-img")
accentImg.src = siteContent.images["accent-img"]

const mainContent = siteContent["main-content"]
const textContentCollection = document.querySelectorAll(".text-content");
const[featuresContainer, aboutContainer, servicesContainer, productContainer, visionContainer] = textContentCollection

const featureHeader = featuresContainer.children[0];
const featureText = featuresContainer.children[1];
featureHeader.textContent = mainContent["features-h4"]
featureText.textContent = mainContent["features-content"]

const [aboutHeader, aboutText] = aboutContainer.children
aboutHeader.textContent = mainContent["about-h4"]
aboutText.textContent = mainContent["about-content"]

const [servicesHeader, servicesText] = servicesContainer.children
servicesHeader.textContent = mainContent["services-h4"]
servicesText.textContent = mainContent["services-content"]

const [productHeader, productText] = productContainer.children
productHeader.textContent = mainContent["product-h4"]
productText.textContent = mainContent["product-content"]

const [visionHeader, visionText] = visionContainer.children
visionHeader.textContent = mainContent["vision-h4"]
visionText.textContent = mainContent["vision-content"]

const contactContent = siteContent["contact"]
const contactContainer = document.querySelector(".contact");
const [contactHeader, address, phone, email] = contactContainer.children
contactHeader.textContent = contactContent["contact-h4"]
address.textContent = contactContent.address
phone.textContent = contactContent.phone
email.textContent = contactContent.email


const footerContent = siteContent.footer
const footerLink = document.querySelector("footer a");
footerLink.textContent = footerContent.copyright
footerLink.classList.add("bold")




console.log(textContentCollection)


