import React from "react";
import styled from "styled-components";
import SmartSlider from "../Slider";

Chapter.defaultProps = {
  chapterProps: {
    slider: false,
    sliderArray: [
      {
        original:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_kitchen_bath_vanity.jpg",
        thumbnail:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_kitchen_bath_vanity.jpg",
      },
      {
        original:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg",
        thumbnail:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_gallery.jpg",
      },
      {
        original:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_commercial.jpg",
        thumbnail:
          "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_commercial.jpg",
      },
    ],
    hero: {
      image:
        "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_kitchen_bath_vanity.jpg",
      title: "title",
      subtitle: "subtitle",
    },
    category: "Section is about this.",
    contentArray: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus
        tempore hic fuga, eveniet totam odit, repellendus delectus earum
        suscipit quae obcaecati amet assumenda explicabo dolore saepe laboriosam
        laudantium illo?`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum
        eveniet similique vero praesentium laudantium aperiam consequatur, ab
        dolorem ipsum, enim nulla! Vitae molestiae possimus accusamus at
        laboriosam ea ex dolore laborum est voluptates earum qui eaque corrupti,
        omnis eum officiis a doloribus asperiores excepturi vel dolorem tempora.
        Cupiditate, obcaecati?`,
    ],
    footerArray: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam
    nihil, molestias doloribus et vitae reprehenderit explicabo odit
    libero accusamus quidem eos ratione? Sunt, numquam consequuntur?
    Doloribus, pariatur? Architecto, dignissimos inventore consectetur
    dicta deserunt eius, nulla natus nesciunt autem officiis sequi
    repudiandae nam eveniet unde. Saepe voluptatem odit quod temporibus
    tempore minus ab maiores obcaecati id architecto voluptatibus
    eveniet voluptas animi alias vitae, quae eos eum placeat nihil, odio
    deserunt?`,
    ],
  },
};

export default function Chapter(props) {
  // ==================== //
  //   HELPER FUNCTIONS   //
  // ==================== //
  
  return (
    <StyledChapter>
      {/* ==== */}
      {/* HERO */}
      {/* ==== */}
      <StyledHero
        style={{
          background: `url(${props.chapterProps.hero.image})`,
          backgroundSize: "cover",
          backgroundAttachment: window.innerWidth < 768 ? "scroll" : "fixed",
        }}
      >
        <h2>{props.chapterProps.hero.title}</h2>
        <h3>{props.chapterProps.hero.subtitle}</h3>
      </StyledHero>

      {/* ======== */}
      {/* CATEGORY */}
      {/* ======== */}
      <h3>{props.chapterProps.category}</h3>

      {/* ==== */}
      {/* BODY */}
      {/* ==== */}

      {props.chapterProps.contentArray.map((paragraph, index) => {
        return <div className="body" key={index}>{paragraph}</div>;
      })}

      {/* ====== */}
      {/* SLIDER */}
      {/* ====== */}
      {props.chapterProps.sliderArray ? (
        <SmartSlider smartArray={props.chapterProps.sliderArray} />
      ) : null}

      {/* ============== */}
      {/* ENDING CONTENT */}
      {/* ============== */}
      {props.chapterProps.footerArray.map((paragraph, index) => {
        return <div className="body" key={index}>{paragraph}</div>;
      })}
    </StyledChapter>
  );
}

const StyledChapter = styled.section`
  max-width: none;
  margin: 2em auto;

  p {
    strong {
      font-weight: 900;
      color: #a6988d;
    }

    em {
      font-size: .9em;
      font-style: italic;
    }

  }

  h3,
  .body {
    max-width: 1400px;
    margin: auto;
    padding: 0.5em 1em;
    padding-left: 22px; /* MAGIC NUMBER */
  }

  h3 {
    font-weight: 800;
    font-size: 2.5em;
    line-height: 1em;
    color: #a6988d;
  }

  .body {
    font-weight: 400;
    line-height: 1.2em;
    font-size: 1.1em;
  }

  @media (max-width: 768px) {

    h3 {
      font-size: 2em;
    }
  }
`;

const StyledHero = styled.div`
  height: 80vh;
  padding: 2em;
  box-sizing: border-box;

  h2,
  h3 {
    max-width: 1400px;
    margin: auto;
    margin-left: 0;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 900;
    text-shadow: 0 0 28px #2d3436;
    user-select: none;
    line-height: 1em;
    color: #fff;
    padding-left: 0;
  }

  h3 {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    height: 60vh;
    h2 {
      font-size: 1.8em;
    }
    h3 {
      font-size: 1em;
    }
  }
`;
