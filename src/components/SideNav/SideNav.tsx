// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';

import { useNavigate } from 'react-router-dom';

import SideNavigation from '@cloudscape-design/components/side-navigation';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

type SideNavProps = {
    activeHref: string;
};

export default function SideNav({ activeHref }: SideNavProps) {
    const navigate = useNavigate();

    const sideNavItems: SideNavigationProps.Item[] = [
        {
            type: 'link',
            text: 'New Patient Registration',
            href: '/newpatientregistration',
        },
        {
            type: 'link',
            text: 'Exisiting Patients',
            href: '/exisitingpatients',
        },
        {
            type: 'link',
            text: 'New Consultation',
            href: '/new',
        },{
            type: 'link',
            text: 'Consultations',
            href: '/conversations',
        },
        { type: 'divider' },
        {
            type: 'link',
            text: 'Generate Audio',
            href: '/generate',
        },
        { type: 'divider' },
        {
            type: 'link',
            text: 'Settings',
            href: '/settings',
        },
        { type: 'divider' },
        {
            type: 'link',
            text: 'SentinelCare Pro',
            href: 'https://aws.amazon.com/healthscribe',
            external: true,
        },
        {
            type: 'link',
            text: 'AWS for Health',
            href: 'https://aws.amazon.com/health',
            external: true,
        },
        {
            type: 'link',
            text: 'Amazon Web Services',
            href: 'https://aws.amazon.com',
            external: true,
        },
    ];

    return (
        <SideNavigation
            activeHref={activeHref}
            header={{ text: 'AWS HealthScribe', href: '/' }}
            items={sideNavItems}
            onFollow={(e) => {
                e.preventDefault();
                if (e.detail.external === true) {
                    window.open(e.detail.href, '_blank', 'noopener');
                    return;
                }
                navigate(e.detail.href, { relative: 'route' });
            }}
        />
    );
}
