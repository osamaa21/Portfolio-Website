let lang = 'Uz';
const selected  = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
selected.addEventListener("click",  () =>{
    optionsContainer.classList.toggle("active");
});
optionsList.forEach(el => {
    el.addEventListener("click", () =>{
        selected.innerHTML = el.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        lang = `${selected.innerHTML}`
        language(lang)
    });
});
const selectedTwo  = document.querySelector(".selectedTwo");
const optionsTwoCon = document.querySelector(".optionsTwo-container");
const optionTwoList = document.querySelectorAll(".optionTwo");
selectedTwo.addEventListener("click",  () =>{
    optionsTwoCon.classList.toggle("active");
});
optionTwoList.forEach(el => {
    el.addEventListener("click", () =>{
        selectedTwo.innerHTML = el.querySelector("label").innerHTML;
        optionsTwoCon.classList.remove("active");
        lang = `${selected.innerHTML}`
        language(lang)
    });
});

const langBox = {
    home:{
        ar:'الرئيسية',
        en:'Home',
        ru:'Главный'
    },
    Services:{
        ar:'الخدمات',
        en:'Services',
        ru:'Уcлуги'
    },
    Skills:{
        ar:'الخدمات',
        en:'Skills',
        ru:'Навыки'
    },
    Portfolio:{
        ar:'الخدمات',
        en:'Partfolio',
        ru:'Портфолио'
    },
    Contact:{
        ar:'الخدمات',
        en:'Contact',
        ru:'Контакт'
    },
    job:{
        ar:'الخدمات',
        en:"Front End Developer",
        ru:"Фронт Енд Разработчик"
    },
    name:{
        ar:'الخدمات',
        en:"Diyorbek Jo'raqulov",
        ru:"Диёрбек Жўрақулов"
    },
    title:{
        ar:'الخدمات',
        en:"I am a freelance web developer. Let's work together.",
        ru:"Я внештатный веб-разработчик. Давайте работать вместе."
    },
    aloqa:{
        ar:'الخدمات',
        en: "Contact Me",
        ru: "Свяжитесь со мной"
    },
    yuklash:{
        ar:'الخدمات',
        en:"Download CV",
        ru:"Скачать резюме"
    },
    id:{
        ar:'الخدمات',
        en:"MY SERVICES",
        ru:"МОИ УСЛУГИ"
    },
    ServiseTitle:{
        ar:'الخدمات',
        en:"Things I may do for my clients",
        ru:"Что я могу сделать для своих клиентов"
    },
    text:{
        ar:'الخدمات',
        en:"Hello, If you work with me, I will make your website perfect. My strengths are creating Reactive and Progressive environments using Vue Js",
        ru:"Здравствуйте, если вы будете работать со мной, я сделаю ваш сайт идеальным. Мои сильные стороны — создание реактивных и прогрессивных сред с использованием Vue Js."
    },
    serOne:{
        ar:'الخدمات',
        en:"Framework",
        ru:"Фрамеwорк",
        text: {
            ar:'الخدمات',
            en:"The fastest considered framework of the Java Script programming language is Vue Js. And I worked in this field for 2 years",
            ru:"Самая быстрая рассматриваемая среда языка программирования Java Script — Vue Js. И я работал в этой области в течение 2 лет"
        }
    },
    serTwo:{
        ar:'الخدمات',
        en:"Adaptative",
        ru:"Адаптивный",
        text: {
            ar:'الخدمات',
            en:"My main job is to make the Page ready for Any Environment and Conditions using the latest technologies.",
            ru:"Моя основная работа заключается в том, чтобы сделать страницу готовой к любой среде и условиям с использованием новейших технологий."
        }
    },
    serThre:{
        ar:'الخدمات',
        en:"Router",
        ru:"Роутер",
        text: {
            ar:'الخدمات',
            en:"Single-page application, that is, dynamic loading of the necessary content from the server without refreshing the page. Such applications work quickly and load the server less",
            ru:"Одностраничное приложение, то есть динамическая загрузка необходимого контента с сервера без перезагрузки страницы. Такие приложения работают быстро и меньше нагружают сервер"
        }
    },
    serFour:{
        ar:'الخدمات',
        en:"Design",
        ru:"Дизайн",
        text: {
            ar:'الخدمات',
            en:"Creating a beautiful website by designing in Figma and Photoshop",
            ru:"Создание красивого веб-сайта с помощью дизайна в Figma и Photoshop"
        }
    },
    more:{
        ar:'الخدمات',
        en:"Learn more",
        ru:"Учить больше",
    },
    subTitle:{
        ar:'الخدمات',
        en:"My skills",
        ru:"Мои навыки"
    },
    skillTitle:{
        ar:'الخدمات',
        en:"What My Programming Skills Included?",
        ru:"Что включало мои навыки программирования?"
    },
    skillText:{
        ar:'الخدمات',
        en:"I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.",
        ru:"Я разрабатываю простой, интуитивно понятный и отзывчивый пользовательский интерфейс, который помогает пользователям выполнять задачи с меньшими усилиями и временем с помощью этих технологий."
    },
    partfolio:{
        partfolioTitle:{
            ar:'الخدمات',
            en:"Latest Projects",
            ru:"Последние проекты"
        },
        partfolioInfo:{
            all:{
                ar:'الخدمات',
                en:"All",
                ru:"Все"
            },
            product:{
                ar:'الخدمات',
                en:"Product",
                ru:"Продукт"
            },
            qiziq:{
                ar:'الخدمات',
                en:"interesting",
                ru:"интересный"
            },
            app:{
                ar:'الخدمات',
                en:"Web App",
                ru:"Веб-приложение"
            }
        }
    },
    guvoh:{
        ar:'الخدمات',
        en:"Testimonials",
        ru:"Отзывы"
    },
    klint:{
        ar:'الخدمات',
        en:"Hear from my happy clients",
        ru:"Услышать от моих счастливых клиентов"
    },
    aloqa:{
        ar:'الخدمات',
        en:"Contact",
        ru:"Контакт"
    },
    aloqaTitle:{
        ar:'الخدمات',
        en:"Let's work together",
        ru:"Давайте работать вместе"
    },
    xabar:{
        ar:'الخدمات',
        en:"Send me a message",
        ru:"Отправить мне сообщение"
    },
}

