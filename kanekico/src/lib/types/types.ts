import{ z } from 'zod'; 

export type whyDataType = {
	title: string;
	description: string;
	icon: string;
};

export type serviceDataType = {
	id	: number;
	title: string;
	tier: string;
	price: number;
	buttonText: string;
	src: string;
	alt: string;
	details: string[]
	serviceType: string;
};

export const quoteFormSchema = z.object({
	name: z.string().toLowerCase(),
	email: z.string().email().toLowerCase(),
	businessName: z.string().toLowerCase(),
	businessIndustry: z.string().toLowerCase(),
	services: z.string().toLowerCase(),
});

export type QuoteForm = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
	name: z.string().toLowerCase(),
	email: z.string().email().toLowerCase(),
	businessName: z.string().toLowerCase(),
	message: z.string().toLowerCase(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;