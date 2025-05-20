interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className='min-h-dvh'>
      <main className='flex min-h-[90dvh] w-full flex-col items-center justify-center'>
        {children}
      </main>
    </div>
  );
};
export default Layout;
