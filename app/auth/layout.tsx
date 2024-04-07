const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center p-6">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
