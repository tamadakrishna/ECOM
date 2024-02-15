import SideMenu from "@/components/layouts/SideMenu";
{/* <Sidebar /> */}

export default function UserLayout({ children }) {
  return (
    <>
      <div className="mobile:w-[100vw] h-[calc(100vh_-_60px)] bg-gray-100 mobile:p-[3px]">
        <div className="mobile:w-[100%] h-[30px] ">
          <SideMenu/>
        </div>
        <div className="mobile:w-[100%] mobile:h-[calc(100%_-_30px)] ">
          {children}
        </div>
      </div>
    </>
  );
}