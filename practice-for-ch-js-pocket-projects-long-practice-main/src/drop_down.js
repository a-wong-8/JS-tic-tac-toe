const dogs = 
{
  "Corgi":"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = function () {
    const result = [];
    Object.getOwnPropertyNames(dogs).forEach((dog) => {
        let link = document.createElement("a");
        link.innerHTML = dog;
        link.setAttribute("href", dogs[dog]);
        
        let li = document.createElement("li");
        li.classList.add("dog-link");
        li.append(link);
        result.push(li);
    })
    return result;
}

export const attachDogLinks = function() {
  const dogLinks = dogLinkCreator();
  const element = document.querySelector("ul.drop-down-dog-list");
  dogLinks.forEach((dogLink) => {
    element.appendChild(dogLink);
  })
}