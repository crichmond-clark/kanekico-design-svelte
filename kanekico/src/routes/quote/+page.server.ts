    import type { Actions } from '@sveltejs/kit';
    import { quoteFormSchema } from '@/lib/types/types';


    export const actions: Actions = {
        default: async ({ request }: { request: Request }) => {
        const formData = Object.fromEntries(await request.formData());
    
        try {
            const result = quoteFormSchema.parse(formData);
            console.log('SUCCESS'); 
            console.log(result); 
        } catch (error) {
            console.log(`error: ${error}`)
        }
        },
    };