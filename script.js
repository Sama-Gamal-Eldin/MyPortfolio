import Data from "./data.json" with { type: "json" }


document.querySelector(".header .huge span:nth-of-type(2)").innerHTML = Data["name"];
document.querySelector(".header .huge span:nth-of-type(3)").innerHTML = Data["short"];
document.querySelector(".header img").src = Data["profile"];

let social = document.querySelector(".header .social");
function CreateSocial(type, svg, url) {
    let div = document.createElement("div");
    div.innerHTML = svg;
    div.classList.add(type)
    div.addEventListener("click", _ => {
        window.open(url);
    })
    social.append(div);
}
if (Data["linkedin"] !== "" && Data["linkedin"] !== undefined) CreateSocial("linked", '<svg viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>', Data["linkedin"]);
if (Data["github"] !== "" && Data["github"] !== undefined) CreateSocial("github", '<svg viewBox="0 0 438.549 438.549"> <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path></svg>', Data["github"]);
if (Data["facebook"] !== "" && Data["facebook"] !== undefined) CreateSocial("facebook", '<svg viewBox="0 0 320 512" height="100"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>', Data["facebook"]);
if (Data["instagram"] !== "" && Data["instagram"] !== undefined) CreateSocial("instagram", '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>', Data["instagram"]);
if (Data["twitter"] !== "" && Data["twitter"] !== undefined) CreateSocial("twitter", '<svg viewBox="0 0 50 50"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path></svg>', Data["twitter"]);
if (Data["pinterest"] !== "" && Data["pinterest"] !== undefined) CreateSocial("pinterest", '<svg viewBox="0 0 24 24"><path fill="#E60023" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"></path></svg>', Data["pinterest"]);

let overlay = document.querySelector(".overlay");
let wind = document.querySelector(".overlay .window");
let over_title = document.querySelector(".overlay .title");
let over_time = document.querySelector(".overlay .time");
let over_text = document.querySelector(".overlay .text");
let over_link = document.querySelector(".overlay .link");

overlay.addEventListener("click", _ => {
    overlay.classList.remove("active");
    over_title.innerHTML = "";
    over_text.innerHTML = "";
    over_link.innerHTML = "";
})

wind.addEventListener("click", e => {
    e.stopPropagation();
})

over_link.addEventListener("click", _ => {
    if (over_link.getAttribute("data-for") !== "") {
        window.open(over_link.getAttribute("data-for"))
    }
})

