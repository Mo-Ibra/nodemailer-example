# 📧 Nodemailer Example – Next.js Contact Form  

A simple **Next.js 15** project that uses **Nodemailer** to send emails from a contact form. Built with **Tailwind CSS** for a clean design and easy customization.  

## 🚀 Features  
✅ Beautifully styled contact form  
✅ Sends emails using **Nodemailer** & Gmail  
✅ Serverless API route for handling form submissions  
✅ Input validation & success/error messages  

---

## 📌 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/nodemailer-example.git
cd nodemailer-example
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a `.env.local` file in the root directory and add:  
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-email@gmail.com
```
> ⚠️ **Important:** Gmail requires **App Passwords** instead of your regular password.  
> 👉 Follow [this guide](https://myaccount.google.com/security) to generate one.

### 4️⃣ Run the Project  
```sh
npm run dev
```
Now, visit **`http://localhost:3000`** in your browser.

---

## 📜 Project Structure  

```
/nodemailer-example
 ├── app/
 │   ├── api/sendEmail/route.js  # API to send emails
 │   ├── components/ContactForm.js  # The contact form component
 │   ├── page.js  # The main page that renders the form
 ├── .env.local  # Stores email credentials
 ├── package.json
 ├── next.config.js
 ├── README.md
```

---

## 🎨 Usage  
1. Fill in the contact form (Name, Email, Message).  
2. Click **"Send Message"**.  
3. If successful, you’ll see a success message.  
4. Check your **inbox** for the received email!  

---

## 🛠 Troubleshooting  
🔹 **Email not sending?**  
- Check if you enabled **App Passwords** in Gmail.  
- Ensure your **.env.local** file is correctly set up.  
- Check the **server logs** for errors.  

🔹 **Still not working?**  
- Run `console.log(error)` inside the `catch` block in `route.js`.  
- Check Gmail security settings: [Less Secure Apps](https://myaccount.google.com/security).  

---

## 📌 Future Improvements  
🔹 Add **reCAPTCHA** for spam protection  
🔹 Support **attachments** in emails  
🔹 Store form submissions in a database  

---

## 💡 Contributing  
Feel free to **fork** this repo, **add features**, and submit a **pull request**!  

---

## 📜 License  
This project is open-source under the **MIT License**.  

---

🔥 **Happy Coding!** 🚀  
