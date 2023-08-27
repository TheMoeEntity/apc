import { MouseEvent, MutableRefObject } from "react";
export type linkType = {
  name: string;
  isActive: boolean;
  href: string;
};
export class Helpers {
  static testimonials: { text: string; author: string }[] = [
    {
      text: "I reached out to my close family friend and attorney looking for a referral to assist me with the review of my Family's Trust. Sophie was his immediate response as they are fellow attys and office neighbors and what ablessing that turned out to be. She e-mailed me to introduce herself and I immediately called her (you can hear her smile in her voice) and she asked how she could help. This was difficult as I was sharing some very personal information with someone I really didn't know but she made me feel comfortable so I provided her the information she needed to review our trust, she acknowledged it's receipt and provided me a complete review within a few days. She answered all my questions, provided me with a few items to look into and made a few suggestions for the family to discuss to eliminate any possible confusion in the future. She also provided me with answers to some questions I didn't know I should have asked. As I mentioned earlier these things can be difficult no matter how much you know or don't know or think you know! Sophie will do an outstanding job helping you navigate the entire Estate Planning process providing answers to all your questions and then some...Thanks Again Sophie",
      author: "D.M.",
    },
    {
      text: "Sophie is everything my family needed in an estate planning attorney. She is knowledgeable, meticulous, and most importantly a caring person. She takes the time to get to know her clients and thoroughly explains all aspects of the estate plan. I was never embarrassed to ask a question, and she would at every turn make sure my husband and I felt comfortable with the decisions before us. It was a true pleasure to work with her and I feel confident we made the right decision from our first phone conversation.",
      author: "K.H.",
    },
    {
      text: "Sophie is incredibly personable, highly professional, and knowledgeable. We appreciate how she always provided us with personal attention throughout the process. She is organized and the ultimate professional. We always felt we were in good hands during a difficult process.",
      author: "D.N.",
    },
  ];
  static links: linkType[] = [
    {
      name: "Home",
      isActive: true,
      href: "",
    },
    {
      name: "About",
      isActive: false,
      href: "about",
    },
    {
      name: "Services",
      isActive: false,
      href: "services",
    },
    {
      name: "Process",
      isActive: false,
      href: "process",
    },
    {
      name: "Fees",
      isActive: false,
      href: "fees",
    },
    {
      name: "Testimonials",
      isActive: false,
      href: "testimonials",
    },
    {
      name: "Contact Us",
      isActive: false,
      href: "contact",
    },
  ];

  static accordionEffect = (
    e: MouseEvent<HTMLDivElement>,
    container?: MutableRefObject<HTMLDivElement>
  ) => {
    const event = e.target as HTMLElement;
    const entry =
      (e.target as HTMLElement).nextSibling ??
      (e.target as HTMLElement).parentElement.nextSibling;
    console.log(entry);
    const height = (entry.nextSibling as HTMLElement).style.maxHeight;
    const elemHeight = (entry.nextSibling as HTMLElement).scrollHeight + 80;

    event.style.background =
      height === "1300px" || height === "0px" ? "#B7A189" : "#0A1849";
    event.style.color =
      height === "1300px" || height === "0px" ? "black" : "white";
    event.children[0].children[0].className =
      height === "1300px" || height === "0px" ? "fas fa-minus" : "fas fa-plus";
    (event.children[0] as HTMLElement).style.color =
      height === "1300px" || height === "0px" ? "black" : "#b7a189";
    (event.nextSibling.nextSibling as HTMLElement).style.padding =
      height === "1300px" || height === "0px" ? "40px 40px" : "0 40px";
    (event.nextSibling as HTMLElement).style.background =
      height === "1300px" || height === "0px" ? "#F1F1F1" : "transparent";
    (event.nextSibling.nextSibling as HTMLElement).style.maxHeight =
      height === "1300px" || height === "0px" ? `${elemHeight}px` : "0";
  };
}
