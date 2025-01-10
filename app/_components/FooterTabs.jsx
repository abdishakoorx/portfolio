import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { FileDown, Mail } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const data = [
    {
        title: 'Email',
        icon: <Mail className="w-full h-full text-blue-600" />,
        href: 'mailto:abdishakoor145@gmail.com',
    },
    {
        title: 'GitHub',
        icon: <GitHubLogoIcon className="w-full h-full text-gray-800" />,
        href: 'https://github.com/abdishakoorx',
    },
    {
        title: 'LinkedIn',
        icon: <LinkedInLogoIcon className="w-full h-full text-blue-700" />,
        href: 'https://linkedin.com/in/abdishakoorx',
    },
    {
        title: 'Download CV',
        icon: <FileDown className="w-full h-full text-green-600" />,
        href: '/ABDISHAKOOR_HASSAN_CV.pdf',
        download: true,
    },
];


export function FooterTabs() {
    return (
        <div className="fixed max-w-full -translate-x-1/2 bottom-4 left-1/2">
            <Dock className="items-end gap-6 px-4 py-4 bg-gray-800 rounded-full shadow-lg backdrop-blur-sm">
                {data.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target={item.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="transition-transform duration-200 hover:scale-105"
                    >
                        <DockItem className="transition-colors bg-white rounded-full shadow-md hover:bg-gray-100 aspect-square">
                            <DockLabel className="font-mono text-sm text-gray-800">{item.title}</DockLabel>
                            <DockIcon className="text-gray-600">{item.icon}</DockIcon>
                        </DockItem>
                    </a>
                ))}
            </Dock>
        </div>

    );
}