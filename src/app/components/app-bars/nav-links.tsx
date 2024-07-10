'use client'
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NextLink from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';

interface LinkProps {
    open: boolean;
}

const links = [
    { name: 'Dashboard', href: '/pages/Dashboard', icon: CategoryIcon},
    { name: 'Settings', href: '/pages/Dashboard/Settings', icon: SettingsIcon}
]

export default function NavLinks(
    {
        open
    }: LinkProps
){
    const pathname = usePathname();
    return(
        <>
            {links.map((link) => (
                <ListItem key={link.name} disablePadding sx={{ display: 'block' }}>
                <NextLink href={link.href}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <link.icon />
                    </ListItemIcon>
                    <ListItemText primary={link.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </NextLink>
              </ListItem>
            ))}

        </>
    );
}