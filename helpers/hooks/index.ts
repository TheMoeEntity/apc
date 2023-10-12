import axios from "axios";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Helpers, linkType } from "..";
import { isValidEmail } from "../../utils";

export const useSticky = (styles: string) => {
  const headerRef = useRef(null);
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    let number = headerRef.current.style.display === "" ? 120 : 175;
    const stickyClass = scrollTop >= number ? styles : "";
    setSticky(stickyClass);
  };
  return { headerRef, sticky };
};

export const useLinks = () => {
  const router = useRouter();
  const [links, setLinks] = useState<linkType[]>(Helpers.links);
  const LinkAction = (page: string) => {
    setLinks((currLink) => {
      const newLink = currLink.map((x) =>
        x.href === page
          ? {
              ...x,
              isActive: true,
            }
          : {
              ...x,
              isActive: false,
            }
      );
      return newLink;
    });
    router.push(`/${page}`);
  };
  return { links, LinkAction };
};
export const useSideBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef(null);
  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      sideContent.current.style.width = "70%";
      sideContent.current.style.visibility = "visible";
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      sideContent.current.style.width = "0%";
      sideContent.current.style.visibility = "hidden";
    }, 400);
  };
  return { sidebar, setSideBar, hide, show, sideContent };
};
export const useSubmit = (val: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const [submit, setSubmit] = useState("SUBMIT NOW");
  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSubmit("Sending message....");
    e.preventDefault();
    const data = {
      firstName: e.target[0].value,
      address: e.target[2].value,
      email: e.target[3].value,
      phone: e.target[1].value,
      message:
        // "Hello Mr Syks, This is the message from the site: " +
        e.target[4].value,
    };

    if (!isValidEmail(data.email)) {
      enqueueSnackbar("Your email is invalid", {
        variant: "error",
      });
      setSubmit("SUBMIT NOW");
      return;
    } else if (data.message === "" || data.message.length <= 10) {
      enqueueSnackbar("Message cannot be empty or short", {
        variant: "error",
      });
      setSubmit("SUBMIT NOW");
      return;
    }

    try {
      const url = "/api/consult";
      const res = await axios.post(url, data);

      res.status === 200 &&
        enqueueSnackbar("Message successfully sent", {
          variant: "success",
        });
      console.log(res.status);
      console.log(res);
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        val = "";
      }, 3000);
    } catch (error) {
      enqueueSnackbar(
        "There was an error sending message, try again: " + error,
        {
          variant: "error",
        }
      );
      console.log(error);
    }
    setSubmit("SUBMIT NOW");
  };
  return { submit, handlesubmit };
};
export const useResize = () => {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };

  useEffect(resizeTextArea, [val]);
  return { val, setVal, textAreaRef };
};
