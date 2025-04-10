import React from "react";
import chef from "../assets/chef.png";
import vector from "../assets/vector.png";
import qr from '../assets/qr.png'
import oval from '../assets/oval.png'
import smalloval from '../assets/smalloval.png'
import spices from '../assets/spices.png'

const AllergyAdvice = () => {
  // Define the data directly in this file
  const recipes = [
    {
      title: "For the Dough",
      ingredients: [
        "120 gms refined flour",
        "1/4 tsp baking powder",
        "1/2 tsp salt water (for kneading)",
      ],
    },
    {
      title: "For the Chicken Filling",
      ingredients: [
        "1 cup chicken (minced)",
        "1/2 cup onions, finely chopped",
        "1/4 tsp black pepper powder",
        "1 tbsp oil",
        "1/2 tsp garlic paste",
        "1/2 tsp soya sauce",
        "Salt",
        "1/4 tsp vinegar",
      ],
    },
    {
      title: "For the Vegetarian Filling",
      ingredients: [
        "1 cup cabbage and carrots, grated",
        "2 tbsp onions, finely chopped",
        "1/2 tsp garlic, finely chopped",
        "1 tbsp oil",
        "1/4 tsp vinegar",
        "1/2 tsp soya sauce",
        "Salt to taste",
        "Pepper to taste",
        "1 tbsp cornflour",
      ],
    },
    {
      title: "For Chilli Sauce",
      ingredients: [
        "25 grams garlic, peeled",
        "6 grams whole red chillies",
        "3 tbsp vinegar",
        "1 tbsp oil",
        "Salt to taste",
        "Sugar to taste",
      ],
    },
  ];

  const allergyAdvice = `
   Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna.

Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse netus mollis interdum.

Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus.

Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique.

Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer.
  `;

  return (
    <div className="pt-20 px-30">
      {/* Header Section */}
      <div className="mt-1 flex justify-between items-center pt-10 pb-10">
        <div className="text-[30px]">
          <h1 className="italic text-[#0C6967]">Allergy Advices</h1>
          <p className="text-[20px] font-light text-gray-500">
            AT OUR RESTAURANT
          </p>
          <p className="font-medium">
            We use only the freshest and highest <br />
            quality ingredients in all our dishes, <br />
            <span className="text-[#D95103]">
              and offer transparency in our ingredient <br /> labeling.
            </span>
          </p>
        </div>
        <div>
          <img className="h-[556px]" src={chef} alt="Chef" />
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="flex justify-center gap-4 items-center mt-10 mb-10">
        <img src={vector} alt="Vector" />
        <h1
          className="font-bold text-2xl"
          style={{ fontFamily: '"Chela One", cursive' }}
        >
          <span className="text-[#D95103]">Ingredient's</span> Used
        </h1>
        <img src={vector} alt="Vector" />
      </div>

     
      <div className="relative h-auto mt-10">
      
        <img 
          src={oval}
          alt="Oval"
          className="absolute m-auto w-[400px] h-[300px] left-50"
        />
        <img
          src={spices}
          alt="Spices"
          className="absolute bottom-0  w-[1300px] h-[600px] top-90 "
        />
        <img
          src={smalloval}
          alt="Small Oval"
          className="absolute bottom-0 right-50 w-[150px] h-[250px]"
        />

        <div className="relative space-y-8 flex flex-col items-center pt-16">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6  w-[744px] border-[#0C6967] border-4 "
            >
              <h2 className="text-xl font-bold text-[#0C6967] mb-4">{recipe.title}</h2>
              <ul className="list-disc pl-5 text-gray-700">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Allergy Advice Section */}
      <div className="mt-10">
      <div className="flex justify-center gap-4 items-center mt-10 mb-10">
        <img src={vector} alt="Vector" />
        <h1
          className="font-bold text-2xl"
          style={{ fontFamily: '"Chela One", cursive' }}
        >
          <span className="text-[#D95103]">Allergy</span> Advice
        </h1>
        <img src={vector} alt="Vector" />
      </div>
        <p className="text-gray-700 mt-4 whitespace-pre-line">{allergyAdvice}</p>
      </div>

      {/* QR Code Section */}
      <div className=" bg-[#FAFBFB]">
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-[#0C6967]  text-2xl font-bold">Scan the QR code</h2>
        <p className="text-center text-gray-700">
          You can also check the allergy advices using your phone as well
        </p>
        <div className="mt-4  p-4 rounded-lg flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-[#D95103]"> 
            <img src={qr} alt="" />SCAN ME!</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AllergyAdvice;
