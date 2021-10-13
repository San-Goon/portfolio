import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards.js";
import { Box } from "@material-ui/core";

import { motion } from "framer-motion";

const projects = [
  // {
  //   name: "",
  //   subtitle: ``,
  //   description: ``,
  //   github_url: `https://github.com/San-Goon/`,
  //   deployed_url: ``,
  //   stacks: [""],
  //   img: "",
  // },

  {
    name: "SNS 사이트",
    subtitle: `트위터처럼 자유롭게 이용할 수 있는 SNS 사이트`,
    description: `Next.js와 Redux를 이용하여 페이지 제작 및 상태관리를 하였고\n
    SSR을 구현하기 위해서 Node.js를 이용해 서버도 구축 해 보았습니다. 또한 \n
    AWS에 사이트를 배포하였습니다. `,
    github_url: `https://github.com/San-Goon/NodeBird-react`,
    stacks: ["react", "next", "redux", "node", "mysql", "aws"],
    deployed_url: `http://kanghun.xyz`,
    img: "SNS.PNG",
  },
  {
    name: "개인 BLOG",
    subtitle: `각 프로젝트들의 수정계획, 개선예정사항 및 버그해결이력을 게시하는 개인 블로그`,
    description: `Sanity와 Next.js를 이용하여 구축한 개인 개발 블로그입니다. 각 프로젝트들의 수정계획, 개선예정사항 및 버그해결이력을 게시할 예정이며 현재 블로그 작업중에 있습니다. `,
    github_url: `https://github.com/San-Goon/next-blog`,
    deployed_url: `https://cranky-golick-c731b4.netlify.app`,
    stacks: ["react", "next", "sanity"],
    img: "블로그.PNG",
  },
  {
    name: "나만의 책장",
    subtitle: `책,영상등 간단한 리뷰를 남길 수 있는 사이트`,
    description: `React.js에 TypeScript를 사용하여 개발한 사이트입니다. redux를 이용하여 상태관리를 하였으며, ID:mark@test.com PW:fastcampus로 로그인 가능합니다.`,
    github_url: `https://github.com/San-Goon/my-books`,
    deployed_url: `https://flamboyant-meninsky-12c931.netlify.app/signin`,
    stacks: ["react", "typescript", "redux"],
    img: "MYBOOKS.PNG",
  },

  {
    name: "웹게임 사이트",
    subtitle: `다양하고 간단한 웹게임들을 플레이 해 볼 수 있는 사이트`,
    description: `React.js를 이용하여 제작하였고, Router를 사용했으며, JavaScript를 공부하며\n
    간단한 게임들을 플레이 할 수 있도록 만든 사이트입니다.`,
    github_url: `https://github.com/San-Goon/webgames-react-router`,
    stacks: ["react", "javascript"],
    deployed_url: `https://wonderful-curran-1ba79e.netlify.app/gugudan`,
    img: "웹게임.PNG",
  },
  {
    name: "Prototype Shop",
    subtitle: `상품을 담고 제거할 수 있는 간단한 사이트`,
    description: `React.js를 이용하여 제작하였고, 상품을 담고 제거할 수 있는 간단한 기능들만 담아놓은 웹 사이트입니다.`,
    github_url: `https://github.com/San-Goon/webgames-react-router`,
    stacks: ["react"],
    deployed_url: `https://elegant-spence-5b3f4d.netlify.app/`,
    img: "쇼핑몰.PNG",
  },
  {
    name: "포트폴리오",
    subtitle: `개인 포트폴리오 웹사이트`,
    description: `React.js를 이용하여 개발한 페이지입니다.`,
    github_url: `https://github.com/San-Goon/portfolio`,
    stacks: ["react"],
    deployed_url: `https://kanghun-portfolio.netlify.app/`,
    img: "포트폴리오.PNG",
  },
  {
    name: "스타벅스 메인페이지",
    subtitle: `스타벅스 메인페이지를 그대로 제작한 사이트`,
    description: `기본적인 HTML/CSS/JS 를 사용하여 제작한 페이지입니다.`,
    github_url: `https://github.com/San-Goon/starbucks`,
    deployed_url: `https://affectionate-jang-6f49b3.netlify.app/`,
    stacks: ["html", "css", "javascript"],
    img: "스타벅스.PNG",
  },
];

const settings = {
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  centerPadding: "0",
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

export default function AutoGrid() {
  const projects_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="projects2"
      variants={projects_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Slider {...settings}>
        {projects.map((i, index) => (
          <Box className="custom-slick" key={index.toString()}>
            <Cards {...projects[index]} />
          </Box>
        ))}
      </Slider>
    </motion.div>
  );
}
