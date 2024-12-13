import "../styles/styles.css";
import "@sr-engineering/sr-api-sdk/showrunnr-sdk.css";
import ShowrunnrSDK from "@sr-engineering/sr-api-sdk";

const sdk = new ShowrunnrSDK();
sdk.connect(process.env.API_KEY, process.env.API_SECRET);

//Account JSON

const accountContainer = document.getElementById("account-container");
if (accountContainer) sdk.render("Account", accountContainer);

//User card list

const container = document.getElementById("user-list-container");
if (container) sdk.renderCards(container, 6);

//Account form

const userRegister = document.getElementById("user-register");

const accountForm = sdk.createForm("people").defaultSignupForm();

if (userRegister) userRegister.appendChild(accountForm);

//Custom form

const customFormContainer = document.getElementById("custom-form");

const customForm = sdk.createForm("account").with({
  formElements: {
    username: { type: "text", placeholder: "Enter your username" },
    password: { type: "password", placeholder: "Enter your password" },
  },
  formStyle: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    gap: "20px",
  },
  elementStyles: {
    input: {
      padding: "10px",
      fontSize: "16px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "200px",
    },
  },
});

if (customFormContainer) customFormContainer.appendChild(customForm);
