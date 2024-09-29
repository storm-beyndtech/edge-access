import { ChevronDownIcon } from '@heroicons/react/20/solid';
import copyTradeDevice from '../assets/multibank-mt4.png';
import containers from '../assets/containers.jpg';

import secImg2 from '../assets/copy-trade3.png';
import secImg3 from '../assets/copy-trade2.png';
import secImg4 from '../assets/cfd_stocks.png';
import cert from '../assets/cert.png';

import img1 from '../assets/img/team/team-v1-img1.jpg';
import img2 from '../assets/img/team/team-v1-img2.jpg';
import img3 from '../assets/img/team/team-v1-img3.jpg';
import img4 from '../assets/img/team/team-v1-img4.jpg';
import step1Icon from '../assets/img/icon/working-process/step-1.png';
import step2Icon from '../assets/img/icon/working-process/step-2.png';
import step3Icon from '../assets/img/icon/working-process/step-3.png';

interface MenuItem {
  name: string;
  description?: string;
  href: string;
}

export interface MenuGroup {
  name: string;
  icon?: any;
  items: MenuItem[];
  href: string;
}

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  socialLinks: { platform: string; url: string }[];
}

export const imgRootLink =
  'https://assets.website-files.com/63904f663019b0d8edf8d57c';

export const heroAvatarLinks = [
  `${imgRootLink}/63905430069fb027f83abb71_Ellipse-3.jpg`,
  `${imgRootLink}/63905435069fb009d43abbb1_Ellipse-2.jpg`,
  `${imgRootLink}/6390542e809b5c72a0cdcb99_Ellipse.jpg`,
  `${imgRootLink}/6390543797156ee437ef0425_Ellipse-1.jpg`,
];

export const products: MenuItem[] = [
  { name: 'Forex CFDs', href: '/products/forex' },
  { name: 'Commodities CFDs', href: '/products/commodities' },
  { name: 'Indices CFDs', href: '/products/indices' },
  { name: 'Bonds CFDs', href: '/products/bonds' },
  { name: 'Stocks CFDs', href: '/products/stocks' },
  { name: 'Futures CFDs', href: '/products/futures' },
  { name: 'Digital Currencies', href: '/products/crypto' },
];

export const company: MenuItem[] = [
  { name: 'Why Edge Access', href: '/company/why' },
  { name: 'Regulations', href: '/company/regulations' },
  { name: 'Contact Us', href: '/company/contact' },
  { name: 'Expert Traders', href: '/company/traders' },
  { name: 'White Label', href: '/company/label' },
  { name: 'Insurance', href: '/company/insurance' },
  { name: 'Careers', href: '/company/careers' },
  { name: 'Servers', href: '/company/servers' },
  { name: 'MT4 Tools', href: '/company/tools' },
];

export const more: MenuItem[] = [
  { name: 'Pricing', href: '/more/pricing' },
  { name: 'Trading Conditions', href: '/more/conditions' },
  { name: 'Spreads', href: '/more/spreads' },
  { name: 'Trading Hours', href: '/more/hours' },
  { name: 'Swap Rates', href: '/products/swap' },
];

export const menuItems: MenuGroup[] = [
  {
    name: 'Products',
    icon: ChevronDownIcon,
    items: [...products],
    href: '/products',
  },
  {
    name: 'Company',
    icon: ChevronDownIcon,
    items: [...company],
    href: '/company',
  },
  { name: 'More', icon: ChevronDownIcon, items: [...more], href: '/' },
  { name: 'CopyTrading', icon: ChevronDownIcon, items: [], href: '/copytrade' },
  { name: 'Shipment', icon: ChevronDownIcon, items: [], href: '/shipment' },
];

