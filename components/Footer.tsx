import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="relative w-full mt-40 h-16 bg-[#1f2937] text-center">
      <div className="absolute inset-x-0 items-center pt-5 bottom-0 h-16">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
      </div>

    </footer>
  );
};

export default Footer;
