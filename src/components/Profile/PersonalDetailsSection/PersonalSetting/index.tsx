const PersonalSetting = () => {
  return (
    <div className="col-span-3 bg-white rounded-lg shadow-sm p-6">
      <h5 className="font-bold text-xl">Cài đặt tài khoản</h5>
      <div className="p-4 border-gray-200 rounded-lg border flex items-center gap-4 mt-4">
        <div className="p-4 rounded-lg bg-gray-100 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10 21h4a2 2 0 0 1-2 2a2 2 0 0 1-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-4-8a5 5 0 0 0-5-5a5 5 0 0 0-5 5v7h10zm2.75-7.81l-1.42 1.42A8.98 8.98 0 0 1 21 11h2c0-2.93-1.16-5.75-3.25-7.81M1 11h2c0-2.4.96-4.7 2.67-6.39L4.25 3.19A10.96 10.96 0 0 0 1 11"
            />
          </svg>
        </div>
        <div className="space-y-1">
          <h5 className="font-medium text-gray-800">Thông báo</h5>
          <p className="text-sm text-gray-600">Quản lý thông báo và email</p>
        </div>
        <div className="ml-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-gray-500"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 border-gray-200 rounded-lg border flex items-center gap-4 mt-4">
        <div className="p-4 rounded-lg bg-gray-100 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.1 15h1.8q.225 0 .388-.187t.112-.413l-.475-2.625q.5-.25.788-.725T14 10q0-.825-.587-1.412T12 8t-1.412.588T10 10q0 .575.288 1.05t.787.725L10.6 14.4q-.05.225.113.413T11.1 15m.9 6.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.637T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9m0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"
            />
          </svg>
        </div>
        <div className="space-y-1">
          <h5 className="font-medium text-gray-800">Bảo mật</h5>
          <p className="text-sm text-gray-600">
            Đổi mật khẩu và xác thực 2 lớp
          </p>
        </div>
        <div className="ml-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-gray-500"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 border-gray-200 rounded-lg border flex items-center gap-4 mt-4">
        <div className="p-4 rounded-lg bg-gray-100 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="13" height="9.5" x=".5" y="2.25" rx="1" />
              <path d="M.5 5.75h13m-4 3.5H11" />
            </g>
          </svg>
        </div>
        <div className="space-y-1">
          <h5 className="font-medium text-gray-800">Phương thức thanh toán</h5>
          <p className="text-sm text-gray-600">Quản lý thẻ và tài khoản</p>
        </div>
        <div className="ml-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-gray-500"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 border-gray-200 rounded-lg border flex items-center gap-4 mt-4">
        <div className="p-4 rounded-lg bg-gray-100 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24 4.5c-8.185 0-14.82 6.635-14.82 14.82h0v1.08c.6 8.12 7.34 14.65 14.82 23.1c7.81-8.82 14.82-15.5 14.82-24.18h0C38.82 11.135 32.185 4.5 24 4.5m10 14.83c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10m-4.05-3.906a2.044 2.044 0 1 1-4.089 0a2.044 2.044 0 0 1 4.09 0"
            />
          </svg>
        </div>
        <div className="space-y-1">
          <h5 className="font-medium text-gray-800">Địa chỉ giao hàng</h5>
          <p className="text-sm text-gray-600">Quản lý sổ địa chỉ</p>
        </div>
        <div className="ml-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-gray-500"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default PersonalSetting;
