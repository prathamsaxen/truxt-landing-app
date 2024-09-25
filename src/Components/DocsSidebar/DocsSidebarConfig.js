// Importing the necessary icons
import { FaHandSpock, FaReact } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdPrivacyTip } from "react-icons/md";
import { RiJavascriptFill } from "react-icons/ri";
import { GrConfigure, GrProjects } from "react-icons/gr";
import { IoPricetagOutline } from "react-icons/io5";
import { FaQ } from "react-icons/fa6";

// Exporting the array with icons included
const DocsSidebarData = [
  {
    type: "heading",
    title: "Overview"
  },
  {
    type: "item",
    title: "Getting Started",
    icon: FaHandSpock,
    link: "/docs/getting-started"
  },
  {
    type: "item",
    title: "Why Truxt?",
    icon: CiStar,
    link: "/docs/why-truxt"
  },
  {
    type: "item",
    title: "Privacy",
    icon: MdPrivacyTip,
    link: "/docs/privacy"
  },
  // {
  //   type: "heading",
  //   title: "UI Components"
  // },
  // {
  //   type: "item",
  //   title: "React JS",
  //   icon: FaReact,
  //   link: "/docs/react-ui-component"
  // },
  // {
  //   type: "item",
  //   title: "JS Snippet",
  //   icon: RiJavascriptFill,
  //   link: "/docs/js-snippet"
  // },
  // {
  //   type: "item",
  //   title: "Common Settings",
  //   icon: GrConfigure,
  //   link: "/docs/common-settings"
  // },
  // {
  //   type: "heading",
  //   title: "Links"
  // },
  // {
  //   type: "item",
  //   title: "FAQS",
  //   icon: FaQ,
  //   link: "/docs/faq"
  // },
  // {
  //   type: "item",
  //   title: "Pricing",
  //   icon: IoPricetagOutline,
  //   link: "/docs/pricing"
  // },
  // {
  //   type: "item",
  //   title: "Projects",
  //   icon: GrProjects,
  //   link: "/docs/projects"
  // }
];

export default DocsSidebarData;
