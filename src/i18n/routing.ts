// We’ll integrate with Next.js’ routing in two places:

//     Middleware: Negotiates the locale and handles redirects & rewrites (e.g. / → /en)
//     Navigation APIs: Lightweight wrappers around Next.js’ navigation APIs like <Link />

// This enables you to work with pathnames like /about, while i18n aspects like language prefixes are handled behind the scenes.

// To share the configuration between these two places, we’ll set up routing.ts:


import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'ar'],

    // Used when no locale matches
    defaultLocale: 'en'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);