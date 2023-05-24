const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const children = htmlElement.children;
    if (children.length >= 1) {
        const childrenArray = Array.from(children);
        childrenArray.forEach((ele) => {
            ele.remove();
        })
    }

    const element = document.createElement("p");
    element.innerText = string;
    htmlElement.appendChild(element);
};

htmlGenerator('Party Time 🎉, Rohdog 🫵🏼 !', partyHeader);