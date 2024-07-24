function Navbar() {
  return (
    <div className="flex flex-row w-full justify-between px-5 py-3 font-bold bg-slate-400 shadow-lg">
      <h2 className="text-base">^~^</h2>
      <div className="flex flex-row gap-5">
        <a href="#home"> Home</a>
        <a href="#summary">Summary</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </div>
    </div>
  );
}

export default Navbar;
