import React from 'react';
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: 'Muhammad Ahmad',
    accounts: [
      {
        url: 'https://github.com/uvacoder',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/VaLandscapes',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://dev.to/fu4303',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: 'https://linkedin.com/in/alecbcampbell',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
        label: 'Quora Account',
        type: 'red',
        icon: <FaQuora />
      },
      {
        url: 'mailto:freeunioncoder@gmail.com',
        label: 'Mail ahmad',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
