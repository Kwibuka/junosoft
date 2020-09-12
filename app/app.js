//HEADER
class Logo {
  constructor(logo) {
    this.logo = logo;
  }
  render() {
    const logoImage = document.createElement("div");
    logoImage.className = "logo-image";
    const img = document.createElement("img");
    img.src = `${this.logo}`;
    img.alt = `JunoSwift`;
    img.className = "JunoSwift";
    logoImage.append(img);
    return logoImage;
  }
}
class HeaderItem {
  constructor(icon, itemName, itemLink) {
    this.icon = icon;
    this.itemName = itemName;
    this.itemLink = itemLink;
  }
}
class HeaderElement {
  constructor(headerItem) {
    this.headerItem = headerItem;
  }
  render() {
    const iconName = this.headerItem.icon;
    const headerElement = document.createElement("li");

    headerElement.className = "header-list__element";
    headerElement.innerHTML = `<a href = "#${this.headerItem.itemLink}"
    <i class= ${iconName}> </i>
      ${this.headerItem.itemName} </a>
      `;
    return headerElement;
  }
}

class Header {
  items = [
    new HeaderItem("'fa fa-home'", "Home", "home"),
    new HeaderItem("'fa fa-bandcamp'", "Members", "members"),
    new HeaderItem("'fa fa-laptop'", "Services", "services"),
    new HeaderItem("'fa fa-superpowers'", "Portfolio", "our_work"),
    new HeaderItem("'fa fa-asl-interpreting'", "About Us", "about_us"),
    new HeaderItem("'fa fa-tty'", "Contact Us", "contact_us"),
  ];

  render() {
    const renderApp = document.querySelector(".app");
    const header = document.createElement("header");
    const logo = new Logo("./assets/images/junosoft.png");
    const renderLogo = logo.render();
    const headerList = document.createElement("ul");
    headerList.className = "header-list";
    for (const list of this.items) {
      const headerElementList = new HeaderElement(list);
      const headerElement = headerElementList.render();
      headerList.append(headerElement);
    }
    header.append(renderLogo, headerList);
    renderApp.append(header);
  }
}

const header = new Header();
header.render();

class Component {}

// HOME SECTION

class Home {
  constructor(textMission, logoImage, ourWork) {
    this.textMission = textMission;
    this.logoImage = logoImage;
    this.ourWork = ourWork;
  }
  render() {}
}

class HomeSection {
  home = new Home(
    "It all in our box",
    "./assets/images/junosoft.png",
    "Our Works"
  );

  render() {
    const app = document.getElementById("app");
    console.log(app);
    const homeSection = document.createElement("section");
    homeSection.className = "section-container";
    homeSection.id = "home";
    const homeDiv = document.createElement("div");
    homeDiv.className = "home-background";
    const ourWorkButton = document.createElement("button");
    ourWorkButton.innerHTML = `<a href="#our_work">${this.home.ourWork}</a>`;
    const missionDiv = document.createElement("div");
    missionDiv.className = "app-mission";
    const imgLogo = document.createElement("img");
    imgLogo.className = "misiion-logo_big";
    imgLogo.src = `${this.home.logoImage}`;
    imgLogo.alt = `JunoSoft`;
    const p = document.createElement("p");
    p.className = "mission-text";
    p.innerHTML = `${this.home.textMission}`;

    missionDiv.append(imgLogo, p, ourWorkButton);
    homeDiv.append(missionDiv);
    homeSection.append(homeDiv);
    return homeSection;
  }
}

// MEMBERS SECTION