export const steps = [
  {
    icon: step1Icon,
    title: 'Step - 1',
    subtitle: 'The Paperwork',
    description:
      'Once you place your order via mail or fax our field staff will collect the documents and consignments from the shipper.',
    delay: '0ms',
    animation: 'fadeInLeft',
    marginLeft: '0px',
  },
  {
    icon: step2Icon,
    title: 'Step - 2',
    subtitle: 'Select Location',
    description:
      'We’ll evaluate the size and weight of your cargo, find just the right carrier to fly your goods to their destination.',
    delay: '200ms',
    animation: 'fadeInRight',
    marginLeft: '60px',
  },
  {
    icon: step3Icon,
    title: 'Step - 3',
    subtitle: 'Partners Till The End',
    description:
      'Our teams will be working hard at every step of the journey to ensure that your shipment is delivered on time.',
    delay: '400ms',
    animation: 'fadeInLeft',
    marginLeft: '80px',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Rebecca Tylor',
    position: 'SEO - Founder',
    imageUrl: img1,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Helen Wilmore',
    position: 'Manager',
    imageUrl: img2,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Harley Russle',
    position: 'Senior Worker',
    imageUrl: img3,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Jennifer Rivera',
    position: 'Cargo Head',
    imageUrl: img4,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Rebecca Tylor',
    position: 'SEO - Founder',
    imageUrl: img1,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Helen Wilmore',
    position: 'Manager',
    imageUrl: img2,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Harley Russle',
    position: 'Senior Worker',
    imageUrl: img3,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Jennifer Rivera',
    position: 'Cargo Head',
    imageUrl: img4,
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
];

export const standardPlan = [
  {
    pips: {
      min: 10,
      max: 15,
    },
    title: 'STANDARD',
    truepoints: [
      'Minimum: ﹩500',
      'Maximum: ﹩4,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 15,
      max: 20,
    },
    title: 'MASTER',
    truepoints: [
      'Minimum: ﹩5,000',
      'Maximum: ﹩9,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 20,
      max: 25,
    },
    title: 'PREMIUM',
    truepoints: [
      'Minimum: ﹩10,000',
      'Maximum: ﹩19,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    title: 'ULTIMATE',
    pips: {
      min: 25,
      max: 30,
    },
    truepoints: [
      'Minimum: ﹩20,000',
      'Maximum: ﹩49,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 30,
      max: 35,
    },
    title: 'CORPORATE',
    truepoints: [
      'Minimum: ﹩50,000',
      'Maximum: Unlimited',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
];

export const advancedPlan = [
  {
    pips: {
      min: 15,
      max: 20,
    },
    title: 'STANDARD',
    truepoints: [
      'Minimum: ﹩1,000',
      'Maximum: ﹩9,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 20,
      max: 25,
    },
    title: 'MASTER PLUS',
    truepoints: [
      'Minimum: ﹩10,000',
      'Maximum: ﹩19,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 25,
      max: 30,
    },
    title: 'PREMIUM',
    truepoints: [
      'Minimum: ﹩20,000',
      'Maximum: ﹩49,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    title: 'ULTIMATE',
    pips: {
      min: 30,
      max: 35,
    },
    truepoints: [
      'Minimum: ﹩50,000',
      'Maximum: ﹩99,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 35,
      max: 40,
    },
    title: 'CORPORATE',
    truepoints: [
      'Minimum: ﹩100,000',
      'Maximum: Unlimited',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
];

export const NFP = [
  {
    pips: {
      min: 20,
      max: 25,
    },
    title: 'STARTER',
    truepoints: [
      'Minimum: ﹩50,000',
      'Maximum: ﹩99,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 25,
      max: undefined,
    },
    title: 'PREMIUM',
    truepoints: [
      'Minimum: ﹩100,000',
      'Maximum: ﹩149,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 30,
      max: undefined,
    },
    title: 'ULTIMATE',
    truepoints: [
      'Minimum: ﹩150,000',
      'Maximum: Unlimited',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
];

export const BTC = [
  {
    pips: {
      min: 25,
      max: 30,
    },
    title: 'BASIC',
    truepoints: ['1 - 1.5 BTC', '10% Trade Commission', '24/7 active support'],
  },
  {
    pips: {
      min: 30,
      max: 35,
    },
    title: 'STANDARD',
    truepoints: ['5 - 14.9 BTC', '10% Trade Commission', '24/7 active support'],
  },
  {
    pips: {
      min: 35,
      max: 40,
    },
    title: 'PREMIUM',
    truepoints: [
      '15 - 29.9 BTC',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 40,
      max: 45,
    },
    title: 'PRO',
    truepoints: ['30+ BTC', '10% Trade Commission', '24/7 active support'],
  },
];



export const testimonies = [
  {
    title: 'Product Manager | Capsule',
    name: 'Josh Tyson',
    imgUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message:
      "Edge Access has made navigating the complex world of finance a breeze. Their extensive range of services reflects their expertise. Edge Access's friendly demeanor and organized approach have made managing my investments effortless. For all things related to copy trading and financial planning, they're the ones I trust.",
  },
  {
    title: 'Senior Director of Operations | Fitbit',
    name: 'Luisa Moreno',
    imgUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message:
      "Edge Access epitomizes excellence in copy trading services. Their unwavering dedication to ensuring customer satisfaction sets them apart. With a secure approach, authentic insights, and swift responsiveness, every interaction is seamless. If you're looking for a copy trading platform that delivers results, I wholeheartedly recommend Edge Access!",
  },
  {
    title: 'Financial Analyst | Nova',
    name: 'Alisa Williams',
    imgUrl:
      'https://images.pexels.com/photos/8891485/pexels-photo-8891485.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    message:
      "I've had the privilege of working with Edge Access for some time now, and their professionalism and knowledge continue to impress me. They provide thoughtful advice tailored to my financial goals and risk tolerance. Edge Access's commitment to their clients' success is truly remarkable.",
  },
  {
    title: 'Tech Entrepreneur | Quantum',
    name: 'Michael Scott',
    imgUrl:
      'https://images.pexels.com/photos/3932542/pexels-photo-3932542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message:
      "Edge Access's financial expertise has been a game-changer for me. Their insights into market trends and their ability to explain complex concepts in simple terms have empowered me to make better financial decisions. Their services have exceeded my expectations in every way.",
  },
  {
    title: 'Investment Strategist | Luna',
    name: 'Sarah Thompson',
    imgUrl:
      'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
    message:
      "Edge Access's commitment to their clients is truly commendable. Their dedication to achieving financial goals is evident in every interaction. Their insights have helped me navigate volatile markets with confidence, and their friendly approach makes discussing finances a breeze.",
  },
  {
    title: 'Wealth Manager | Quantum',
    name: 'Anderson Cooper',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1682000321215-a061fd738095?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message:
      "Working with Edge Access has been enlightening. Their advice extends beyond mere financial matters; they're a holistic wealth advisor. Their personalized approach and genuine care for their clients' financial well-being are what set them apart. I'm grateful for their guidance.",
  },
  {
    title: 'Entrepreneur | Happy customer',
    name: 'Nate Cipher',
    imgUrl:
      'https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message:
      "Edge Access's expertise stands out in a crowded financial landscape. Their knowledge of investment opportunities and risk management is unparalleled. They've not only helped me make informed decisions but also educated me along the way. I highly recommend their services.",
  },
  {
    title: 'Crypto Enthusiast | Cosmos',
    name: 'Miller Davis',
    imgUrl:
      'https://images.unsplash.com/photo-1514851947871-97fd1e04b2e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message:
      "Edge Access is a financial wizard. Their ability to foresee market trends and recommend timely actions is remarkable. I've achieved significant growth in my investments under their guidance. They're not just financial advisors; they're strategic partners in wealth-building.",
  },
  {
    title: 'Retirement Planner | Nebula',
    name: 'Yousaf Khan',
    imgUrl:
      'https://images.unsplash.com/photo-1610611803787-7cd04238196f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message:
      "I've been a client of Edge Access for years, and their dedication to my financial success has never wavered. Their well-rounded expertise covers everything from retirement planning to tax-efficient investing. They're an invaluable asset in securing my financial future.",
  },
  {
    title: 'Socially Responsible Investor | Quantum',
    name: 'Nathan Reed',
    imgUrl:
      'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBtYWxlfGVufDB8fDB8fHww',
    message:
      "Edge Access's commitment to ethical financial practices is inspiring. Their recommendations are always aligned with my values, and their transparency in explaining financial strategies is refreshing. With their guidance, I've been able to achieve my financial goals while staying socially responsible.",
  },
  {
    title: 'CEO | Tech Innovators',
    name: 'Emily Clerk',
    imgUrl: 'https://images.pexels.com/photos/6966103/pexels-photo-6966103.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    message: "Edge Access has transformed our financial strategy. Their insights and tools are invaluable. I highly recommend them for anyone looking to optimize their financial planning.",
  },
  {
    title: 'Freelance Designer',
    name: 'Cliff West',
    imgUrl: 'https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "As a freelancer, managing finances can be tricky. Edge Access has simplified it for me. Their user-friendly platform and supportive team make financial management a breeze.",
  },
  {
    title: 'Marketing Director | Bright Media',
    name: 'Jessica Williams',
    imgUrl: 'https://images.pexels.com/photos/4063530/pexels-photo-4063530.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has provided us with excellent financial advice and support. Their tailored services have greatly benefited our company. I can't recommend them enough.",
  },
  {
    title: 'Entrepreneur',
    name: 'Michael Johnson',
    imgUrl: 'https://images.pexels.com/photos/7083929/pexels-photo-7083929.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has been instrumental in my entrepreneurial journey. Their financial planning tools are top-notch and have helped me make informed decisions.",
  },
  {
    title: 'Software Engineer | CodeWorks',
    name: 'Linda Brown',
    imgUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message: "Edge Access's platform is incredibly intuitive. Their support team is always ready to help. I've seen a significant improvement in my financial health since using their services.",
  },
  {
    title: 'HR Manager | PeopleFirst',
    name: 'Robert Smith',
    imgUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message: "Managing employee benefits and finances has never been easier, thanks to Edge Access. Their comprehensive solutions are tailored to our needs and have made a huge difference.",
  },
  {
    title: 'Financial Analyst',
    name: 'Karen Davis',
    imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message: "Edge Access offers incredible value for anyone serious about their finances. Their tools are precise, and their team is knowledgeable. I've been able to make better investment choices with their help.",
  },
  {
    title: 'Teacher',
    name: 'James Wilson',
    imgUrl: 'https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access's platform is user-friendly and has made managing my finances straightforward. I appreciate their transparency and the quality of their customer service.",
  },
  {
    title: 'Graphic Designer | Creative Studio',
    name: 'Patricia Thomas',
    imgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message: "Working with Edge Access has been a game-changer for me. Their innovative solutions have streamlined my financial management and allowed me to focus more on my creative work.",
  },
  {
    title: 'Real Estate Agent',
    name: 'Charles Martinez',
    imgUrl: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access's expertise in financial planning is unmatched. Their tools have given me a competitive edge in the real estate market. Highly recommend!",
  },
  {
    title: 'Consultant',
    name: 'Laura Garcia',
    imgUrl: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "The Edge Access team has been incredibly helpful in guiding me through complex financial decisions. Their personalized approach sets them apart from other services.",
  },



  {
    title: 'Engineer | BuildIt',
    name: 'Andrew Rodriguez',
    imgUrl: 'https://images.pexels.com/photos/3837259/pexels-photo-3837259.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has made it easy for me to manage my investments and savings. Their platform is intuitive, and their customer support is always available to answer my questions.",
  },
  {
    title: 'Financial Consultant',
    name: 'Elizabeth Johnson',
    imgUrl: 'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has been an indispensable partner in my financial journey. Their customized advice and efficient tools have significantly improved my financial planning.",
  },
  {
    title: 'Small Business Owner',
    name: 'David Lee',
    imgUrl: 'https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has been crucial in managing my business finances. Their strategic insights and proactive support have helped my business grow exponentially.",
  },
  {
    title: 'Artist',
    name: 'Karen Harris',
    imgUrl: 'https://images.pexels.com/photos/7015101/pexels-photo-7015101.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has made managing my finances as an artist straightforward and hassle-free. Their team understands the unique needs of creatives and provides tailored solutions.",
  },
  {
    title: 'Startup Founder',
    name: 'Sophia Nguyen',
    imgUrl: 'https://images.pexels.com/photos/4491433/pexels-photo-4491433.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has been a game-changer for my startup. Their financial guidance and resources have helped us navigate early-stage challenges and set us on a path to success.",
  },
  {
    title: 'Photographer',
    name: 'Phil Sullivan',
    imgUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has simplified my financial management as a freelance photographer. Their intuitive platform and helpful team have been invaluable to my business.",
  },
  {
    title: 'Health Coach',
    name: 'Olivia Martinez',
    imgUrl: 'https://images.pexels.com/photos/4936359/pexels-photo-4936359.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access's expertise has been instrumental in growing my health coaching business. Their tailored financial advice has helped me make informed decisions and achieve my goals.",
  },
  {
    title: 'Digital Marketing Specialist',
    name: 'Amy Robinson',
    imgUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access has revolutionized my financial management. Their platform is user-friendly, and their team is always ready to provide expert advice. Highly recommended!",
  },
  {
    title: 'Business Consultant',
    name: 'Dave Johnson',
    imgUrl: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: "Edge Access's comprehensive financial solutions have been a game-changer for my consulting business. Their insights and tools are invaluable. I highly recommend their services to anyone looking to optimize their financial planning.",
  }
  
];


export const tradeSteps = [
  {
    title: 'Find a Lead Trader in the Leaderboard',
    desc: 'Check out the Leaderboard, search by performance, assets, percentage of the win rate and more. Find the one for you and talk to support via Live Chat.',
  },
  {
    title: 'Enroll for an Account',
    desc: 'Register on the platform to access the Autocopy dashboard and essential trading indicators that show how the Lead Trader performs and profits.',
  },
  {
    title: 'Verify account and deposit investment amount',
    desc: 'Choose deposit method and make payment of amount you want to profit with trader.',
  },
  {
    title: 'After Trade ends, Take Profit triggers',
    desc: 'You copy Stop Loss and Take Profit settings after your leader, but you can withdraw after trade ends.',
  },
  {
    title: 'Confirm settings and start Earning',
    desc: "After payment approval. Now you are automatically mirroring trader's positions. You can monitor your progress and profits or change your Autocopy profile settings any time.",
  },
];

//Home Section
export const HomeSec1 = {
  title: 'Copy Lead Traders',
  span: undefined,
  desc: 'Join and trade via a social network and profit from the knowledge of trading experts. Copy Lead Traders from around the world and reach your targets!',
  moreDesc: [
    'Find a trader you like and make sure to check if the risk score suits you.',
    'Choose if you want to invest relative or a fixed amount per each trade.',
    'Begin mirroring the strategies of other traders automatically in real-time.',
  ],
  imgUrl: copyTradeDevice,
};

//Home Section
export const HomeSec2 = {
  title: 'Copy Trading Simplified',
  desc: 'With over 500+ registered and regulated traders on Edge Access, you get the liberty to beat the PDT & day trading by getting started with our copy trading tool below the $25k minimum requirement. Mirror your desired expert on the best linked platform like Thinkorswim, Webull, Robinhood. At Edge Access we thrive to bring you the modern trading experience.',
  imgUrl: secImg2,
  url: '#',
};

//Home Section
export const aboutSec2 = {
  title: 'Certification and Licensing',
  desc: 'Certification validates skills through assessments by organizations, while licensing grants legal permission to engage in specific activities. Both ensure standards, professionalism, and public safety in various industries.',
  imgUrl: cert,
  url: '/EDGE-ACCESS.pdf',
  btnLabel: 'View Certificate',
  pdf: true,
};

//Home Section
export const HomeSec3 = {
  title: 'When They Trade, You Trade',
  desc: "Whether you're a beginner learning the basics or you simply don't have time to watch the markets, now it's easy to leverage other traders' expertise. With Edge Access Copy Trading, you can automatically copy top-performing traders, instantly replicating their trading in your own portfolio.",
  imgUrl: secImg3,
};

//Home Section
export const HomeSec4 = {
  title: '',
  span: undefined,
  desc: undefined,
  moreDesc: [
    'Increase your profits with the highest rebates & commissions in the industry.',
    'Join a growing network of 30,000+ introducing brokers since 2005.',
    'Partner with a global leader in the financial markets.',
    'Experience our exclusive IB program that suits your business.',
    'Build a client network with our advanced partnership solution.',
  ],
  imgUrl: secImg4,
  reverse: true,
  bulletList: true,
};

//Company Sections
export const companySec1 = {
  title: 'About',
  span: 'Edge Access',
  desc: "Edge Access is a contemporary copy trading platform, distinguished by its modern features in comparison to MetaQuotes' platform. Experience lightning-fast order execution and a user-friendly interface that enables you to indulge in Raw Pricing trading. Benefit from No Dealing Desk trading seamlessly, accessible from anywhere in the world.",
  moreDesc: [
    'Simple user interface',
    'Advanced take profit and stop loss systems',
    'Detachable charts and varying chart time frames',
    'Live sentiments and depth of market',
  ],
  imgUrl:
    'https://images.pexels.com/photos/7352527/pexels-photo-7352527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  bulletList: true,
};

//Shipment Section
export const ShipSec1 = {
  title: 'Swift Shipment',
  span: undefined,
  desc: 'At Edge Access, we offer a Swift Shipment service designed to get your packages delivered as quickly as possible. Our service includes:',
  moreDesc: [
    'Expedited Processing: Orders are prioritized and processed immediately.',
    'Fast Shipping Methods: We use the quickest and most reliable shipping options available.',
    'Real-Time Tracking: Track your shipment every step of the way with our advanced tracking technology.',
    'Guaranteed Delivery Times: Receive your package within the promised timeframe, ensuring you get what you need when you need it.',
  ],
  imgUrl: containers,
  bulletList: true,
};

//Hero Details for Products
export const fxHero = {
  title: 'Forex',
  subtitle:
    "Access the world's largest and most liquid market with Raw spreads starting from 0.0 pips.",
};

export const cmHero = {
  title: 'Commodities',
  subtitle:
    'Trade the most popular CFDs on Commodities from around the world, including energies, agriculture and metals. Edge Access combines tight pricing and flexible conditions to give you one powerful product.',
};

export const indicesHero = {
  title: 'Indices',
  subtitle:
    'Gain exposure to the basket of instruments making up the index in just one trade. The world’s most popular Indices are available on all Edge Access trading platforms.',
};

export const bondsHero = {
  title: 'Bonds',
  subtitle:
    'Trade the world’s most popular and liquid fixed income securities from the United States, the UK, Europe and Japan on MetaTrader 4 and 5.',
};

export const cryptoHero = {
  title: 'Cryptocurrency',
  subtitle:
    'Cryptocurrencies are volatile, unregulated, decentralised and controlled almost exclusively by retail speculators. Trade the world’s newest and most exciting asset class as CFDs with an FSA regulated Forex CFD Provider.',
};

export const stocksHero = {
  title: 'Stocks',
  subtitle:
    'Trade over +2100 large-cap Stocks CFDs across the ASX, NYSE and NASDAQ stock exchanges with superior execution and tight pricing exclusively on the Edge Access MetaTrader 5 platform.',
};

export const futuresHero = {
  title: 'Futures',
  subtitle:
    "Futures are one of the most popular form of CFDs. Edge Access offer a range of Futures from around the world, including ICE Dollar Index and CBOE VIX Index. Online Futures based CFDs are offered exclusively on Edge Access ' MetaTrader 4 & 5 Platform.",
};

//Hero Details for Company
export const whyHero = {
  title: 'Why Edge Access',
  subtitle: '',
};

export const regHero = {
  title: 'Regulations',
  subtitle:
    'Edge Access is authorised and regulated by multiple Regulators across the globe. Trade with peace of mind knowing that Edge Access is monitored by some of the strictest financial regulators’ bodies in the world.',
};

export const contactHero = {
  title: 'Swift Customer Service, 24/7',
  subtitle: '',
};

export const tradersHero = {
  title: 'Expert Traders',
  subtitle:
    'The Edge Access traders are one of the most competitive traders in the world. Making the most profit on BullCopytrade is an admirable title, getting it takes time, brains and patience. You can copy any of the traders at Edge Access.',
};

export const labelHero = {
  title: 'White Label',
  subtitle:
    "White label partnership program is a complete solution giving your clients access to our market-leading liquidity and technology.",
};

export const insuranceHero = {
  title: 'Client Funds Insurance up to US$1,000,000',
  subtitle: 'No opt-in is required and no extra costs',
};

export const serversHero = {
  title: 'Servers',
  subtitle:
    'Virtual Private Server (VPS) & Other Trading Servers allows traders to run automated trading strategies 24 hours a day 7 days a week with the fastest possible connectivity to the Edge Access trading servers.',
};

export const toolsHero = {
  title: 'Advance Trading',
  subtitle:
    "With the help of Advanced Trading Tools, the world's best trading platform is now even better, providing our traders with a competitive edge",
};

//Hero Details for More
export const pricingHero = {
  title: 'Explore Packages',
  subtitle:
    "We've got a great experience available to our customers at the best trading conditions for minimal prices",
};

export const condHero = {
  title: 'Trading Conditions',
  subtitle:
    'The Edge Access Trading environment offers the most aggressive pricing and flexible trading conditions globally. They are ideal for traders who demand the best execution quality and lowest spreads.',
};

export const spreadsHero = {
  title: 'Spreads',
  subtitle:
    'Edge Access ’ spreads are among the lowest across all major and minor currency pairs. In particular, our average EUR/USD spread* of 0.1 pips is one of the lowest in the world.',
};

export const hoursHero = {
  title: 'Trading Hours',
  subtitle:
    'At Edge Access there’s always a market for you to trade. Our dedicated specialists are available for you 24 hours a day, 5 days a week.',
};

export const swapHero = {
  title: 'Swap Rates',
  subtitle:
    'Edge Access swap rates are amongst the most competitive in the world. Maximise your overnight swap earnings or reduce your swap costs across our wide range of products.',
};

export const trackHero = {
  title: 'Track Your Products',
  subtitle: '',
};
