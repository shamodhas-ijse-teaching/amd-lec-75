<h1 align="center">Advanced Mobile Application Development (AMD) – ITS2127</h1>
<p align="center">Detailed Lecture Notes</p>

---

# 🎯 Primary Goal

While this course covers the fundamental theories of mobile architecture, **our primary practical goal is to master React Native Development using the Expo Framework.**

By the end of this module, you will be proficient in:
* **Building Cross-Platform Apps:** Creating single-codebase applications that run natively on both **Android** and **iOS**.
* **Using Expo:** Leveraging the modern "batteries-included" workflow for rapid development, testing, and deployment.
* **Modern Routing:** Implementing navigation using the latest file-based **Expo Router**.

---

# 📘 Day 1: Foundations of Mobile Development

## 1.1 Understanding Application Platforms

Applications are software programs designed to run on different hardware platforms. They can be categorized as:

- **Desktop Applications:** Installed on PCs or laptops. Examples: Microsoft Word, Photoshop.
- **Web Applications:** Accessed through browsers. Examples: Gmail, Trello, Google Docs.
- **Mobile Applications:** Installed on smartphones or tablets. Examples: WhatsApp, Instagram, TaskHub.

Each platform has its own development requirements, limitations, and frameworks.

---

## 1.2 Relationship Between Device, OS, and Software

| Component             | Description                                           |
| :-------------------- | :---------------------------------------------------- |
| Device                | Physical hardware (PC, Mobile Phone, Tablet)          |
| Operating System (OS) | Manages hardware and provides an environment for apps |
| Software / Apps       | Programs users interact with                          |

### Human Analogy

Human → Life → Abilities
Device → OS → Applications

Applications depend on the OS in the same way abilities depend on life.

---

## 1.3 Desktop and Mobile Operating Systems

### Desktop OS

- Windows
- Linux
- macOS

### Mobile OS

- Android
- iOS
- Symbian OS (legacy)
- Windows Phone OS (discontinued)
- BlackBerry OS (legacy)

**Currently dominant:** Android & iOS

---

## 1.4 Evolution of Devices and Capabilities

| Device             | Main Capabilities                                   |
| :----------------- | :-------------------------------------------------- |
| Basic Mobile Phone | Calling, Messaging                                  |
| PC / Laptop        | Internet, Documents, Software                       |
| Smartphone         | Internet, Apps, Camera, GPS, Payments, Social Media |

---

## 1.5 Software Development Kits (SDKs)

A **Software Development Kit (SDK)** is a set of **tools**, **libraries**, and **documentation** that developers use to create applications for a specific platform. SDKs provide essential resources for **building**, **testing**, and **deploying** applications efficiently.

All SDKs are built around a strong **programming language foundation**, enabling developers to create **robust**, **scalable**, and **platform-specific applications**. They typically include **compilers**, **debuggers**, **APIs**, and **sample code** to simplify and accelerate the development process.

| Technology | SDK                              |
| :--------- | :------------------------------- |
| Java       | JDK (Java Development Kit)       |
| Android    | Android SDK (via Android Studio) |
| iOS        | iOS SDK (via Xcode – macOS only) |

---

## 1.6 Native Mobile Development

Native mobile development refers to building applications specifically for a single platform using its official programming language and tools.

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/native_mobile_development.png" 
       alt="Native Mobile Development Diagram" 
       style="width:100%; max-width:1200px; height:auto;">
  <br>
  <b>Figure: Native Mobile Development Architecture</b>
</p>

- **Native Android:** Java or Kotlin using **Android SDK** (via **Android Studio – Integrated Development Environment**)
- **Native iOS:** Swift or Objective-C using **iOS SDK** (via **Xcode – Integrated Development Environment**)

### Advantages

- Full access to device hardware (Camera, Sensors, GPS)
- High performance and speed
- Best platform-specific UI/UX
- Official support from platform vendors

### Disadvantages

- Separate codebase for each platform
- Higher development and maintenance cost
- Requires platform-specific expertise

**Native development is preferred when:**

- High performance is required (Games, AR/VR)
- Deep hardware access is critical
- Strict platform-specific UI rules apply

