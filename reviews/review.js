const content=[
    {
        id: 1,
        name: "Rachel",
        job: "Web Designer",
        img: "../img/1.jpg",
        text: 'I recently had the pleasure of staying at [HotelName], and it was an unforgettable experience. From the moment I arrived, the staff went above and beyond to ensure my comfort and satisfaction. The luxurious accommodations, coupled with exceptional service, made my stay truly memorable. The hotel’s prime location made exploring the city a breeze, and I can’t wait to return to [HotelName] on my next visit. Highly recommended!'
    },
    {
        id: 2,
        name: "Dean",
        job: "App developer",
        img: "../img/2.jpg",
        text: 'My husband and I went for dinner in restaurant X and really enjoyed the atmosphere. The food was fresh and delicious, and the best part was that the chef sent us a dessert they had created that day. We were delighted.'
    },
    {
        id: 3,
        name: "Sam",
        job: "Programmer",
        img: "../img/3.jpg",
        text: 'I got a pair of boots from store X and Im very satisfied. They are high-quality and worth the money. The store also offered free shipping at that price so thats a plus!'
    },
    {
        id: 4,
        name: "Dante",
        job: "Psychologist",
        img: "../img/4.jpg",
        text: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.'
    },
    {
        id: 5,
        name: "peter",
        job: "designer",
        img: "../img/5.jpg",
        text: 'First time in (RN) and YOU have to go! It’s the cutest little spot with amazing food. The (FN) is to die for. IT WAS FIRE!! The service we received was so amazing and we will definitely be back again. They made us feel welcomed and gave us an amazing experience.'   },
    {
        id: 6,
        name: "samuel",
        job: "civil engineer",
        img: "../img/6.jpg",
        text: ' It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.'
    },
    {
        id: 7,
        name: "Sakura",
        job: "Dev ops",
        img: "../img/7.jpg",
        text: ' I have to say, I enjoyed every single bite of the meal in (RN). I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. Ideal for those who want a romantic night out. There was also plenty of room for bigger groups.'
    },
    {
        id: 8,
        name: "Daniel",
        job: "technician",
        img: "../img/8.jpg",
        text: ' Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.'
    }
]
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const nextbtn=document.querySelector(".next-btn");
const prevbtn=document.querySelector(".prev-btn");
const randombtn=document.querySelector(".random");

let current=0;
 window.addEventListener("DOMContentLoaded",function()
 {
    show_person();
 });

 function show_person()
 {
    const item= content[current];
    img.src= item.img;
    author.textContent =item.name;
    job.textContent=item.job;
    info.textContent =item.text;
 }

 nextbtn.addEventListener("click",function()
 {
    current++;
    if(current>content.length-1)
    {
        current=0;
    }
    show_person();
 });
 prevbtn.addEventListener("click",function()
 {
    current--;
    if(current<0)
    {
        current=content.length-1;
    }
    show_person();
 })
 randombtn.addEventListener("click",function()
 {
    current=Math.floor(Math.random()*content.length-1);
    show_person();
 })