let homeText = document.querySelector('#nav-link__one'),
Servise = document.querySelector('#nav-link__two'),
Skills = document.querySelector('#nav-link__thre'),
Portfolio = document.querySelector('#nav-link__four'),
Contact = document.querySelector('#nav-link__five');

// home lang
let homeJob = document.querySelector('#homeJob'),
homeName = document.querySelector('#homeName'),
homeTitle = document.querySelector('#homeTitle'),
homeContact = document.querySelector('.homeContact'),
download = document.querySelector('.download');

// service
let myServise = document.querySelector("#myServise"),
headSer = document.querySelector("#headSer"),
textSer = document.querySelector("#textSer"),
serContact = document.querySelector(".serContact"),
serDownload = document.querySelector(".serDownload"),
// servise skill
// one
servesOne =document.querySelector(".servesOne h3"),
servesOneText =document.querySelector(".servesOne p"),
moreLearnOne = document.querySelector(".servesOne+a"),
// two
servesTwo =document.querySelector(".servesTwo h3"),
servesTwoText =document.querySelector(".servesTwo p"),
moreLearnTwo = document.querySelector(".servesTwo+a"),
// thre
servesThre =document.querySelector(".servesThre h3"),
servesThreText =document.querySelector(".servesThre p")
moreLearnThre = document.querySelector(".servesThre+a"),
// four
servesFour =document.querySelector(".servesFour h3"),
servesFourText =document.querySelector(".servesFour p")
moreLearnFour = document.querySelector(".servesFour+a"),

// Skill
subTitle = document.querySelector(".subTitle"),
mainTitle = document.querySelector(".mainTitle"),
mainText = document.querySelector(".mainText"),
// partfolio
portfolioHeading = document.querySelector(".portfolioHeading"),
portfolioTitle = document.querySelector(".portfolioTitle"),
dataAll = document.querySelector(".dataAll"),
dataProduct = document.querySelector(".dataProduct"),
dataInteris = document.querySelector(".dataInteris"),
dataApp = document.querySelector(".dataApp"),

