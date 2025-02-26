import React, { useRef, useState } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { Carousel } from "react-bootstrap";
import Banner from "../imgs/banner_main.png";
import BannerRight from "../imgs/banner_right.png";
import Chicken from "../imgs/chicken.png";
import Cold from "../imgs/cold.png";
import Dairy from "../imgs/dairy.png";
import Pet from "../imgs/pet.png";
import Fruit from "../imgs/fruit.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Banner1 from "../imgs/banner1.png";
import Banner2 from "../imgs/banner2.png";
import Next from "../imgs/next.png";
import Prev from "../imgs/prev.png";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import img16 from "../imgs/category_img/16.png";
import img4 from "../assets/imgs/category_img/4.png";
import img17 from "../imgs/category_img/17.png";
import img23 from "../imgs/category_img/23.png";
import img24 from "../imgs/category_img/24.png";
import Cart from "../imgs/cart.svg";
import '../assets/header.css';
import Logo from '../imgs/logo_top.svg';
import img21 from '../imgs/category_img/radish.png';
import img22 from '../imgs/category_img/ab.png';
import img44 from '../imgs/category_img/cd.png';
import img45 from '../imgs/category_img/ef.png';
import img25 from '../imgs/category_img/gh.png';
import img51 from '../imgs/category_img/ij.png';
import img52 from '../imgs/category_img/kl.png';
import img53 from '../imgs/category_img/mn.png';
import img54 from '../imgs/category_img/op.png';
import img55 from '../imgs/category_img/qr.png';
import img56 from '../imgs/category_img/st.png';
import img57 from '../imgs/category_img/uv.png';
import img58 from '../imgs/category_img/wx.png';
import img59 from '../imgs/category_img/yz.png';
import img60 from '../imgs/category_img/un.png';