class SectionHeader {
  constructor(sectionTittle, sectionSubtitle) {
    this.sectionTittle = sectionTittle;
    this.sectionSubtitle = sectionSubtitle;
  }
  render() {
    const memberDiv = document.createElement("div");
    memberDiv.className = "title-header-container";
    const mainTitle = document.createElement("p");
    mainTitle.className = "main-title__header";
    mainTitle.innerHTML = `${this.sectionTittle}`;
    const subTitle = document.createElement("p");
    subTitle.className = "sub-title__header";
    subTitle.innerHTML = `${this.sectionSubtitle}`;
    const breakLine = document.createElement("div");
    breakLine.className = "break-line";
    memberDiv.append(mainTitle, subTitle, breakLine);
    return memberDiv;
  }
}
class SectionHeaderWhite {
  constructor(sectionTittle, sectionSubtitle) {
    this.sectionTittle = sectionTittle;
    this.sectionSubtitle = sectionSubtitle;
  }
  render() {
    const memberDiv = document.createElement("div");
    memberDiv.className = "title-header-container";
    const mainTitle = document.createElement("p");
    mainTitle.className = "main-title__header__white";
    mainTitle.innerHTML = `${this.sectionTittle}`;
    const subTitle = document.createElement("p");
    subTitle.className = "sub-title__header__white";
    subTitle.innerHTML = `${this.sectionSubtitle}`;
    const breakLine = document.createElement("div");
    breakLine.className = "break-line__white";
    memberDiv.append(mainTitle, subTitle, breakLine);
    return memberDiv;
  }
}

class Member {
  constructor(memberName, memberTitle, memberContent, memberImage) {
    this.memberName = memberName;
    this.memberTitle = memberTitle;
    this.memberContent = memberContent;
    this.memberImage = memberImage;
  }

  render() {
    const memberImage = document.createElement("div");
    memberImage.className = "content-container";
    const imgMember = document.createElement("img");
    imgMember.src = `${this.memberImage}`;
    imgMember.alt = `${this.memberName}`;
    imgMember.className = "member-photo";
    memberImage.append(imgMember);
    const memberDetails = document.createElement("div");
    memberDetails.className = "content-container";
    const memberNameDOM = document.createElement("p");
    memberNameDOM.className = "member-name";
    memberNameDOM.innerHTML = `${this.memberName}`;
    const memberTitleDOM = document.createElement("p");
    memberTitleDOM.className = "member-title";
    memberTitleDOM.innerHTML = `${this.memberTitle}`;
    const memberContentDOM = document.createElement("p");
    memberContentDOM.className = "member-content";
    memberContentDOM.innerHTML = `${this.memberContent}`;
    memberDetails.append(
      imgMember,
      memberNameDOM,
      memberTitleDOM,
      memberContentDOM
    );
    return memberImage, memberDetails;
  }
}

class TeamSection {
  members = [
    new Member(
      "KWIBUKA Confiance",
      "SOFTWARE ENGINEER",
      " We have good partnerships in place so aside from the concepts and design  we have manufacturing and fulfilment covered We’re proud of our partners as they too run eco friendly businesses and are socially aware of their impact on our world",
      "./assets/images/co9.jpg"
    ),

    new Member(
      "UBANJE Albert",
      "SOFTWARE ENGINEER",
      " We have good partnerships in place so aside from the concepts and design  we have manufacturing and fulfilment covered We’re proud of our partners as they too run eco friendly businesses and are socially aware of their impact on our world",
      "./assets/images/xjuno.jpg"
    ),
  ];
  render() {
    const memberSection = document.createElement("section");
    memberSection.className = "section-container";
    memberSection.id = "members";
    const sectionHeader = new SectionHeader(
      "TEAM MEMBERS",
      "We work in team to deliver good product for you"
    );
    const sectionMemberRender = sectionHeader.render();

    const ul = document.createElement("ul");
    ul.className = "list-container";
    for (const list of this.members) {
      const memberList = document.createElement("li");
      const member = new Member(
        list.memberName,
        list.memberTitle,
        list.memberContent,
        list.memberImage
      );
      const memberRender = member.render();
      memberList.append(memberRender);
      ul.append(memberList);
    }

    memberSection.append(sectionMemberRender, ul);
    return memberSection;
  }
}

class Service {
  constructor(serviceIcon, serviceName, serviceContent) {
    this.serviceIcon = serviceIcon;
    this.serviceName = serviceName;
    this.serviceContent = serviceContent;
  }
}

