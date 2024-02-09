import React from "react";
import productImg from "../images/image-product-desktop.jpg";
import basket from "../images/icons8-basket-64.png";

const App = () => {
  return (
    <>
      <section className="bg-bodyBg w-100 h-screen">
        <div className="container h-screen w-100 flex  items-center">
          <div className="boxs w-[43rem] mx-auto flex md:flex-row flex-col">
            <div className="box-1 w-[50%]">
              <img
                className="img-fluid"
                src={productImg}
                alt="productImageDesktop"
              />
            </div>
            <div className="box-2 w-[50%] bg-white flex flex-col items-center">
              <div className="flex flex-col w-[80%] gap-6 pt-5">
                <h3 className="uppercase text-xl text-textColor">Perfume</h3>
                <h1 className="text-5xl font-semibold">
                  Gabrielle Essence Eau De Parfum
                </h1>
                <p className="text-textColor">
                  A floral, solar and voluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the house of CHANEL
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="text-4xl text-tugma font-semibold">$149.99</h1>{" "}
                  <span className="line-through text-textColor">$169.99</span>
                </div>
                <button className="bg-tugma text-white flex items-center justify-center py-3 rounded-[1rem] active:scale-90">
                  <img className="w-[2rem]" src={basket} alt="" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