function HomePage() {
  const swiperRef = useRef(null);
  const [isRedHeart, setIsRedHeart] = useState(false);
  const toggleHeart = () => {
    setIsRedHeart(!isRedHeart);
  };

  return (
    <>
      <Header>
        <nav class="navbar">
          <div class="logo">
            <img alt="Logo" src={Logo} />
          </div>
          <div class="nav-links">
            <div className="nav-links">
              <a href="#">
                My Account <i className="fas fa-chevron-down"></i>
              </a>
            </div>

            <a href="#">
              Wish List <span className="wishlist-count">0</span>
            </a>
          </div>
          <div class="cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <img src="src/imgs/cart.svg" alt="cart " />
          </div>
        </nav>
      </Header>
      <section className="landing-section">
        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-lg-9 col-md-8 py-5 d-flex justify-content-center align-items-center">
              <Carousel
                indicators={true}
                interval={5000}
                pause="hover"
                className="w-100"
              >
                {[1, 2, 3, 4].map((_, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={Banner}
                      alt={`banner-${index}`}
                      className="img-fluid rounded mx-auto d-block"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-lg-3  col-md-4 d-flex justify-content-center px-2  py-5 align-items-center">
              <img
                src={BannerRight}
                alt="banner right"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="shop-by-categories">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between pt-5">
            <h1 className="fw-bold">Shop By Categories</h1>
            <div className="d-flex gap-3">
              <div
                className="p-2 border border-dark rounded cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src={Prev} alt="prev" />
              </div>
              <div
                className="p-2 border border-dark rounded cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src={Next} alt="next" />
              </div>
            </div>
          </div>

          <div className=" gap-5 d-flex justify-content-center align-items-center py-3">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              navigation={false}
              modules={[Navigation]}
              className="mySwiper"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                320: { slidesPerView: 1, centeredSlides: true },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
            >
              {[
                { img: Fruit, text: "Fruits & Vegetables" },
                { img: Dairy, text: "Dairy , Breads & Eggs" },
                { img: Chicken, text: "Chicken , Meat & Fish" },
                { img: Pet, text: "Pet Food" },
                { img: Cold, text: "Cold Drinks & Juices" },
                { img: Fruit, text: "Fruits & Vegetables" },
                { img: Dairy, text: "Dairy , Breads & Eggs" },
                { img: Chicken, text: "Chicken , Meat & Fish" },
                { img: Pet, text: "Pet Food" },
                { img: Cold, text: "Cold Drinks & Juices" },
              ].map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="d-flex justify-content-center"
                >
                  <div className="card justify-content-center align-items-center py-5 px-4 border-0">
                    <img src={item.img} alt={item.text} />
                    <h4 className="fs-5 pt-3">{item.text}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="product-card">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between pt-5">
            <h1 className="fw-bold">Best Sellers</h1>
            <div className="d-flex gap-3">
              <a className="text-success">
                View All <FaArrowRight className="ms-2" />
              </a>
            </div>
          </div>
          <div className="container py-5">
            <div className="row gx-0 d-flex justify-content-center">
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img16}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Waffles Homestyle <br />
                    </p>
                    <p className="">500 g</p>
                  </div>
                  <div className="row align-items-center px-2  ">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 184.00</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="px-3 py-1 text-white sale">Sale</div>
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img4}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold  product-name">
                      Bolognese Tofu Sauce
                    </p>
                    <p>500 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 185.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img17}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Sun Chips <br />
                    </p>
                    <p>500 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 186.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="px-3 py-1 text-white new">New</div>
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img23}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Cornichons Biona{" "}
                    </p>
                    <p>500 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 187.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img24}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Bread Mix Damily
                    </p>
                    <p>500 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 188.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-delivery">
        <div className="container-fluid mt-5"></div>
      </section>

      <section className="product-card">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between pt-5">
            <h1 className="fw-bold">Fruits&Vegtables</h1>
            <div className="d-flex gap-3">
              <a className="text-success">
                View All <FaArrowRight className="ms-2" />
              </a>
            </div>
          </div>
          <div className="container py-5">
            <div className="row gx-0 d-flex justify-content-center">
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img21}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Radish <br />
                    </p>
                    <p className="">500 g</p>
                  </div>
                  <div className="row align-items-center px-2  ">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 184.00</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end align-items-end">
                    
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img22}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold  product-name">
                      Cabbage
                    </p>
                    <p>500 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 185.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img44}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Cucumber <br />
                    </p>
                    <p>500 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 186.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end align-items-end">
                    
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img45}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Cornichons Biona{" "}
                    </p>
                    <p>500 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 187.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img25}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Bread Mix Damily
                    </p>
                    <p>500 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 188.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-card">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between pt-5">
            <h1 className="fw-bold">Breakfast&Dairy</h1>
            <div className="d-flex gap-3">
              <a className="text-success">
                View All <FaArrowRight className="ms-2" />
              </a>
            </div>
          </div>
          <div className="container py-5">
            <div className="row gx-0 d-flex justify-content-center">
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img51}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Milkmaild <br />
                    </p>
                    <p className="">500 g</p>
                  </div>
                  <div className="row align-items-center px-2  ">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 600.00</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end align-items-end">
                    
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img52}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold  product-name">
                     Multi Grain Bread
                    </p>
                    <p>200 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 100.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img53}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                     Epigaima <br />
                    </p>
                    <p>100 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 150.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end align-items-end">
                    
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img54}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Eggs
                    </p>
                    <p>100 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 350.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img55}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                     Food gool
                    </p>
                    <p>1 L</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 45.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="hot-deals">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <img src={Banner1} alt="Banner 1" className="w-100 py-2" />
            </div>
            <div className="col-md-6">
              <img src={Banner2} alt="Banner 1" className="w-100 py-2" />
            </div>
          </div>
        </div>
      </section>

      <section className="product-card">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between pt-5">
            <h1 className="fw-bold">Biscutes,Snacks&Chocklate</h1>
            <div className="d-flex gap-3">
              <a className="text-success">
                View All <FaArrowRight className="ms-2" />
              </a>
            </div>
          </div>
          <div className="container py-5">
            <div className="row gx-0 d-flex justify-content-center">
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img56}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Wheat thin oiginal <br />
                    </p>
                    <p className="">100 g</p>
                  </div>
                  <div className="row align-items-center px-2  ">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 400.00</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end align-items-end">
                    
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img57}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold  product-name">
                    Werther's original
                    </p>
                    <p>50 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 50.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img58}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Chocolate Combo <br />
                    </p>
                    <p>3 Pack </p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 350.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="px-3 py-1 text-white new">New</div>
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img59}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                      Unibic ChocoNut
                    </p>
                    <p>100 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 120.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
                <div className="card p-2 rounded-0">
                  <div className="d-flex justify-content-end">
                    <div
                      onClick={toggleHeart}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    >
                      <FontAwesomeIcon
                        icon={isRedHeart ? solidHeart : regularHeart}
                        color={isRedHeart ? "red" : "black"}
                      />
                    </div>
                  </div>
                  <div className="justify-content-center align-items-center p-3">
                    <img
                      src={img60}
                      alt="product"
                      className="img-fluid card-img"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold product-name">
                     Belvita Duo Crunch 
                    </p>
                    <p>150 g</p>
                  </div>
                  <div className="row align-items-center px-2">
                    <div className="col-auto">
                      <p className="m-0 price fw-bold">₹ 150.00</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <button className="bg-warning p-2 border-0 rounded">
                        <img src={Cart} alt="Cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
export default HomePage;
