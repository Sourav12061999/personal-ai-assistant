import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
} from '@tabler/icons-react';

import classes from './sidebar.module.css';
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?(): void;
    link: string;
}

function NavbarLink({ icon: Icon, label, active, onClick, link }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <Link to={link}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </UnstyledButton>
            </Link>
        </Tooltip>
    );
}

const mockdata = [
    { icon: IconHome2, label: 'Home' , link: "/" },
    { icon: IconGauge, label: 'Dashboard', link: "/train" },
    // { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
    // { icon: IconCalendarStats, label: 'Releases' },
    { icon: IconUser, label: 'Account', link: "/accounts" },
    { icon: IconFingerprint, label: 'Security', link: "/permissions" },
    // { icon: IconSettings, label: 'Settings' },
];

function Sidebar() {
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <nav className={classes.navbar}>
            <Center>
                {/* <MantineLogo type="mark" size={30} /> */}
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={0}>
                <NavbarLink icon={IconSwitchHorizontal} label="Change account" link='' />
                <NavbarLink icon={IconLogout} label="Logout" link=''/>
            </Stack>
        </nav>
    );
}

export default Sidebar;