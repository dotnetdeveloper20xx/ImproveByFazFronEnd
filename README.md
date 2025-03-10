# ImproveByFaz - React Application Documentation

---

## ✨ Title: ImproveByFaz - Frontend React Application

### **Reason for the Project**  
The **ImproveByFaz** project was developed as part of an educational technology solution to help students **review and re-answer** questions they previously answered incorrectly. This application interacts with a **backend API (ASP.NET Core 8)** to retrieve students' misconceptions, display questions, and allow students to improve their learning.

---

## ✨ Project Overview  

This React application provides an intuitive **student interface** to access their incorrect answers and reattempt them. It follows **modern frontend best practices** using **React 18+, TypeScript, React Query, and Material UI** to ensure **scalability, maintainability, and performance**.  

### 💡 Key Features Developed  
✔ **View topics & subtopics** with previously incorrect answers  
✔ **Retrieve misconception questions** dynamically from API  
✔ **Multiple-choice question answering system** (Static for now)  
✔ **Modern UI with Material UI**  
✔ **Optimized API interactions using React Query**  

### 🚀 Future Enhancements  
- **Student Authentication (JWT)**
- **Answer Submission & Feedback**
- **State Management with Redux/Zustand**
- **Animations & UX Improvements**
- **Dark Mode for better accessibility**
- **Real-time updates using WebSockets**
- **Integration with AI for Question Recommendations**

---

## ✨ Technologies Used & Why?

| **Technology**        | **Why We Used It?** |
|----------------------|------------------------------------------------|
| **React 18+** | Latest React version for modern UI & hooks support |
| **TypeScript** | Type safety, better code quality, and maintainability |
| **React Query** | Optimized API calls, caching, and state synchronization |
| **Material UI** | Modern UI components for a clean, professional look |
| **Vite** | Faster build times and improved development experience |
| **Axios** | Efficient API calls with better error handling |
| **React Router** | Enables navigation between pages |

---

## ✨ How the React App Interacts with ASP.NET Core API?  

1. **React App Calls API Endpoints** → Fetches **topics, subtopics, and misconception questions**  
2. **API Returns Data** → React Query **caches & optimizes** API responses  
3. **UI Updates** → Renders **questions dynamically** in a structured format  
4. **Future Plan**: Allow students to submit answers → API evaluates correctness  

---

## ✨ Step-by-Step: How to Download and Run Both Projects Together  

To run the **frontend React app** and **backend ASP.NET Core API together**, follow these steps:  

### **🛠 Step 1: Clone Both Repositories**  
1. **Clone the Backend API Repository**  
```sh
 git clone https://github.com/dotnetdeveloper20xx/ImproveByFaz.git
```
2. **Clone the Frontend React Repository**  
```sh
 git clone https://github.com/dotnetdeveloper20xx/ImproveByFazFronEnd.git
```

---

### **🛠 Step 2: Setup & Run the Backend (ASP.NET Core 8)**  
1. **Navigate to the backend project directory**  
```sh
 cd ImproveByFaz
```
2. **Restore dependencies**  
```sh
 dotnet restore
```
3. **Run the API**  
```sh
 dotnet run --project ImproveByFaz.API
```
✅ The API will be running on `https://localhost:7243/`

---

### **🛠 Step 3: Setup & Run the Frontend (React)**  
1. **Navigate to the frontend project directory**  
```sh
 cd ../ImproveByFazFronEnd
```
2. **Install dependencies**  
```sh
 npm install
```
3. **Start the frontend React app**  
```sh
 npm run dev
```
✅ The React app will be running at `http://localhost:5173/`  

---

### **🛠 Step 4: Ensure the React App Connects to the API**  
📄 **Modify `src/api.ts` in the React App**  
```ts
const API_BASE_URL = "https://localhost:7243/api"; // Ensure this matches your API URL
```
✅ **Now, the React app is properly connected to the backend API!**  

---

## ✨ Conclusion  
The **ImproveByFaz** React application, in combination with the ASP.NET Core API, provides an efficient learning environment where students can improve their understanding by reviewing previously incorrect answers. While currently a **functional prototype**, this system has **massive potential** for expansion, including **authentication, answer validation, progress tracking, and AI-based recommendations**.  

💡 **For future development, this project can evolve into a full-fledged educational learning platform!** 🚀  

---

### **✨ Key Links**  
🔗 **Backend API Repository:** [ImproveByFaz - ASP.NET Core API](https://github.com/dotnetdeveloper20xx/ImproveByFaz)  
🔗 **Frontend React Repository:** [ImproveByFaz - React 18+ Frontend](https://github.com/dotnetdeveloper20xx/ImproveByFazFronEnd)  



