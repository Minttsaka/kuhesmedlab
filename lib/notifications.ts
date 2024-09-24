
export const initialSignup = async(username:string) =>{

    return [
        `<div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 8px;max-width: 600px; margin: 0 auto; color: #333;">
            <h1 style="font-size: 24px; color: #4a90e2; text-align: center; margin-bottom: 20px;">Welcome to kuhesmedlab!</h1>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hello <strong>${username}</strong>,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              We're excited to have you on board! Here at Kuhesmedlab, we are dedicated to helping you succeed in your journey. To get started, we have put together some useful links and resources just for you.
            </p>
            
            <a href="[Link to Getting Started Guide]" style="display: inline-block; background-color: #4a90e2; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-size: 16px; margin-bottom: 20px; text-align: center;">Get Started</a>
            
            <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
              If you have any questions, feel free to reach out to our support team at any time.
            </p>
            
            <p style="font-size: 14px; line-height: 1.6; color: #888; margin-top: 30px; text-align: center;">
              Best Regards,<br>
              The Kuhesmedlab Team
            </p>
          </div>
          `,
          `
          v
          <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
            <h1 style="font-size: 24px; color: #4a90e2; text-align: center; margin-bottom: 20px;">Profile Update Required!</h1>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Hello <strong>${username}</strong>,
            </p>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We noticed that your biography is missing or outdated. Please update your biography to help others understand more about you and your contributions.
            </p>

            <a href="/a/profile" style="display: inline-block; background-color: #4a90e2; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-size: 16px; margin-bottom: 20px; text-align: center;">Update Biography</a>

            <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
            You can easily update your biography in your profile settings by clicking the link above or navigating to <strong>/a/profile</strong>.
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #888; margin-top: 30px; text-align: center;">
            Best Regards,<br>
            The Kuhesmedlab Team
            </p>
        </div>

        `
    ]
}