export type linkType = {
  name: string;
  isActive: boolean;
  href: string;
};
export class Helpers {
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
}
