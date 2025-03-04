const activities = [
    { imgSrc: "/kep/images/potuga.png", title: "клуб робототехніки", subtitle: "Чекаємо на тебе!" },
    { imgSrc: "/kep/images/potuga.png", title: "клуб робототехніки", subtitle: "Чекаємо на тебе!" },
    { imgSrc: "/kep/images/potuga.png", title: "клуб робототехніки", subtitle: "Чекаємо на тебе!" },
    { imgSrc: "/kep/images/potuga.png", title: "клуб робототехніки", subtitle: "Чекаємо на тебе!" },
    { imgSrc: "/kep/images/potuga.png", title: "клуб робототехніки", subtitle: "Чекаємо на тебе!" }
];

const container = document.getElementById("clubs-container");

container.innerHTML = activities.map(({ imgSrc, title, subtitle }) => `
    <div class="card">
        <div class="image-section">
            <img src="${imgSrc}" alt="${title}">
            <div class="circle"><span class="circle-decoration"></span></div>
        </div>
        <div class="content-section">
            <p>
                Ранкове сонце повільно піднімалося над містом, огортаючи його теплим світлом і додаючи барвам особливої насиченості. 
                Легкий вітерець колихав гілки дерев, змушуючи їх тихо шурхотіти у гармонії з ритмом нового дня.
            </p>
            <div class="name">
                <div class="decoration-block">
                    <span class="decoration"></span><span class="decoration"></span>
                </div>
                <div class="text-block">
                    <h3>${title}</h3>
                    <p>${subtitle}</p>
                </div>
            </div>
        </div>
    </div>
`).join("");
