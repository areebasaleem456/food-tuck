import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";

function Homepage() {
  return (
    <div className="flex flex-col ">
      <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center ">
        {/* Heading */}
        <div className="text-white w-full md:w-[50%]">
          <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-orange-700 whitespace-nowrap text-center md:text-left">
            Its Quick & Amusing!
          </h1>

          <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
            <span className="text-orange-700">Th</span>e Art of Speed Food
            Quality
          </h1>

          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
            <button className="bg-orange-700 text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
              See More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
          <Image
            src={"/hero.jpeg"}
            height={300}
            width={500}
            alt="Hero Image"
            className="w-[90%] md:w-auto max-w-[300px] md:max-w-full"
          />
        </div>
      </section>

      <div className="flex flex-row md:flex-row justify-between items-center p-3">
        <div className=" md:w-[700px] w-full text-center md:text-left">
          <h2 className="text-3xl font-bold ml-[130px] text-orange-700">
            about us
          </h2>
          <p className="text-orange-700 text-3xl font-bold ml-[130px] gap-3">
            We{" "}
            <span className="text-white font-semibold"> Create The Best </span>{" "}
            <br />{" "}
            <span className="text-white font-semibold leading-7">
              {" "}
              Foody Product
            </span>
          </p>
          <p className="mt-4 ml-[130px] flex justify-start ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse enim
            magni adipisci dicta voluptate, corporis velit tempore quos, ea
            eveniet nam consectetur et sed molestiae inventore natus excepturi
            sit quidem!
          </p>

          <div className="flex flex-col mt-6">
            <div className=" flex flex-row items-center space-x-2">
              <TiTick className="ml-[130px]" />
              <p>
                lacus nisi et ac similique excepturi quaerat qui incidunt amet.
              </p>
            </div>
            <div className="flex flex-row  items-center space-x-2">
              <TiTick className="ml-[130px]" />
              <p>
                Quisquie diam pallenteque excepturi quaerat qui incidunt amet.
              </p>
            </div>
            <div className="flex flex-row  items-center space-x-2">
              <TiTick className="ml-[130px]" />
              <p>Lorem ispum dilor excepturi quaerat qui incidunt amet.</p>
            </div>
            <button className="bg-orange-700 text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800 ml-[130px] mt-6">
              Read More
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 text-center md:text-left mr-[120px]">
          <div className="mb-4">
            <Image
              src={"/egg.png"}
              height={500}
              width={600}
              alt="egg picture"
            ></Image>
          </div>
          <div className="flex flex-row justify-center md:justify-start space-x-4">
            <div className="w-[300px] h-[400px]">
              <Image
                src={"/sauce.png"}
                height={400}
                width={300}
                alt="sauce picture"
              ></Image>
            </div>
            <div className="w-[300px] h-[00px]">
              <Image
                src={"/toast.png"}
                height={400}
                width={300}
                alt="toast picture"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-orange-700 font-serif font-semibold text-center">
          Food Catergory
        </h2>
        <p className="text-orange-700 text-center text-2xl py-4">
          Ch{" "}
          <span className="text-white text-center font-extrabold text-2xl">
            oose Food Iteams
          </span>
        </p>
        <div className="flex flex-row mt-10 gap-4 ">
          <div className="w-1/2 sm:w-1/4 p-2">
            <Image
              src={"/item1.png"}
              height={400}
              width={400}
              alt="item1"
            ></Image>
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            <Image
              src={"/item2.png"}
              height={400}
              width={400}
              alt="item2"
            ></Image>
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            <Image
              src={"/item3.png"}
              height={400}
              width={400}
              alt="item3"
            ></Image>
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            <Image
              src={"/item4.png"}
              height={400}
              width={400}
              alt="item4"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-row  ">
        <div className="pt-36 ml-[120px] ">
          <div className="flex flex-row">
            <div>
              <Image
                src={"/lemon.png"}
                height={400}
                width={200}
                alt="picture"
              ></Image>
            </div>

            <div>
              <Image
                className="pt-24 py-3 ml-2"
                src={"/item2.png"}
                height={200}
                width={200}
                alt="picture"
              ></Image>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row">
              <div className="pt-2">
                <Image
                  src={"/yogurt.png"}
                  height={600}
                  width={100}
                  alt="picture"
                ></Image>
              </div>
              <div>
                <Image
                  className="py-3 ml-3"
                  src={"/Mask Group (2).png"}
                  height={150}
                  width={150}
                  alt="picture"
                ></Image>
              </div>
            </div>
            <div className="ml-2">
              <div className="flex flex-col">
                <Image
                  src={"/fries.png"}
                  height={100}
                  width={108}
                  alt="picture"
                ></Image>
              </div>
              <div>
                <Image
                  className="pt-3"
                  src={"/pasta2.png"}
                  height={100}
                  width={108}
                  alt="picture"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-48 mt-36  md:ml-24 lg:ml-48 px-4 py-8">
          <h2 className="text-2xl font-semibold text-orange-700 ">why choose us</h2>
          
          <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mt-2">Ex <p className="text-white block">
              ta Ordinary Taste <br /> And Experiense
            </p>
          </h1>
          <p className="w-44 md:w-96 text-white mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            unde neque sit minus perferendis at commodi animi mollitia placeat.
            Voluptatem asperiores quae tempore quaerat esse sapiente amet ipsa
            laboriosam
          </p>
          <div className="flex flex-row flex-wrap gap-7 mt-6">
            <div className=" mr-7 h-16 w-16 bg-orange-700 flex items-center justify-center">
              <IoFastFoodOutline size={40} />
            </div>
            <div className=" mr-7 h-16 w-16 bg-orange-700 flex items-center justify-center">
              <MdLunchDining size={40} />
            </div>
            <div className="h-16 w-16 bg-orange-700 flex items-center justify-center">
              <MdOutlineDinnerDining size={40} />
            </div>
          </div >
          <div className="flex flex-row  flex-wrap mt-6 items-center">
            <div className="h-16 w-2 bg-orange-700 "></div>
            <div className="h-16 w-20 bg-white text-orange-700 text-center flex items-center justify-center font-extrabold text-3xl p-4">30+ </div>
            <div className=" h-16 w-40 text-black font-semibold bg-white text-center flex items-center justify-center">Years Of 
              <br />
               Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
