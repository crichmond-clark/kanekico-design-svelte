import { readable } from 'svelte/store';
import type { serviceDataType } from '../types/types';

export const  smallBusinessServicesData = readable<serviceDataType[]>([
    {   id: 1,
        title: 'Small Business Basic',
        tier: 'Basic',
        price: 50,
        buttonText: 'More Details',
        src: '/img/package-images/small-business1.png',
        alt: 'Small business website',
        serviceType: 'small-business',
        details: [
            'Up to 5 pages',
            'On page SEO optimisation',
            'Free domain',
            'Free hosting',
            'Free SSL certificate',
            'Free email',
            'Free maintenance',
            'Free support',
            'Free updates'
        ]
    },
    {
        id: 2,
        title: 'Small Business Advanced',
        tier: 'Advanced',
        price: 100,
        buttonText: 'More Details',
        src: '/img/package-images/small-business2.png',
        alt: 'Small business website',
        serviceType: 'small-business',
        details: [
            'Up to 10 pages',
            'Localised Landing pages',
            'On page SEO optimisation',
            'Free domain',
            'Free hosting',
            'Free SSL certificate',
            'Free email',
            'Free maintenance',
            'Free support',
            'Free updates'
        ]
    }
])


export const eCommerceServicesData = readable<serviceDataType[]>([
    {
        id: 3,
        title: 'eCommerce Basic',
        tier: 'Basic',
        price: 150,
        buttonText: 'More Details',
        src: '/img/package-images/ecommerce1.png',
        alt: 'Ecommerce website',
        serviceType: 'ecommerce',
        details: [
            'Up to 10 pages',
            'Localised Landing pages',
            'On page SEO optimisation',
            'Free domain',
            'Free hosting',
            'Free SSL certificate',
            'Free email',
            'Free maintenance',
            'Free support',
            'Free updates'
        ]
    },
    {
        id: 4,
        title: 'eCommerce Advanced',
        tier: 'Advanced',
        price: 500,
        buttonText: 'More Details',
        src: '/img/package-images/ecommerce2.png',
        alt: 'Ecommerce website',
        serviceType: 'ecommerce',
        details: [
            'Up to 10 pages',
            'Localised Landing pages',
            'On page SEO optimisation',
            'Free domain',
            'Free hosting',
            'Free SSL certificate',
            'Free email',
            'Free maintenance',
            'Free support',
            'Free updates'
        ]
    }
])

export const contentServicesData = readable<serviceDataType[]>([
    {
        id: 5,
        title: 'Blog',
        tier: 'Basic',
        price: 100,
        buttonText: 'More Details',
        src: '/img/package-images/blog1.png',
        alt: 'Blog website',
        serviceType: 'content',
        details: [
            'Up to 10 pages',
            'Localised Landing pages',
            'On page SEO optimisation',
            'Free domain',
            'Free hosting',
            'Free SSL certificate',
            'Free email',
            'Free maintenance',
            'Free support',
            'Free updates'
        ]
    },
    {
        id: 6,
        title: 'Blog + User Accounts',
        tier: 'Advanced',
        price: 200,
        buttonText: 'More Details',
        src: '/img/package-images/blog2.png',
        alt: 'Blog website',
        serviceType: 'content',
        details: [
            'Up to 10 pages',
            'Localised Landing pages',
            'On page SEO optimisation',
            'Free domain',
            'Free hosting',
            'Free SSL certificate',
            'Free email',
            'Free maintenance',
            'Free support',
            'Free updates'
        ]
    }
])