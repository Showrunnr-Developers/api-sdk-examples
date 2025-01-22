# Showrunnr API SDK Integration

## Getting Started

To begin using the ShowrunnrSDK, follow the steps outlined below.

### Example App Setup

1. **Clone the Example App**

2. **Set Up Environment Variables**
   - Create an `.env` file in the root of the project and add your API credentials:
     ```
     API_KEY=your_api_key
     API_SECRET=your_api_secret
     ```

3. **Install Dependencies**
   - Run the following command to install necessary packages:
     ```bash
     yarn install
     ```

4. **Start the Web Server**
   - Launch the app by running:
     ```bash
     yarn start
     ```

5. **Fetch Account Details**
   - Click on the **FetchAccounts** button to retrieve your account details.

---

## Integrating the SDK into Your Web App

Here’s how to integrate the Showrunnr SDK into your existing web application:

1. **Add SDK Dependencies**
   - Update your `package.json` to include the following dependencies:
     ```json
     {
       "dependencies": {
         "@sr-engineering/sr-api-sdk": "^latest_version",
         "@sr-engineering/sr-api-types": "^latest_version"
       }
     }
     ```

2. **Install the Dependencies**
   - Run the following command to install the new dependencies:
     ```bash
     yarn install
     ```
     or
     ```bash
     npm install
     ```

3. **Initialize the SDK**
   - In your JavaScript code, initialize the SDK using the following commands:
     ```javascript
     const sdk = new ShowrunnrSDK();
     await sdk.connect(process.env.API_KEY, process.env.API_SECRET);
     ```

4. **Set up the Account Component**
   - Create a `<div>` element in your HTML with the id `accountComponent`. This will serve as a container for the SDK component:
     
     ```html
     <div id="accountComponent"></div>
     ```

5. **Render the Component**

      - **5.1. Render account JSON**
   - Retrieve the container and pass it to the SDK's render function, specifying the desired attribute for your request:
      ```javascript
      const accountContainer = document.getElementById("accountComponent");
      if (accountContainer) {
         sdk.render("Account", accountContainer);
      };
      ```
           
   - **5.2. Render User Card List**  
      
   - To render a user card list, create a new container and pass it to `sdk.renderCards`. Optionally, specify the number of cards per page:
      ```javascript
      const container = document.getElementById("user-list-container");
      if (container) {
        sdk.renderCards(container, 6);
      }
      ```
   
   - **5.3. Render Account Form**  
      
   - To render a signup form, create a container element (e.g., `user-register`) and append the account form to it:
      ```javascript
      const userRegister = document.getElementById("user-register");
      const accountForm = sdk.createForm("people").defaultSignupForm();
      if (userRegister) userRegister.appendChild(accountForm);
      ```
   
   - **5.3.1. Custom Fields and Styling for Account Form**
      
   - To customize the fields and style the account form, pass the configuration to `with`:
      ```javascript
      userRegister.appendChild(accountForm).with({
        formElements: {
          username: { type: "text", placeholder: "Enter your username" },
          password: { type: "password", placeholder: "Enter your password" },
        },
        formStyle: {
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        },
        elementStyles: {
          input: {
            fontSize: "16px",
            marginBottom: "10px",
          },
          button: {
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
          },
        },
      });
      ```

### Supported Attributes

The SDK currently supports the "Account" attribute, which retrieves account specific data using the provided API key and secret.