function CreateSub(data) {
    let body = document.createElement("div");
    body.classList.add("body", "R", "C", data["type"]);
    if (data["color"] !== undefined) body.style.backgroundColor = data["color"];
    if (data["style"] !== undefined) body.style.cssText = data["style"];

    let container = document.createElement("div");
    container.classList.add("container", "R", "Col", "C");

    let title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = data["title"];

    if (data["title"] == "Experience") {
        container.innerHTML = "<svg viewBox='0 0 464 464' style='height:100%;width:100%;position: absolute;z-index: -1;fill: rgb(0, 0, 0, 0.1)'><path d='M456.002 325.333C460.375 325.333 464.002 321.707 464.002 317.333V274.667C464.002 270.293 460.375 266.667 456.002 266.667H453.335V190.72C453.335 180.48 447.895 170.88 439.149 165.547C414.935 151.147 400.002 124.693 400.002 96.5333V29.3333C400.002 13.12 386.882 0 370.669 0H325.655C318.509 0 311.681 2.56 306.348 7.25333C294.188 17.92 262.721 42.6667 232.001 42.6667C201.281 42.6667 169.814 17.92 157.654 7.25333C152.321 2.56 145.494 0 138.347 0H93.3333C77.12 0 64 13.12 64 29.3333V96.5333C64 124.693 49.0667 151.147 24.8533 165.547C16.1067 170.88 10.6667 180.48 10.6667 190.72V266.667H8C3.62667 266.667 0 270.293 0 274.667V317.333C0 321.707 3.62667 325.333 8 325.333H10.6667V352H8C3.62667 352 0 355.627 0 360V402.667C0 407.04 3.62667 410.667 8 410.667H10.6667V434.667C10.6667 450.88 23.7867 464 40 464H178.667C194.88 464 208 450.88 208 434.667V432H256V434.667C256 450.88 269.12 464 285.333 464H424C440.213 464 453.333 450.88 453.333 434.667V410.667H456C460.373 410.667 464 407.04 464 402.667V360C464 355.627 460.373 352 456 352H453.333V325.333H456.002ZM317.335 182.187C317.335 162.56 330.242 149.333 349.335 149.333C368.429 149.333 381.335 162.56 381.335 182.187C381.335 196.161 373.655 207.468 363.735 216.213C371.415 220.161 378.775 222.933 383.575 224.32L379.095 239.68C377.815 239.36 363.735 234.987 349.335 226.453C334.935 234.987 320.855 239.36 319.575 239.68L315.095 224.32C319.895 222.933 327.255 220.16 334.935 216.213C325.014 207.468 317.335 196.161 317.335 182.187ZM72.0021 181.333H106.669V146.667H122.669V181.333H157.335V197.333H122.669V232H106.669V197.333H72.0021V181.333ZM192.002 394.667H16.0021V368H192.002V394.667ZM192.002 309.333H16.0021V282.667H192.002V309.333ZM256.002 127.893V416H208.002V127.893C208.002 116.693 201.815 106.667 191.789 101.653C175.469 93.44 165.335 77.0133 165.335 58.7733V33.4933C182.615 45.5456 207.149 58.6667 232.002 58.6667C256.855 58.6667 281.389 45.5467 298.669 33.4933V58.7733C298.669 77.0133 288.535 93.44 272.215 101.653C262.189 106.667 256.002 116.693 256.002 127.893ZM448.002 394.667H272.002V368H448.002V394.667ZM448.002 309.333H272.002V282.667H448.002V309.333Z'></path></svg>"
    }

    let content = document.createElement("div");
    content.classList.add("content");

    if (data["type"] === "ImageFull") {
        let img = document.createElement("img");
        img.alt = "picture";
        img.src = data["content"];

        content.append(img);
    }
    else if (data["type"] === "Points") {
        for (let k in data["content"]) {
            let holder = document.createElement("div");
            holder.classList.add("R", "C");

            let key = document.createElement("div");
            key.innerHTML = k;

            let val = document.createElement("div");
            val.innerHTML = data["content"][k];

            holder.append(key, val);
            content.append(holder);
        }
    }
    else if (data["type"] === "Header-Points") {
        for (let k in data["content"]) {
            let holder = document.createElement("div");
            holder.classList.add("R", "Col");
            holder.innerHTML = k;

            for (let kk in data["content"][k]) {
                let holder2 = document.createElement("div");
                holder2.classList.add("R", "C");

                let key = document.createElement("div");
                key.innerHTML = kk;

                let val = document.createElement("div");
                val.innerHTML = data["content"][k][kk];

                holder2.append(key, val);
                holder.append(holder2);
            }

            content.append(holder);
        }
    }
    else if (data["type"] === "Topic-Text") {
        content.innerHTML = data["content"].replaceAll("\n", "<br>");
    }
    else if (data["type"] === "Block") {

        content.classList.add("R", "C", "Col")

        data["content"].forEach(c => {
            let holder = document.createElement("div");

            let logo = document.createElement("div");
            logo.classList.add("logo");
            logo.style.backgroundImage = "url(" + c["logo"] + ")";

            // let img = document.createElement("img");
            // img.src = c["logo"];
            // img.alt = "icon";

            // logo.append(img);

            let datadiv = document.createElement("div");
            datadiv.classList.add("data", "R", "Col");

            let topic = document.createElement("div");
            topic.classList.add("topic", "R", "C");

            let d1 = document.createElement("div");
            d1.innerHTML = c["title"];

            let d2 = document.createElement("div");
            d2.innerHTML = c["time"];

            let text = document.createElement("div");
            text.classList.add("text");
            text.innerHTML = c["text"].replaceAll("\n", "<br>");

            topic.append(d1, d2);
            datadiv.append(topic, text);

            holder.append(logo, datadiv)
            content.append(holder)
        })
    }
    else if (data["type"] === "Range-Title") {

        content.classList.add("R", "C", "Col")

        for (let title in data["content"]) {
            let sub = document.createElement("div");
            sub.classList.add("sub");
            sub.innerHTML = title;

            content.append(sub);

            for (let k in data["content"][title]) {
                let skill = document.createElement("div");
                skill.classList.add("skill");
                skill.innerHTML = k;

                let range = document.createElement("div");
                range.classList.add("range");

                let val = document.createElement("div");
                val.style.width = data["content"][title][k] + "%";

                range.append(val);
                content.append(skill, range);
            }
        }
    }
    else if (data["type"] === "Rect-Image" || data["type"] === "Rect-Image-s") {
        data["content"].forEach(i => {
            let img = document.createElement("img");
            img.src = i;
            img.alt = "image";
            img.addEventListener("click", _ => {
                img.classList.toggle("active");
            })

            content.append(img);
        })
    }
    else if (data["type"] === "Rect-Detail") {
        data["content"].forEach(i => {
            let img = document.createElement("img");
            img.src = i["image"];
            img.alt = "image";
            img.addEventListener("click", _ => {
                overlay.classList.add("active");
                over_title.innerHTML = i["title"];
                over_time.innerHTML = i["time"];
                over_text.innerHTML = i["text"].replaceAll("\n", "<br>");
                over_link.innerHTML = "View Project";
                over_link.setAttribute("data-for", i["link"]);
            })

            content.append(img);
        })
    }

    container.append(title, content);
    body.append(container);
    document.body.append(body);
}

Data["sub"].map(c => CreateSub(c))