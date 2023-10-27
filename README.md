# Task Management

## Frontend 
#### Technologies In This Application
- Vite As Module Bundler
- React As Ui Library
- Typescript For Type Safety
- RTK QUERY For State Management And Api Wapper
- TailwindCss As CSS Utilities
- React Hook Form For Managing Form
- Zod For Input Validation
- React Router Dom Dor Manage Multiple Pages

#### Folder Structure
- Common : 
   - UI : The Folder That Implement Some Kit
   - Components : The Folder That All Files Use Multiple UI Kit
- Features : 
   - tasks : The Api Service And Cache Object For Tasks Resource
   - baseApi: The Base Config Of Rtk Query That Every Resource Must Use
- Layouts:
   - AppLayout: The Layout That Implement Base Structure Of The Page
- Lib: 
   - This Folder Use To Configure Some External Packages
   - Notification Alert: Configure Notification Alert For Using Across App
- Pages:
   - This Folder Contains Everything That Related To Specefic Part and Are Not Common Between Files Or Components
   - For Better Manage We Decide To Store These Parts All Of Togheter along with Their Page
- Routes:
   - This Folder Includes All Routes And Links Path
- Types:
   - This Folder Use To Hold All Global Types

## Backend
#### Technologies In This Application
- Nodejs As Javascript RunTime
- Express As Request Handler For Backend
- In Memory Database


## Now How Can I See Result ?
- You Must Just Run **npm install**
- After Installing Node Modules Run **npm start**
- This Command Go And Install Node Modules Of Client And Server And After That Run Each Other Behind The Scenes

## Publisher
- Author : **Hosein Ladmakhi**
- Date : **10/27/2023**
- Company : **GTII**