interface ContactFormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ message: string }> => {
  const apiUrl = 'http://localhost:5000/api/contact';
  console.log('[ContactService] Attempting to submit form data to:', apiUrl);
  console.log('[ContactService] Request payload:', formData);

  try {
    console.log('[ContactService] Initiating fetch request...');
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('[ContactService] Received response, status:', response.status);
    
    if (!response.ok) {
      console.warn('[ContactService] Response not OK, attempting to parse error...');
      try {
        const errorData = await response.json();
        console.error('[ContactService] Error response data:', errorData);
        throw new Error(errorData.message || `Server responded with status ${response.status}`);
      } catch (parseError) {
        console.error('[ContactService] Failed to parse error response:', parseError);
        throw new Error(`Request failed with status ${response.status}`);
      }
    }

    const responseData = await response.json();
    console.log('[ContactService] Successful response data:', responseData);
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