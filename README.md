### Code Challenge: Replicate the Personal Website Portfolio Form with TypeScript and Tailwind CSS

**Task**:  
You are tasked with replicating a personal website portfolio page using **Tailwind CSS** and **TypeScript**. The form at the end of the page must be implemented using **Formik**, **Yup**, and any other necessary libraries, including **Headless UI** if needed. The form should be a **two-step form** where the user can fill out the first section of the form, save the data, and proceed to the second section. **TypeScript** must be used throughout the project to ensure proper typing and type safety.

[View Figma Design](<https://www.figma.com/design/U0AQqDt22gx3yjfmpjej9y/Personal-website-%7C-Portfolio-(Community)?node-id=587-638&p=f&t=lzhSZuPkTjji53bI-0>)

### Form Requirements:

The form must collect the following information from the user:

1. **Full Name**
   - Type: Text
   - Description: To capture the user's full name.
2. **Email Address**
   - Type: Email
   - Description: To capture the user's email address.
3. **Phone Number**
   - Type: Phone
   - Description: To capture the user's phone number.
4. **Date of Birth**
   - Type: Date
   - Description: To capture the user's birth date.
5. **Gender**

   - Type: Select (dropdown)
   - Description: To capture the user's gender.
   - Options: Male, Female, Non-Binary, Prefer not to say

6. **Country**

   - Type: Select (dropdown)
   - Description: To capture the user's country.
   - Options: List of countries

7. **City**
   - Type: Text
   - Description: To capture the user's city.
8. **Street Address**

   - Type: Text
   - Description: To capture the user's street address.

9. **Postal Code**

   - Type: Text
   - Description: To capture the user's postal code.

10. **Preferred Contact Method**

    - Type: Radio Buttons
    - Description: To capture the preferred contact method (Email, Phone, Text).

11. **Message**

    - Type: Long Text
    - Description: To capture the user's message or inquiry.

12. **How did you hear about us?**

    - Type: Select (dropdown)
    - Description: To understand how the user found the contact form.
    - Options: Social Media, Search Engine, Word of Mouth, Other

13. **Preferred Appointment Date**

    - Type: Date
    - Description: To schedule an appointment or meeting.

14. **Attachment (Optional)**

    - Type: File Upload
    - Description: To allow the user to upload a file (e.g., resume, image, etc.).

15. **Newsletter Subscription**

    - Type: Checkbox
    - Description: To allow the user to subscribe to the newsletter.

16. **Preferred Time for Contact**

    - Type: Time
    - Description: To capture the preferred time for contact.

17. **Social Media Handle**

    - Type: Text
    - Description: To capture the user's social media handle (if applicable).

18. **Job Title**

    - Type: Text
    - Description: To capture the user's job title or occupation.

19. **Company Name**

    - Type: Text
    - Description: To capture the user's company name (if applicable).

20. **Referral Source**
    - Type: Text
    - Description: To capture how the user was referred to the form or company (e.g., via a colleague, advertisement, event, etc.).

### Additional Requirements:

- The form should have **two steps**: The first step collects personal information, and the second step collects details related to the appointment and preferences.
- The data entered in the first step should be **persisted** (saved temporarily) when moving to the second step, so the user doesn’t need to re-enter information they’ve already provided.
- Use **TypeScript** throughout the project to ensure proper typing for form values, state management, and validation.
- Use **Formik** for handling form state and validation, and **Yup** for form validation. Both libraries should be typed properly to leverage TypeScript's capabilities.
- **Headless UI** components are allowed for enhanced accessibility and user experience (e.g., dialogs, modals, dropdowns), but they must be fully integrated with **Tailwind CSS** for styling.
- Use **Tailwind CSS** for styling the page and the form elements, ensuring full responsiveness.
- Ensure **type safety** for form data and props passed to components, as well as handling async form submissions with correct TypeScript types.
- You should handle form submission properly and simulate saving the data to the backend.

### Submission:

- Ensure that the form is fully functional with proper validation and submission.
- The form should be responsive, meaning it should work well on both desktop and mobile devices.
- Submit your code in a GitHub repository or similar platform with clear instructions on how to run the project.
