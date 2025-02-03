import React from "react";
import John from "./images/JohnCarter.png";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  HomeIcon,
  Cog6ToothIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  ArrowRight,
  DollarSign,
  LayoutTemplateIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NavSideMenu() {
  const [open, setOpen] = React.useState(0);
  const navigate = useNavigate();
  const handleOpen = (value,navVal) => {
    setOpen(open === value ? 0 : value);
    if(navVal && value){ navigate(navVal);} 
  };

  return (
    <>
      <div></div>
      <List className="">
        <Accordion
          open={open === 1}
          icon={
            <ChevronRightIcon
              strokeWidth={1.5}
              className={`mx-auto h-3 w-4 transition-transform ${
                open === 1 ? "rotate-90" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1,"/")}
              className={`${
                open === 1
                  ? "text-[#CB3CFF]"
                  : " text-[#AEB9E1] hover:text-[#CB3CFF]"
              } border-b-0 p-3 cursor-pointer`}
            >
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className=" mr-auto ">Dashboard</Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-color-dd">
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                All Pages
              </ListItem>
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Reports
              </ListItem>
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Products
              </ListItem>
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Tasks
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronRightIcon
              strokeWidth={1.5}
              className={`mx-auto h-3 w-4 transition-transform ${
                open === 2 ? "rotate-90" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2,"/Page1")}
              className={`${
                open === 2
                  ? "text-[#CB3CFF]"
                  : " text-[#AEB9E1] hover:text-[#CB3CFF]"
              } border-b-0 p-3 cursor-pointer`}
            >
              <ListItemPrefix>
                <StarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className=" mr-auto ">Feature</Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-color-dd">
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Feature 1
              </ListItem>
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Feature 2
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <ChevronRightIcon
              strokeWidth={1.5}
              className={`mx-auto h-3 w-4 transition-transform ${
                open === 3 ? "rotate-90" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`${
                open === 3
                  ? "text-[#CB3CFF]"
                  : " text-[#AEB9E1] hover:text-[#CB3CFF]"
              } border-b-0 p-3 cursor-pointer`}
            >
              <ListItemPrefix>
                <UserIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className=" mr-auto ">Users</Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-color-dd">
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                User A
              </ListItem>
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                User B
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={
            <ChevronRightIcon
              strokeWidth={1.5}
              className={`mx-auto h-3 w-4 transition-transform ${
                open === 4 ? "rotate-90" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`${
                open === 4
                  ? "text-[#CB3CFF]"
                  : " text-[#AEB9E1] hover:text-[#CB3CFF]"
              } border-b-0 p-3 cursor-pointer`}
            >
              <ListItemPrefix>
                <DollarSign className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className=" mr-auto ">Pricing</Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-color-dd">
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Price A
              </ListItem>
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Price B
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={
            <ChevronRightIcon
              strokeWidth={1.5}
              className={`mx-auto h-3 w-4 transition-transform ${
                open === 5 ? "rotate-90" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 5}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`${
                open === 5
                  ? "text-[#CB3CFF]"
                  : " text-[#AEB9E1] hover:text-[#CB3CFF]"
              } border-b-0 p-3 cursor-pointer`}
            >
              <ListItemPrefix>
                <DollarSign className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className=" mr-auto ">Integrations</Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-color-dd">
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent hover:text-white cursor-pointer  hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Integration A
              </ListItem>
              <ListItem className="pl-[45px] text-sm group border-l-2 border-transparent  hover:text-white cursor-pointer hover:border-l-[#CB3CFF] active:border-l-[#CB3CFF] hover:bg-[#0A1330]">
                Integration B
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
      <hr className="mx-[-16px;]" />

      <List>
        <ListItem className="cursor-pointer text-color-dd">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className="text-color-dd">
          <ListItemPrefix>
            <LayoutTemplateIcon className="h-5 w-5" />
          </ListItemPrefix>
          Template Pages
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <div className="h-9 w-9 bg-[#CB3CFF] rounded-full inline-block relative">
              <img
                src={John}
                className="rounded-xl absolute top-0.5 left-0.5"
                alt="User"
              />
            </div>
          </ListItemPrefix>
          <div className="flex flex-col">
            <div className="font-bold">John Carter</div>
            <div className="text-xs text-color-dd">Account Setting</div>
          </div>
        </ListItem>
        <ListItem>
          <button className="w-full cursor-pointer bg-gradient-to-r from-[#CB3CFF] to-[#7F25FB] text-white py-2 px-4 rounded hover:opacity-80">
            Get Templates <ArrowRight className="inline" />
          </button>
        </ListItem>
      </List>
    </>
  );
}