---

## 1.7 Cross-Platform Mobile Development

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/mobile_app_architecture.png"
       alt="Cross Platform Architecture"
       style="width:50%; max-width:1200px; display:block; margin:auto; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
  <br>
  <b>Figure: Cross-Platform Mobile Development Architecture</b>
</p>

**Cross-platform mobile development** allows developers to write a **single codebase** that runs on multiple platforms, such as **Android** and **iOS**. This approach reduces development time and effort while ensuring consistent functionality across devices.

### Advantages

- **Faster development and deployment:** One codebase for multiple platforms accelerates release cycles.
- **Lower maintenance cost:** Updates and bug fixes are applied once for all platforms.
- **Unified UI/UX across platforms:** Ensures a consistent user experience on Android and iOS devices.

### Popular Frameworks

- **React Native** (JavaScript / TypeScript)
- **Flutter** (Dart)
- **Xamarin** (C#)
- **Ionic** (JavaScript / Angular)

**Explanation:** In cross-platform development, a **single codebase** is written using frameworks like **React Native**, **Flutter**, or **Xamarin** and deployed to both **Android** and **iOS**. This approach allows for **faster development**, **simpler maintenance**, and a **consistent user experience** across multiple devices.

---

## 1.8 React Native Development Approaches

### A. React Native CLI

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/react_native_cli.png"
       alt="React Native CLI Architecture"
       style="width:50%; max-width:800px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
  <br>
  <b>Figure: React Native CLI Architecture Overview</b>
</p>

**React Native CLI** is the “full control” approach to building React Native apps. Some call it the _bare-bones approach_ — you have access to everything and can tweak the native code, optimize performance, and implement advanced features. Perfect for big apps or when you need something highly customized.

- **Manual setup:** Requires installing and configuring **Android Studio** and **Xcode**.
- **Direct access to native modules:** Write custom Android or iOS code whenever needed.
- **Great for complex apps:** Ideal for apps requiring high performance or advanced features.
- **Requires some native knowledge:** Java/Kotlin for Android, Swift/Objective-C for iOS.

**Setup Resources:**

- [Setup Computer for React Native CLI](https://github.com/shamodhas-ijse-teaching/file-hosting/blob/main/documents/Setup_Computer.md)
- [React Native CLI Project Setup](https://github.com/shamodhas-ijse-teaching/react-native-cli-2025)

### B. Expo Framework

**Expo** is like a ready-to-go toolkit built on top of React Native. You don’t need to configure Android Studio or Xcode at first — Expo handles the setup and provides handy APIs for camera, notifications, sensors, and more. Great for learning, prototypes, or small to medium apps.

- **Minimal setup:** Start coding quickly without installing native tools.
- **Preconfigured Metro bundler:** Automatically compiles and runs your app.
- **Fast refresh & hot reload:** See changes instantly as you code.
- **Built-in APIs:** Camera, media, sensors, notifications, and more without writing native code.
- **Perfect for learning or prototypes:** Ideal for academic projects or quick experiments.

<div style="display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap;">
  <div style="flex:1; min-width:100px; text-align:center;">
    <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_architecture.png"
         alt="Expo Architecture"
         style="width:100%; max-width:600px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
    <br>
    <b>Figure: Expo Architecture Overview</b>
  </div>
  <div style="flex:1; min-width:100px; text-align:center;">
    <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_real_world_example.png"
         alt="Expo Real World Example"
         style="width:100%; max-width:600px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
    <br>
    <b>Figure: Real-World Example of an Expo App</b>
  </div>
</div>

<br>

### **Key Differences: React Native CLI vs. Expo**

| Feature                    | React Native CLI                                                                                                                                                                           | Expo                                                                                                                                                                                        |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Setup & Environment**    | **Complex & Manual.** You **must** install the **Android SDK** (typically via **Android Studio**) and the **iOS SDK** (via **Xcode** on macOS) before you can write a single line of code. | **Fast & Minimal.** No immediate need for Android Studio or Xcode. You can run the app instantly on your phone using the **Expo Go** app. (SDKs are only needed later if building locally). |
| **Native Access**          | **Unrestricted.** You have direct access to native Android (`android/`) and iOS (`ios/`) folders. You can link any native library manually.                                                | **Streamlined.** Access to a massive library of pre-built native modules. For custom native code, you use "Config Plugins" or "Prebuild" (modern approach) instead of "ejecting."           |
| **Best Use Case**          | Apps requiring deep system integration (e.g., specialized Bluetooth profiles, background threads) or when you need absolute control over the build process.                                | Ideal for **most** commercial apps, MVPs, and rapid development. Modern Expo (via EAS) handles large-scale apps effectively.                                                                |
| **Development Experience** | Steep learning curve. You often need to debug build errors in Android Studio or Xcode.                                                                                                     | Beginner-friendly workflow. Most debugging happens in the browser or terminal; complex native build errors are abstracted away.                                                             |

---

### **Important Concept: Cross-Platform vs. Native Build Tools**

Students often ask: *"If React Native is cross-platform, why do I need to install specific Android and iOS tools?"*

1.  **React Native is Cross-Platform (The Code):**
    You write your logic once in JavaScript/TypeScript. This single codebase is capable of running on both Android and iOS.

2.  **SDKs are the Build Tools (The Factory):**
    Even though the code is shared, the **final application file** (APK for Android, IPA for iOS) must be built using the manufacturer's official tools.
    * **Android Studio (Android SDK):** Is required to take your JavaScript code and compile it into an Android App.
    * **Xcode (iOS SDK):** Is required to take that *same* JavaScript code and compile it into an iOS App.

**In short:** The *development* requires platform-specific tools (SDKs) to do the heavy lifting of compiling, even though your *coding* is done in a cross-platform language.

---

### **Summary**

**React Native CLI** is the "bare-bones" approach. It gives you full control but demands that you manually set up the **Android SDK (using Android Studio)** and **iOS SDK (using Xcode)**. It is powerful but requires you to manage the native build environment yourself.

**Expo** is the "batteries-included" toolkit. It abstracts away the complex SDK setup, allowing you to start coding immediately. While it used to be just for beginners, modern Expo (with EAS) is powerful enough for most professional applications, only requiring the native SDKs if you decide to build the app locally on your own machine.

### **Which one should you choose?**
* Choose **Expo** if you want to start quickly and avoid configuration headaches.
* Choose **CLI** if you are already comfortable with Android Studio/Xcode and need specific, low-level native control from day one.
---

## 1.9 Navigation & Routing with Expo Router

**Expo Router** is a **file-based routing** system for React Native, inspired by Next.js. It automatically generates routes based on the folder structure inside the `app/` directory. This approach simplifies navigation and keeps your project organized.

- File-based routing (similar to Next.js)
- Routes are automatically generated from the **app/** folder
- Supports nested routes, dynamic routes, and route groups
- Integrates seamlessly with Stack, Tab, and Drawer navigation

---

### 1.9.1 Key Files in Expo Router

- **app/index.tsx** – **Application entry point**. This file corresponds to the root route `/` of your app.
- **index.tsx** – Default route for a folder:
  - `app/home/index.tsx` → `/home`
  - `app/test/index.tsx` → `/test`
- **\_layout.tsx** – Layout file for a folder. Wraps all pages in that folder with shared UI (header, footer, navigation). Example:
  - `app/(auth)/_layout.tsx` wraps login and register pages.
- **[param].tsx** – Dynamic route file. The name in brackets becomes a URL parameter:
  - `app/profile/[id].tsx` → /profile/123, /profile/456

---

### 1.9.2 Basic Routes

Basic route mapping uses file names:

| URL    | File          |
| :----- | :------------ |
| /      | app/index.tsx |
| /home  | app/home.tsx  |
| /about | app/about.tsx |

---

### 1.9.3 Dynamic Routes

Use square brackets `[]` for routes with variables:

```text
app/[id].tsx   → /123, /profile, /product-45
```

**Example:**

```tsx
import { Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

export default function Page() {
  const params = useLocalSearchParams()
  return <Text>Dynamic Page: {params.id}</Text>
}
```

---

### 1.9.4 Nested Routes

**Nested folders define nested routes:**

```text
app/test/index.tsx         → /test
app/test/sample.tsx        → /test/sample
app/test/profile/[id].tsx  → /test/profile/123
```

---

### 1.9.5 Route Groups

**Use parentheses `()` to group routes logically without affecting URL paths:**

```text
app/(auth)/login.tsx     → /login
app/(auth)/register.tsx  → /register
```

---

### 1.9.6 Layout Files

**Layouts wrap child pages with shared UI components:**

- File naming: `layout.tsx` or `_layout.tsx`
- Can be nested for nested routes
- Reduces duplication and keeps UI consistent

**Example Layout:**

```tsx
// app/(auth)/_layout.tsx
import { View } from "react-native"

export default function AuthLayout({ children }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Header />
      {children}
    </View>
  )
}
```

---

### 1.9.7 Linking & Navigation

**Navigate programmatically using the `useRouter` hook:**

```tsx
import { useRouter } from "expo-router"
const router = useRouter()

router.push("/home") // Navigate to /home
router.replace("/login") // Replace current route
router.back() // Go back
```

---

### 1.9.8 Best Practices

- Use route groups to separate public/private pages
- Keep layouts reusable to reduce duplication
- Use dynamic routes for pages with parameters (profile, product pages)
- Organize nested routes into folders for clarity and maintainability

---

### 1.9.9 Visual Overview

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_router_structure.png" 
       alt="Expo Router Folder Structure" 
       style="width:80%; max-width:1000px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); border-radius:5px;">
  <br>
  <b>Figure: Example Folder Structure for Expo Router</b>
</p>

---

### 1.9.10 Summary

Expo Router simplifies navigation by mapping file/folder structures directly to routes. With **dynamic routes**, **nested routes**, **route groups**, and **layouts**, you can build scalable and maintainable navigation systems in React Native apps. Understanding key files like `index.tsx`, `_layout.tsx`, and `[param].tsx` is essential for effective routing.

---

# 📘 Day 2: Project Setup, Navigation & Development Workflow

## 2.1 Initial Project Setup

- **Project Folder:** task-manager-app
- **Application Name:** TaskHub
- Ensure Node.js ≥ 18
- Run `npx create-expo-app@latest`

---

## 2.2 Styling with NativeWind

- Tailwind-style utility classes for React Native
- Faster UI development
- Cleaner and more readable component code

[Official NativeWind Documentation](https://www.nativewind.dev/)

## 2.3 Running the Expo Project

| Command                    | Description                                                                           |
| :------------------------- | :------------------------------------------------------------------------------------ |
| `npx expo start`           | **Recommended:** Starts the development server (Metro Bundler).                       |
| `npm start`                | **Alias:** Usually runs `npx expo start` (defined in `package.json`).                 |
| `npx expo start -c`        | **Troubleshooting:** Clears the cache and restarts the server (fixes loading issues). |
| `npx expo start --android` | Opens the app immediately in an Android emulator.                                     |
| `npx expo start --ios`     | Opens the app immediately in an iOS simulator (Mac only).                             |

**Note:** The `.expo` folder stores cache files. Use the `-c` flag when styles or components do not update correctly.

---

## 2.4 Real-Time Updates & Caching

### A. Fast Refresh (Instant Updates)
* **What it does:** Instantly updates the app when you save code (`Ctrl + S`).
* **Benefit:** It keeps your typed data (state) safe while updating the design.

### B. Clearing Cache
* **When to use:** If the app behaves strangely or styles don't update.
* **Command:** Stop the server, then run either command:
    ```bash
    npx expo start -c
    # OR
    npx expo start --clear
    ```
---

## 2.5 Implementing Navigators

Navigation is a core part of mobile applications. In React Native with Expo Router, navigation is handled using layouts and file-based routing.

### A. Stack Navigation (Sequential Flow)
Stack navigation is used when screens follow a step-by-step or hierarchical flow.

* Login → Register → Dashboard
* Task List → Task Details → Edit Task

**Characteristics:**
* New screens are pushed on top of the stack
* Back navigation is automatic
* Commonly used for authentication flows

**Example Folder Structure:**
```text
app/
 ├── _layout.tsx      ← Stack layout
 ├── index.tsx
 ├── details.tsx
 ```
 ---

### B. Tab Navigation (Main Sections)
Tab navigation is used for the main sections of an application that users frequently switch between.

* Home
* Tasks
* Profile

**Characteristics:**
* Tabs are always visible
* Each tab maintains its own screen state
* Improves user experience in dashboard-based apps

**Example Folder Structure:**
```text
app/
 ├── (dashboard)/
 │    ├── _layout.tsx   ← Tab layout
 │    ├── home.tsx
 │    ├── tasks.tsx
 │    └── profile.tsx
 ```
---
## 2.6 Sample Project Structure
```text
app/
 ├── index.tsx
 ├── _layout.tsx
 ├── (auth)/
 │    ├── login.tsx
 │    ├── register.tsx
 │    └── _layout.tsx
 ├── (dashboard)/
 │    ├── home.tsx
 │    ├── tasks.tsx
 │    ├── profile.tsx
 │    └── _layout.tsx
 ```

---
## 2.7 Installing Expo-Compatible Libraries
To use icons in your app, we use the **@expo/vector-icons** library. This package includes popular icon sets like **Ionicons**, **FontAwesome**, and **MaterialIcons** ready to use without extra configuration.

**Installation:**

```bash
# Recommended: Installs the version compatible with your specific Expo SDK
npx expo install @expo/vector-icons

# Alternative: Installs the latest version directly from npm
npm install @expo/vector-icons
```

> **Note:** Using `npx expo install` is recommended because it automatically selects the version that matches your specific Expo SDK.

**Finding Icons:**
You don't need to guess icon names. Use the official directory to search for icons and see which family they belong to.

* [Browse All Icons (Expo Icon Directory)](https://icons.expo.fyi/Index)
* [Package Documentation (npm)](https://www.npmjs.com/package/@expo/vector-icons)

---

# 📘 Day 3: Backend Services (Firebase) & Local Storage

## 3.1 Introduction to Backend Services

In modern mobile development, we often move away from building traditional custom servers for every application, favoring managed services.

### SaaS vs. BaaS
* **SaaS (Software as a Service):** Complete software solutions delivered over the internet (e.g., Google Workspace, Zoom).
* **BaaS (Backend as a Service):** Cloud-based backend services that provide developers with APIs for backend functions, allowing them to focus entirely on the Frontend.
    * *Examples:* Firebase, Supabase, AWS Amplify.

### Architectural Patterns

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/firebase-architecture-comparison.png" 
       alt="Firebase vs Traditional Architecture" 
       style="width:100%; max-width:800px; border:1px solid #ccc; border-radius:10px;">
  <br>
  <b>Figure: Traditional Backend vs. Firebase (BaaS) Architecture</b>
</p>

1.  **Frontend + BaaS (Firebase):**
    * The mobile app connects directly to Firebase.
    * No intermediate server is required.
    
2.  **Frontend + Custom Backend + Firebase:**
    * A hybrid approach.
    * *Example:* Using a Node.js server for complex business logic while offloading Authentication and Notifications to Firebase.

---

## 3.2 Firebase Overview

Google’s mobile platform that helps you quickly develop high-quality apps and grow your business.

### Why use Firebase? (Advantages)
* **Minimal Backend Code:** Reduces the need to write boilerplate server-side code.
* **Real-time Updates:** Data syncs across all clients in milliseconds (via WebSockets).
* **Secure:** Built-in security rules for data protection.
* **Scalable:** Automatically handles infrastructure scaling.
* **Free Tier:** Generous limits for development.

### Common Use Cases
* **Login Systems:** Social auth (Google, Facebook) and email/password.
* **Chat Apps:** Leveraging real-time database capabilities.
* **E-commerce:** Real-time inventory and order tracking.
* **Dashboards:** Live analytics and monitoring.

---

## 3.3 Core Firebase Services

These are the specific modules we will use in this course:

| Service            | Function    | Description                                                                |
| :----------------- | :---------- | :------------------------------------------------------------------------- |
| **Authentication** | Security    | Manages users, sign-ins (Email, Google, Phone), and identity verification. |
| **Firestore**      | Database    | A flexible, scalable NoSQL cloud database for storing and syncing data.    |
| **Storage**        | File Handle | Stores and serves user-generated content like photos and videos.           |

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/firestore-collection-document-model.png" 
       alt="Firestore Data Structure" 
       style="width:100%; max-width:800px; border:1px solid #ccc; border-radius:10px;">
  <br>
  <b>Figure: Firestore NoSQL Structure (Collections & Documents)</b>
</p>

> **Note:** While Firebase uses its own SDKs, other backend approaches use **GraphQL APIs** (Single Endpoint) or REST APIs.

---

## 3.4 Supabase (Alternative)

**Supabase** is a popular open-source alternative to Firebase.
* **Database:** Uses **PostgreSQL** (Relational) instead of NoSQL.
* **API:** Provides a single endpoint to fetch specific data efficiently.

---

## 3.5 Local Data Storage in React Native

Mobile apps often need to store data on the device itself (e.g., to keep a user logged in or save settings). We use two different libraries depending on the **sensitivity** of the data.

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/react-native-local-storage-security.png" 
       alt="Async Storage vs Secure Store" 
       style="width:100%; max-width:800px; border:1px solid #ccc; border-radius:10px;">
  <br>
  <b>Figure: Security Comparison – Async Storage vs. Secure Store</b>
</p>

### A. Async Storage (Non-Sensitive)
* **Library:** `async-storage`
* **Type:** Unencrypted, asynchronous, key-value storage system.
* **Use Case:** Storing **public** or **non-critical** data.
    * *Examples:* App theme (Dark/Light), user preferences, local caching.

### B. Expo Secure Store (Sensitive)
* **Library:** `expo-secure-store`
* **Type:** Encrypted storage.
* **Mechanism:** Uses the device's native security infrastructure (Keychain on iOS, Keystore on Android).
* **Use Case:** Storing **private** or **critical** data.
    * *Examples:* User Authentication Tokens (JWT), API Keys, Passwords.

# 📘 Day 4: Native Modules, Architecture & Deployment

## 4.1 The React Native "Bridge" & Native Modules

One of the most critical concepts in React Native is understanding how your JavaScript code interacts with the physical device.

### How It Works
React Native applications run two separate worlds:
1.  **The JavaScript Realm:** This is where you write your React code, business logic, and UI definitions.
2.  **The Native Realm:** This is the actual Android (Java/Kotlin) or iOS (Objective-C/Swift) environment that controls the device hardware (Camera, GPS, Bluetooth).

<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/react_native_bridge_architecture.png" alt="React Native Bridge Architecture" width="100%">
  <br>
  <i>Figure: React Native Bridge Architecture.</i>
</p>
<br>

### Native Modules
Sometimes, React Native doesn't have a built-in feature for a specific device capability. In these cases, we use **Native Modules**.
* **JS Side:** You call a function like `openCamera()`.
* **Native Side:** A piece of Java/Kotlin or Swift code executes the actual logic.
* **Wrapper:** Libraries like `expo-image-picker` or `expo-media-library` act as pre-written wrappers, so you don't have to write the native code yourself.

---

## 4.2 Understanding Project Configuration Files

Before building our final app, we must understand the three files that control how our application behaves and builds.

<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_config_files.png" alt="Visual representation of package.json, app.json, and eas.json" width="100%">
  <br>
  <i>Figure: Key configuration files in the project structure.</i>
</p>
<br>

| File             | Analogy                   | Description                                                                                                                                                                                                           |
| :--------------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **package.json** | **The ID Card**           | Lists the project's "Identity" and "Needs." It defines the app name, version, and most importantly, the **dependencies** (libraries) installed. It also contains **scripts** to run the app (e.g., `npx expo start`). |
| **app.json**     | **The Blueprint**         | Configures how the app looks and behaves on the OS. It defines the **App Name** (displayed on home screen), **App Icon**, **Splash Screen**, and permissions (e.g., Camera, Location) required for the app stores.    |
| **eas.json**     | **The Shipping Manifest** | Created only when you are ready to deploy. It tells the **EAS (Expo Application Services)** cloud servers how to build your app (e.g., "Build a Preview APK for Android" or "Build a Production IPA for iOS").        |

---

## 4.3 Input: Accessing the Camera

To interact with hardware, we first need to capture data. We use `expo-image-picker` to access the native camera module.

**Key Concept:**
Native privacy laws require us to ask for **Permission** before opening the camera.

**Steps:**
1.  **Install:** `npx expo install expo-image-picker`
2.  **Request Permission:** Ask the user "Can I use your camera?"
3.  **Launch Camera:** Open the native UI to take a picture.

<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/ios_camera_permission_dialog.png" alt="iOS Camera Permission Dialog" width="100%">
  <br>
  <i>Figure: The operating system requires explicit user permission to access hardware.</i>
</p>
<br>

```tsx
import * as ImagePicker from 'expo-image-picker';

const takePhoto = async () => {
    // 1. Request Permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status === 'granted') {
        // 2. Open Camera
        const result = await ImagePicker.launchCameraAsync();
        
        // 3. Handle Result
        if (!result.canceled) {
            console.log("Photo URI:", result.assets[0].uri);
            return result.assets[0].uri;
        }
    } else {
        alert("Camera permission needed!");
    }
};
```

## 4.4 Implementation: Camera Access & Saving to Gallery

This section covers the complete workflow: **Taking a Photo (Input)** and **Saving it to the Device (Output)**.

**Repository:** [amd-last-day-71](https://github.com/shamodhas-ijse-teaching/amd-last-day-71)

### How to do it (Step-by-Step)

**1. Install Dependencies:**
We need two libraries: one for the camera and one for the file system.
```bash
npx expo install expo-image-picker expo-media-library
```

**2. The Logic Flow:**
* **Step A:** User clicks "Take Photo" → App requests Camera Permission → Camera opens.
* **Step B:** User takes photo → App gets a temporary uri (path).
* **Step C:** User clicks "Save" → App requests Media Library Permission → App moves file from temporary path to Gallery.

<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/camera_app_user_flow.png" alt="User flow: Take Photo to Save Success" width="100%">
  <br>
  <i>Figure: The application workflow from capturing input to saving output.</i>
</p>
<br>

**3. The Complete Code:**
```tsx
import { useState } from 'react';
import { Button, Image, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  // State to hold the temporary image path
  const [imageUri, setImageUri] = useState(null);

  // --- FEATURE 1: TAKE PHOTO ---
  const takePhoto = async () => {
    // 1. Ask for Camera Permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status === 'granted') {
      // 2. Open Camera
      const result = await ImagePicker.launchCameraAsync();
      
      // 3. Save temporary path to state
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } else {
        Alert.alert("Permission Denied", "We need camera access to take photos.");
    }
  };

  // --- FEATURE 2: SAVE TO GALLERY ---
  const saveToGallery = async () => {
    if (!imageUri) {
        Alert.alert("No Image", "Please take a photo first.");
        return;
    }
    
    // 1. Ask for Gallery (Write) Permission
    const { status } = await MediaLibrary.requestPermissionsAsync();
    
    if (status === 'granted') {
      // 2. Create Asset (Moves file from Cache -> Gallery)
      await MediaLibrary.createAssetAsync(imageUri);
      Alert.alert("Success", "Image saved to gallery!");
      setImageUri(null); // Reset after saving
    } else {
        Alert.alert("Permission Denied", "We need access to save photos.");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
      <Button title="1. Open Camera" onPress={takePhoto} />
      
      {/* Display the captured image if it exists */}
      {imageUri && (
        <Image 
            source={{ uri: imageUri }} 
            style={{ width: 200, height: 200, borderRadius: 10 }} 
        />
      )}
      
      <Button title="2. Save to Device" onPress={saveToGallery} />
    </View>
  );
}
```

## 4.5 Professional Project Architecture (SoC)

<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/react_native_project_structure.png" alt="Recommended Folder Structure Diagram" width="100%">
  <br>
  <i>Figure: Clean Architecture folder structure for scalable apps.</i>
</p>
<br>

As applications grow, keeping all code in one folder leads to unmaintainable "spaghetti code." We apply the **Separation of Concerns (SoC)** principle to organize our project.

### Recommended Folder Structure

| Directory       | Purpose                  | Example Content                                              |
| :-------------- | :----------------------- | :----------------------------------------------------------- |
| **/app**        | **Routing & Screens**    | `index.tsx`, `profile.tsx`. The literal pages the user sees. |
| **/components** | **Reusable UI**          | Buttons, Cards, Headers. Pure UI with no complex logic.      |
| **/services**   | **API & External Calls** | `authService.ts`. Handles fetching data from backends.       |
| **/utils**      | **Helper Functions**     | `formatDate.ts`. Pure logic functions used across the app.   |
| **/context**    | **Global State**         | `AuthContext`. Data shared across the entire app.            |
| **/assets**     | **Static Files**         | Images, fonts, icons.                                        |

## 4.6 Environment Management (.env)

<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/env_security_concept.png" alt="Private .env vs Public .env.example" width="100%">
  <br>
  <i>Figure: Securely managing API keys using environment variables.</i>
</p>
<br>

Never hardcode sensitive keys (like API Keys, Firebase Secrets) directly into your code. If you commit these to GitHub, hackers can steal your credentials.

* **`.env` (Private):** Contains the actual secret keys. **NEVER** commit this to GitHub (add it to your `.gitignore`).
* **`.env.example` (Public):** Contains the variable names with dummy data. Committed to GitHub so other developers know what keys are needed.

**Example:**
```bash
# .env (On your computer - ignored by git)
API_KEY=real_secret_key_12345

