import type { Actions } from '@sveltejs/kit';
import { contactFormSchema } from '@/lib/types/types';


export const actions: Actions = {
    default: async ({ request }: { request: Request }) => {
      const formData = Object.fromEntries(await request.formData());
  
      try {
        const result = contactFormSchema.parse(formData);
        console.log('SUCCESS'); 
        console.log(result); 
      } catch (error) {
        console.log(`error: ${error}`)
      }
    },
  };