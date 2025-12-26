# WebTech - Frontend Application

Một ứng dụng Next.js TypeScript hiện đại với Tailwind CSS, React Query, và nhiều công cụ UI mạnh mẽ. Đây là phần frontend của hệ thống WebTech E-commerce.

## 📋 Yêu cầu hệ thống

- **Node.js**: phiên bản 18.x hoặc cao hơn
- **npm**: phiên bản 9.x hoặc cao hơn (hoặc yarn, pnpm)
- **Backend**: BE_WebTech chạy trên `http://localhost:3000`

## 🚀 Cài đặt

### 1. Điều hướng đến thư mục dự án

```bash
cd WebTech
```

### 2. Cài đặt các package phụ thuộc

```bash
npm install
```

Hoặc nếu bạn sử dụng yarn:

```bash
yarn install
```

### 3. Cấu hình biến môi trường (tuỳ chọn)

Tạo file `.env.local` trong thư mục gốc của dự án (nếu cần custom API endpoint):

```env
# API Backend URL
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Các biến khác nếu cần
```

**Lưu ý:**
- `.env.local` là file mặc định cho Next.js development
- Prefix `NEXT_PUBLIC_` để biến được accessible từ browser
- File này không cần thiết nếu backend chạy ở `http://localhost:3000` (default)

## 🏃 Chạy ứng dụng

### Chế độ phát triển (Development)

```bash
npm run dev
```

hoặc

```bash
yarn dev
```

Server sẽ chạy trên: `http://localhost:3002`

**Lưu ý**: Ứng dụng được cấu hình chạy trên port 3002 để tránh xung đột với backend (port 3000).

Khi chạy, bạn sẽ thấy:

```
  ▲ Next.js 16.0.10
  - Local:        http://localhost:3002
  - Environments: .env.local
```

### Build cho production

```bash
npm run build
```

### Chạy ứng dụng đã build (Production mode)

```bash
npm start
```

### Kiểm tra ESLint

```bash
npm run lint
```

## 📁 Cấu trúc dự án

```
WebTech/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── admin/             # Admin pages
│   │   ├── auth/              # Authentication pages (login, register)
│   │   ├── cart/              # Shopping cart pages
│   │   ├── checkout/          # Checkout pages
│   │   ├── listproduct/       # Product listing pages
│   │   ├── products/          # Product detail pages
│   │   └── ...
│   ├── components/            # Reusable React components
│   ├── services/              # API services & business logic
│   ├── providers/             # React providers (Context, Query, etc.)
│   ├── utils/                 # Utility functions
│   └── proxy.ts              # Proxy configuration
├── public/                    # Static assets
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.mjs        # PostCSS configuration
├── eslint.config.mjs         # ESLint configuration
├── .env.local                # Environment variables (tạo nếu cần)
└── README.md                 # This file
```

## 🔧 Công nghệ & Dependencies chính

### Framework & Core
- **Next.js** (v16.0.10) - React framework với SSR/SSG
- **React** (v18.3.1) - UI library
- **TypeScript** (v5) - Type safety

### Styling
- **Tailwind CSS** (v4) - Utility-first CSS framework
- **PostCSS** (v4) - CSS processing

### Data Management & Fetching
- **React Query** (@tanstack/react-query v5.90.12) - Server state management
- **Axios** (v1.13.2) - HTTP client

### UI Components & Libraries
- **Swiper** (v12.0.3) - Carousel/slider component
- **React Multi Carousel** (v2.8.5) - Another carousel option
- **Emoji Mart** (v5.6.0) - Emoji picker
- **React Toastify** (v11.0.5) - Toast notifications

### Authentication
- **JWT Decode** (v4.0.0) - Decode JWT tokens

### Development
- **ESLint** (v9) - Code linting
- **Babel React Compiler** - React optimization compiler

## 🔗 Kết nối Backend

Ứng dụng frontend kết nối với backend BE_WebTech thông qua API calls.

**Endpoint mặc định**: `http://localhost:3000/api`

Các API endpoints chính:
- `/users` - Quản lý người dùng
- `/products` - Sản phẩm
- `/categories` - Danh mục
- `/brands` - Thương hiệu
- `/cart` - Giỏ hàng
- `/orders` - Đơn hàng
- `/payments` - Thanh toán
- `/reviews` - Đánh giá
- `/vouchers` - Khuyến mãi

## 📝 Phát triển

### Tạo component mới

Thêm component vào `src/components/` và import vào page cần dùng.

### Tạo page mới

Next.js sử dụng file-based routing. Tạo thư mục con trong `src/app/` và thêm `page.tsx` để tạo route mới.

**Ví dụ**:
```
src/app/my-feature/page.tsx → /my-feature
src/app/my-feature/detail/page.tsx → /my-feature/detail
```

### Sử dụng API Services

Tạo các service functions trong `src/services/` để gọi API, rồi dùng React Query để fetch data:

```typescript
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/productService';

export default function ProductPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  // ...
}
```

## 🐛 Troubleshooting

### Port 3002 đang bị sử dụng

```bash
# Thay đổi port khi chạy dev
npm run dev -- -p 3003
```

Hoặc kill process sử dụng port 3002.

### Module không tìm thấy

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Build fails

1. Kiểm tra TypeScript errors:
```bash
npx tsc --noEmit
```

2. Kiểm tra ESLint errors:
```bash
npm run lint
```

### Backend connection issues

1. Đảm bảo backend (BE_WebTech) đang chạy trên port 3000
2. Kiểm tra CORS configuration trong `src/proxy.ts`
3. Kiểm tra `.env.local` có API URL đúng không

## 🚀 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Connect repository trên [vercel.com](https://vercel.com)
3. Vercel sẽ tự động deploy khi push code

### Docker

Tạo `Dockerfile` để containerize ứng dụng:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build & run:
```bash
docker build -t webtech-frontend .
docker run -p 3002:3000 webtech-frontend
```

## 📚 Tài liệu hữu ích

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Query](https://tanstack.com/query)
- [TypeScript](https://www.typescriptlang.org)

## 📖 Cấu hình nâng cao

### Path Aliases

TypeScript được cấu hình với alias `@/*` trỏ tới `src/*`. Sử dụng:

```typescript
// ✅ Tốt
import Button from '@/components/Button';

// ❌ Tránh
import Button from '../../../components/Button';
```

### React Compiler

Ứng dụng sử dụng React Compiler để tối ưu hóa hiệu năng. Được cấu hình trong `next.config.ts`.

## 🎯 Next Steps

1. **Cài đặt**: Chạy `npm install`
2. **Khởi động backend**: Chạy `npm start` trong BE_WebTech
3. **Khởi động frontend**: Chạy `npm run dev`
4. **Truy cập**: Mở `http://localhost:3002` trong browser

---

**Tên dự án**: techweb_dacntt  
**Phiên bản**: 0.1.0  
**Tác giả**: WebTech Development Team

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