class ServiceSection {
  services = [
    new Service(
      "'fa fa-2x fa-tty'",
      "MOBILE APP DEVELOPMENT",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered We’re proud of our partners as they too"
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "WEB APP DEVELOPMENT",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered We’re proud of our partners as they too"
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "DESKTOP APP DEVELOPMENT",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered We’re proud of our partners as they too"
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "GRAPHIC DESIGN",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered We’re proud of our partners as they too"
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "VISUAL EFFECT",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered We’re proud of our partners as they too"
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "INTERNEERSHIP",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered We’re proud of our partners as they too"
    ),
  ];
  render() {
    const serviceSection = document.createElement("section");
    serviceSection.className = "section-container section-container__services";
    serviceSection.id = "services";
    const serviceHeader = new SectionHeaderWhite(
      "OUR SERVICES",
      "We work in team to deliver good product for you"
    );
    const serviceHeaderRender = serviceHeader.render();
    const ul = document.createElement("ul");
    ul.className = "service-list";
    for (const list of this.services) {
      const listElement = document.createElement("li");
      listElement.className = "service-list__item";
      listElement.innerHTML = `<div> <i class=${list.serviceIcon}></i> </div>
                               <div> ${list.serviceName} </div>
                               <div> ${list.serviceContent} </div>`;
      ul.append(listElement);
    }
    serviceSection.append(serviceHeaderRender, ul);
    return serviceSection;
  }
}

class SideNavWork {
  constructor(title) {
    this.title = title;
  }
}

class Works {
  constructor(porfolioPhoto, porfolioName) {
    this.porfolioPhoto = porfolioPhoto;
    this.porfolioName = porfolioName;
  }
}
class OurPortifolio {
  works = [
    new Works("./assets/images/work/2 (1).jpg", "swiftmotion"),
    new Works("./assets/images/work/2 (2).jpg", "xjuno"),
    new Works("./assets/images/work/2 (3).jpg", "construction"),
    new Works("./assets/images/work/2 (4).jpg", "construction"),
    new Works("./assets/images/work/2 (5).jpg", "IT Room"),
    new Works("./assets/images/work/2 (6).jpg", "Todo List"),
    new Works("./assets/images/work/2 (7).jpg", "App Logo"),
    new Works("./assets/images/work/2 (8).jpg", "TENET"),
    new Works("./assets/images/work/2 (9).jpg", "Chevrolet"),
    new Works("./assets/images/work/2 (10).jpg", "Chevrolet"),
  ];
  sideNav = [
    new SideNavWork("All"),
    new SideNavWork("Web App"),
    new SideNavWork("Mobile Apps"),
    new SideNavWork("Desktop Apps"),
    new SideNavWork("Graphic Design"),
  ];
  render() {
    const portofolioSection = document.createElement("section");
    portofolioSection.className = "section-container";
    portofolioSection.id = "our_work";

    const portofolioHeader = new SectionHeader(
      "OUR PORTOFOLIO",
      "We work in team to deliver good product for you"
    );
    const portofolioHeaderRender = portofolioHeader.render();
    const portofoliaBodyContainer = document.createElement("div");
    portofoliaBodyContainer.className = "portofolio-body-container";
    const sideNavList = document.createElement("div");
    const ulList = document.createElement("ul");
    ulList.className = "side-nav__list";
    for (const list of this.sideNav) {
      const listElement = document.createElement("li");
      listElement.className = "side-nav__list-element";
      listElement.innerHTML = `${list.title}`;
      ulList.append(listElement);
    }
    sideNavList.append(ulList);
    const itemsList = document.createElement("div");
    const itemListBody = document.createElement("ul");
    itemListBody.className = "item-list";
    for (const porfList of this.works) {
      const listEl = document.createElement("li");
      listEl.className = "item-list__element";
      const pictureFrame = document.createElement("div");
      pictureFrame.className = "picture-frame";
      const img = document.createElement("img");
      img.className = "img-clickable";
      img.src = `${porfList.porfolioPhoto}`;
      img.alt = `${porfList.porfolioName}`;
      pictureFrame.append(img);
      const p = document.createElement("p");
      p.className = "work-name_portofolio";
      p.innerHTML = `${porfList.porfolioName}`;
      listEl.append(pictureFrame, p);

      itemListBody.append(listEl);
    }
    itemsList.append(itemListBody);

    portofoliaBodyContainer.append(sideNavList, itemsList);
    portofolioSection.append(portofolioHeaderRender, portofoliaBodyContainer);
    return portofolioSection;
  }
}

