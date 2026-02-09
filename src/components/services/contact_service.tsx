interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  project: string;
  specialty: string;
  specialtyOther?: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ message: string }> => {
  const apiUrl = 'https://aulqtsnpan4mfyrisj5tsacetm0vkcoz.lambda-url.us-east-1.on.aws/api/contact';


  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    
    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('[ContactService] Error response data:', responseData);
      throw new Error(responseData.message || `Server responded with status ${response.status}`);
    }

    return responseData;
  } catch (error) {
    console.error('[ContactService] Fetch error:', error);
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      console.error('[ContactService] Network error detected. Possible causes:');
      console.error('- Backend server not running');
      console.error('- CORS issues');
      console.error('- Wrong API URL');
      console.error('- Network connectivity problems');
    }
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Network error. Please check your connection and try again.'
    );
  }
};