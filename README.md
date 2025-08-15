# Admin Dashboard Pro (Next.js + MUI)

A modern, responsive admin dashboard built with **Next.js 15**, **Material UI (MUI)**, and **Recharts**. Includes charts, statistics, recent orders, top products, and a team members sidebar with a clean glassmorphism design.

---

## ✨ Features

- **Responsive Layout** – Works seamlessly on desktop, tablet, and mobile.
- **MUI v7 Components** – Built using the latest Material UI design system.
- **Glassmorphism UI** – Soft, modern, frosted glass effect for key cards and components.
- **Charts & Analytics** – Interactive charts with `recharts` for:
  - Weekly Active Users
  - Average Spend by Day
  - Mini Pie Chart for category breakdowns
- **Data Displays** – Top Products list and Recent Orders table.
- **Sidebar Navigation** – Quick links to key dashboard areas.
- **Team Members Sidebar** – View employees with contact details from Teams, Slack, or Zoom.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── StatCards.tsx
│   ├── WeeklyUsersChart.tsx
│   ├── SpendByDayChart.tsx
│   ├── MiniPieChart.tsx
│   ├── TopProducts.tsx
│   ├── RecentOrders.tsx
│   └── TeamMemberCard.tsx
├── app/
│   └── page.tsx  # Main dashboard layout
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Run Development Server
```bash
npm run dev
# or
yarn dev
```
Then open **http://localhost:3000** in your browser.

---

## 🛠️ Customization

### Theme
You can adjust the theme by editing MUI’s theme provider setup in `_app.tsx` or using the `sx` prop in components.

### Charts
Charts use [Recharts](https://recharts.org/en-US/), so you can:
- Replace mock data with API data.
- Change chart type (Bar, Line, Pie, etc.).
- Customize colors & styles via props.

### Glassmorphism
Applied via MUI’s `sx` prop:
```ts
background: "rgba(255, 255, 255, 0.15)",
backdropFilter: "blur(12px)",
border: "1px solid rgba(255, 255, 255, 0.18)"
```
You can adjust opacity, blur amount, and border style to fit your design.

---

## 📦 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI Library:** [Material UI v7](https://mui.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Language:** TypeScript

---

## 📌 Roadmap Ideas

- 🔄 Replace mock data with live API integration.
- 🌙 Dark mode toggle.
- 📊 More advanced analytics pages.
- 📱 Mobile menu for sidebar.

---

## 📄 License

This dashboard is provided as a **template** and can be modified for personal or commercial use.
