import { BsDiscord, BsInstagram, BsSteam, BsGithub, Bs123 } from 'react-icons/bs';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai'
import { SiTypescript, SiVite } from 'react-icons/si';
import { DiNodejsSmall, DiReact, DiVisualstudio } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';

export default {
    'github': {
        'username': 'Mustifix'
    },
    'discord': {
        'id': '1016336509965705296'
    },
    'social_media_accounts': [
        {
            'label': 'Github',
            'to': 'https://github.com/Mustifix',
            'icon': BsGithub,
        },
        {
            'label': 'Discord Users',
            'to': 'https://discord.com/users/1016336509965705296',
            'icon': BsDiscord,
        },
        {
            'label': 'Instagram',
            'to': 'https://instagram.com/mustifix_',
            'icon': BsInstagram,
        },
        {
            'label': 'Discord Server',
            'to': 'https://discord.gg/ZetrxCda7J',
            'icon': BsDiscord,
        },
        {
            'label': 'Discord Uptime',
            'to': 'https://discord.gg/QhYtameqYC',
            'icon': BsDiscord,
        }
    ],
    'techs': [
        {
            'lang': 'HTML5',
            'icon': AiFillHtml5
        },
        {
            'lang': 'CSS3',
            'icon': IoLogoCss3
        },
        {
            'lang': 'JavaScript',
            'icon': IoLogoJavascript
        },
        {
            'lang': 'TypeScript',
            'icon': SiTypescript
        },
        {
            'lang': 'Node.JS',
            'icon': DiNodejsSmall
        },
        {
            'lang': 'React',
            'icon': DiReact
        },
        {
            'lang': 'Vite',
            'icon': SiVite
        },
        {
            'lang': 'Next.js',
            'icon': TbBrandNextjs
        },
    ]
}