class Advice {
  constructor(adviceTitle, motoName) {
    this.adviceTitle = adviceTitle;
    this.motoName = motoName;
  }
}
class AdviceSection {
  advice = new Advice(
    "Dou you have an app or idea you want to give life ",
    "It's all in our box"
  );
  render() {
    const adviceSection = document.createElement("section");
    adviceSection.className = "section-container section-change";
    adviceSection.id = "about_us";
    const adviceContainer = document.createElement("div");
    adviceContainer.className = "advice-container";
    adviceContainer.innerHTML = `
    <div>${this.advice.adviceTitle}</div>
    <div>${this.advice.motoName}</div>
    <div><a href="#contact_us"><button><img src="" alt="go down"></i></button></a></div>
    `;
    adviceSection.append(adviceContainer);
    return adviceSection;
  }
}

class Input {
  constructor(name, inputType, valueType) {
    this.name = name;
    this.inputType = inputType;
    this.valueType = valueType;
  }
}
class Footer {
  constructor(copyright) {
    this.copyright = copyright;
  }
  render() {
    const footer = document.createElement("footer");
    const div = document.createElement("div");
    div.innerHTML = `${this.copyright}`;
    footer.append(div);
    return footer;
  }
}
class ContactSection {
  input = [
    new Input("Name", "text", ""),
    new Input("Email", "email", ""),
    new Input("Message", "textarea", ""),
    new Input("Send", "submit", "Send Message"),
  ];
  render() {
    const contactSection = document.createElement("section");
    contactSection.className = "section-container";
    contactSection.id = "contact_us";
    const sectionHeader = new SectionHeader(
      "CONTACT US",
      "We work in team to deliver good product for you"
    );
    const sectionHeaderRender = sectionHeader.render();

    const form = document.createElement("form");
    for (let listInput of this.input) {
      const label = document.createElement("label");
      label.innerHTML = `${listInput.name}`;
      const input = document.createElement("input");
      input.className = "contact-us_inputs";
      input.type = `${listInput.inputType}`;
      input.name = `${listInput.name}`;
      input.value = `${listInput.valueType}`;
      form.append(label, input);
    }
    const footer = new Footer("@copyright junosoft 2020");
    const footerRender = footer.render();
    contactSection.append(sectionHeaderRender, form, footerRender);
    return contactSection;
  }
}
$("header ul li a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});
$("section .app-mission button").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});
$("section .advice-section button").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});
class AppRender {
  render() {
    const renderHook = document.querySelector(".app");

    const homeSection = new HomeSection();
    const homeSectionRender = homeSection.render();
    const teamSection = new TeamSection();
    const teamSectionRender = teamSection.render();
    const serviceSection = new ServiceSection();
    const serviceSectionRender = serviceSection.render();
    const ourWorkSection = new OurPortifolio();
    const ourWorkSectionRender = ourWorkSection.render();
    const adviceSection = new AdviceSection();
    const adviceSectionRender = adviceSection.render();
    const contactSection = new ContactSection();
    const contactSectionRender = contactSection.render();

    renderHook.append(homeSectionRender);
    renderHook.append(teamSectionRender);
    renderHook.append(serviceSectionRender);
    renderHook.append(ourWorkSectionRender);
    renderHook.append(adviceSectionRender);
    renderHook.append(contactSectionRender);
  }
}

class App {
  static init() {
    const app = new AppRender();
    app.render();
  }
}
App.init();
