import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

export default function GoUp() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container
      scrollposition={scrollPosition}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <HiOutlineArrowNarrowUp color="white" size={25} />
    </Container>
  );
}