# .env.example (On GitHub)
API_KEY=paste_your_key_here
```

## 4.7 The Build Process & Deployment

<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/eas_cloud_build_diagram.png" alt="EAS Build Workflow Diagram" width="100%">
  <br>
  <i>Figure: The EAS Cloud Build process.</i>
</p>
<br>

When we are ready to ship, we need to convert our JavaScript code into a binary file the phone can execute. We use **EAS (Expo Application Services)** for this.

### Build Artifact Types

| Platform    | Format   | Description                                                                                    |
| :---------- | :------- | :--------------------------------------------------------------------------------------------- |
| **Android** | **.apk** | **Android Package Kit.** Can be installed directly on a phone. Good for testing.               |
| **Android** | **.aab** | **Android App Bundle.** Optimized format for the Play Store. Cannot be installed directly.     |
| **iOS**     | **.ipa** | **iOS App Store Package.** Requires a provisioning profile/Apple Developer account to install. |

### The Deployment Workflow (EAS)

1.  **Install CLI:** `npm install -g eas-cli`
2.  **Login:** `eas login` (Connects your terminal to your Expo account)
3.  **Configure:** `eas build:configure` (Creates `eas.json`)
4.  **Build:**
    * **Preview (APK):** `eas build -p android --profile preview`
    * **Production (AAB):** `eas build -p android --profile production`

## 4.8 Maintenance & Health Checks

Mobile development environments are fragile. Over time, dependencies may become incompatible, or configurations may break as new OS versions are released. Expo provides a built-in diagnostic tool to ensure your development environment is healthy.

### Expo Doctor
The `expo-doctor` command is your first line of defense when troubleshooting strange errors.

**Command:**
```bash
npx expo-doctor
```

**What this command checks:**
* **SDK Compatibility:** Ensures all installed packages (like `expo-camera`, `expo-location`) match your specific Expo SDK version. Mismatched versions are the #1 cause of crashes.
* **Package.json Issues:** Checks for duplicate dependencies or invalid configurations in your project file.
* **Native Project Config:** Verifies that your android/ios folders (if present) are correctly linked and configured.
* **Global CLI Version:** Checks if your global Expo CLI is up to date.

> **Pro Tip:** Run this command whenever you encounter strange build errors, before upgrading your Expo SDK version, or if you clone an old project from GitHub.
>
> ---

<br/>
<p align="center">
  <b>End of Module</b><br>
  <i>Congratulations on completing the Advanced Mobile Application Development theoretical component!</i>
</p>