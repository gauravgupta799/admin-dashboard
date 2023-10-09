import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUserAdd} from "react-icons/ai";
import {SlCalender} from "react-icons/sl";
import {LuGanttChartSquare} from "react-icons/lu";
import {AiOutlineMail} from "react-icons/ai";
import {BsChatLeftDots} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";
import {BiDollar} from "react-icons/bi";
import {BsQuestionCircle} from "react-icons/bs";
import {TbLogout} from "react-icons/tb"

export const navLinkItems = [
    {
        id:1,
        path: '/',
        name: 'Dashboard',
        icon: <AiOutlineHome />,
    },
    {
        id:2,
        path: '/user',
        name: 'User',
        icon: <AiOutlineUserAdd />,
    },
    {
        id:3,
        path: '/accesscontrol',
        name: 'Access Control',
        icon: <AiOutlineHome />,
    },
    {
        id:4,
        path: '/charts',
        name: 'Charts',
        icon: <LuGanttChartSquare />,
    },
    {
        id:5,
        path: '/invoice',
        name: 'Invoice',
        icon: <LuGanttChartSquare />,
    },
    {
        id:6,
        path: '/calender',
        name: 'Calender',
        icon: <SlCalender />,
    },
];

export const profileNavItems = [
    {
        id:1,
        path:"/profile",
        name:"Profile",
        icon:<AiOutlineUserAdd/>
    },
    {
        id:2,
        path:"/inbox",
        name:"Inbox",
        icon:<AiOutlineMail/>
    },
    {
        id:3,
        path:"/chat",
        name:"Chat",
        icon:<BsChatLeftDots/>
    },
    {
        id:4,
        path:"/setting",
        name:"Setting",
        icon:<AiOutlineSetting/>
    },
    {
        id:5,
        path:"/pricing",
        name:"Pricing",
        icon:<BiDollar/>
    },
    {
        id:6,
        path:"/faq",
        name:"FAQ",
        icon:<BsQuestionCircle/>
    },
    {
        id:7,
        path:"/logout",
        name:"Logout",
        icon:<TbLogout/>
    },
]
