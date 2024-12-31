import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './constants';

export const submitForm = async (formData: FormData) => {
  try {
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
      to_name: 'Rushikesh'
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};