// Guvohlar
guvoh = document.querySelector(".guvoh"),
klint = document.querySelector(".klint"),
// aloqaLang
aloqaLang = document.querySelector(".aloqaLang"),
letsLang = document.querySelector(".letsLang"),
sendLang = document.querySelector(".sendLang")
function language(lang) {
    if (lang == 'AR') {
        // nav start 
        homeText.textContent = langBox.home.ar
        Servise.textContent = langBox.Services.ar
        Skills.textContent = langBox.Skills.ar
        Portfolio.textContent = langBox.Portfolio.ar
        Contact.textContent = langBox.Contact.ar

        // intro start
        homeJob.textContent = langBox.job.ar
        homeName.textContent = langBox.name.ar
        homeTitle.textContent = langBox.title.ar
        homeContact.textContent = langBox.aloqa.ar
        download.textContent = langBox.yuklash.ar
        
        // servise start
        myServise.textContent = langBox.id.ar
        headSer.textContent = langBox.ServiseTitle.ar
        textSer.textContent = langBox.text.ar
        serContact.textContent = langBox.aloqa.ar
        serDownload.textContent = langBox.yuklash.ar
        
        // servise skill
        servesOne.textContent = langBox.serOne.ar
        servesOneText.textContent = langBox.serOne.text.ar
        servesTwo.textContent = langBox.serTwo.ar
        servesTwoText.textContent = langBox.serTwo.text.ar
        servesThre.textContent = langBox.serThre.ar
        servesThreText.textContent = langBox.serThre.text.ar
        servesFour.textContent = langBox.serFour.ar
        servesFourText.textContent = langBox.serFour.text.ar
        // moreLearn
        moreLearnOne.textContent = langBox.more.ar
        moreLearnTwo.textContent = langBox.more.ar
        moreLearnThre.textContent = langBox.more.ar
        moreLearnFour.textContent = langBox.more.ar
        // Skill
        subTitle.textContent = langBox.subTitle.ar
        mainTitle.textContent = langBox.skillTitle.ar
        mainText.textContent = langBox.skillText.ar
        // partfolio
        portfolioHeading.textContent = langBox.Portfolio.ar
        portfolioTitle.textContent = langBox.partfolio.partfolioTitle.ar
        dataAll.textContent = langBox.partfolio.partfolioInfo.all.ar
        dataProduct.textContent = langBox.partfolio.partfolioInfo.product.ar
        dataInteris.textContent = langBox.partfolio.partfolioInfo.qiziq.ar
        dataApp.textContent = langBox.partfolio.partfolioInfo.app.ar
        // guvoh
        guvoh.textContent = langBox.guvoh.ar
        klint.textContent = langBox.klint.ar
        // aloqa
        aloqaLang.textContent = langBox.aloqa.ar
        letsLang.textContent = langBox.aloqaTitle.ar
        sendLang.textContent = langBox.xabar.ar
    }else if (lang == 'Ru') {
        // nav start 
        homeText.textContent = langBox.home.ru
        Servise.textContent = langBox.Services.ru
        Skills.textContent = langBox.Skills.ru
        Portfolio.textContent = langBox.Portfolio.ru
        Contact.textContent = langBox.Contact.ru
        
        // intro start
        homeJob.textContent = langBox.job.ru
        homeName.textContent = langBox.name.ru
        homeTitle.textContent = langBox.title.ru
        homeContact.textContent = langBox.aloqa.ru
        download.textContent = langBox.yuklash.ru
        
        // servise start
        myServise.textContent = langBox.id.ru
        headSer.textContent = langBox.ServiseTitle.ru
        textSer.textContent = langBox.text.ru
        serContact.textContent = langBox.aloqa.ru
        serDownload.textContent = langBox.yuklash.ru
        
        // servise skill
        servesOne.textContent = langBox.serOne.ru
        servesOneText.textContent = langBox.serOne.text.ru
        servesTwo.textContent = langBox.serTwo.ru
        servesTwoText.textContent = langBox.serTwo.text.ru
        servesThre.textContent = langBox.serThre.ru
        servesThreText.textContent = langBox.serThre.text.ru
        servesFour.textContent = langBox.serFour.ru
        servesFourText.textContent = langBox.serFour.text.ru
        // moreLearn
        moreLearnOne.textContent = langBox.more.ru
        moreLearnTwo.textContent = langBox.more.ru
        moreLearnThre.textContent = langBox.more.ru
        moreLearnFour.textContent = langBox.more.ru
        // Skill
        subTitle.textContent = langBox.subTitle.ru
        mainTitle.textContent = langBox.skillTitle.ru
        mainText.textContent = langBox.skillText.ru
        // partfolio
        portfolioHeading.textContent = langBox.Portfolio.ru
        portfolioTitle.textContent = langBox.partfolio.partfolioTitle.ru
        dataAll.textContent = langBox.partfolio.partfolioInfo.all.ru
        dataProduct.textContent = langBox.partfolio.partfolioInfo.product.ru
        dataInteris.textContent = langBox.partfolio.partfolioInfo.qiziq.ru
        dataApp.textContent = langBox.partfolio.partfolioInfo.app.ru
        // guvoh
        guvoh.textContent = langBox.guvoh.ru
        klint.textContent = langBox.klint.ru
        // aloqa
        aloqaLang.textContent = langBox.aloqa.ru
        letsLang.textContent = langBox.aloqaTitle.ru
        sendLang.textContent = langBox.xabar.ru
    }else if (lang == 'En') {
        // nav start 
        homeText.textContent = langBox.home.en
        Servise.textContent = langBox.Services.en
        Skills.textContent = langBox.Skills.en
        Portfolio.textContent = langBox.Portfolio.en
        Contact.textContent = langBox.Contact.en
        
        // intro start
        homeJob.textContent = langBox.job.en
        homeName.textContent = langBox.name.en
        homeTitle.textContent = langBox.title.en
        homeContact.textContent = langBox.aloqa.en
        download.textContent = langBox.yuklash.en
        
        // servise start
        myServise.textContent = langBox.id.en
        headSer.textContent = langBox.ServiseTitle.en
        textSer.textContent = langBox.text.en
        serContact.textContent = langBox.aloqa.en
        serDownload.textContent = langBox.yuklash.en
        
        // servise skill
        servesOne.textContent = langBox.serOne.en
        servesOneText.textContent = langBox.serOne.text.en
        servesTwo.textContent = langBox.serTwo.en
        servesTwoText.textContent = langBox.serTwo.text.en
        servesThre.textContent = langBox.serThre.en
        servesThreText.textContent = langBox.serThre.text.en
        servesFour.textContent = langBox.serFour.en
        servesFourText.textContent = langBox.serFour.text.en
        // moreLearn
        moreLearnOne.textContent = langBox.more.en
        moreLearnTwo.textContent = langBox.more.en
        moreLearnThre.textContent = langBox.more.en
        moreLearnFour.textContent = langBox.more.en
        // Skill
        subTitle.textContent = langBox.subTitle.en
        mainTitle.textContent = langBox.skillTitle.en
        mainText.textContent = langBox.skillText.en
        // partfolio
        portfolioHeading.textContent = langBox.Portfolio.en
        portfolioTitle.textContent = langBox.partfolio.partfolioTitle.en
        dataAll.textContent = langBox.partfolio.partfolioInfo.all.en
        dataProduct.textContent = langBox.partfolio.partfolioInfo.product.en
        dataInteris.textContent = langBox.partfolio.partfolioInfo.qiziq.en
        dataApp.textContent = langBox.partfolio.partfolioInfo.app.en
        // guvoh
        guvoh.textContent = langBox.guvoh.en
        klint.textContent = langBox.klint.en
        // aloqa
        aloqaLang.textContent = langBox.aloqa.en
        letsLang.textContent = langBox.aloqaTitle.en
        sendLang.textContent = langBox.xabar.en
    }
    
    
    // homeText.textContent = langBox.home[lang]
    // Servise.textContent = langBox.Services[lang]
    // Skills.textContent = langBox.Skills[lang]
    // Portfolio.textContent = langBox.Partfolio[lang]
    // Contact.textContent = langBox.Contact[lang]
    // Servise.textContent = langBox.Services[lang]
    
    // homeJob.textContent = langBox.job[lang]
    // homeName.textContent = langBox.name[lang]
    // homeTitle.textContent = langBox.title[lang]
    // homeContact.textContent = langBox.aloqa[lang]
    // download.textContent = langBox.yuklash[lang]
}
language(lang)

// let optionOne = document.querySelector('#option__one'),
// optionTwo = document.querySelector('#option__two'),
// optionThree = document.querySelector('#option__three');




// // pro start
// // nav lang



// function language() {
//     // langBox.forEach(el => {
//         //     console.log(el);
//         // });
//     homeText.textContent = langBox.home[lang]
//     Servise.textContent = langBox.Services[lang]
//     Skills.textContent = langBox.Skills[lang]
//     Portfolio.textContent = langBox.Partfolio[lang]
//     Contact.textContent = langBox.Contact[lang]
//     Servise.textContent = langBox.Services[lang]
    
//     homeJob.textContent = langBox.job[lang]
//     homeName.textContent = langBox.name[lang]
//     homeTitle.textContent = langBox.title[lang]
//     homeContact.textContent = langBox.aloqa[lang]
//     download.textContent = langBox.yuklash[lang]
// }
// language()