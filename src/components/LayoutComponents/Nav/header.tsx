import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton, Link, Drawer } from "@mui/material";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav>
      <div className="mx-auto flex flex-row justify-between items-center border-b border-slate-50">
        <div className="flex flex-row gap-4">
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </div>
        <ul className="hidden sm:flex flex-row gap-5">
          <li>
            <Link underline="none" href="/">
              <h3 className=" text-slate-50">HOME</h3>
            </Link>
          </li>
          <li>
            <Link underline="none" href="/content/games">
              <h3 className=" text-slate-50">GAMES</h3>
            </Link>
          </li>
          <li>
            <Link underline="none" href="/content/audios">
              <h3 className=" text-slate-50">AUDIOS</h3>
            </Link>
          </li>
          <li>
            <Link underline="none" href="/content/videos">
              <h3 className=" text-slate-50">VIDEOS</h3>
            </Link>
          </li>
          <li>
            <Link underline="none" href="/content/arts">
              <h3 className=" text-slate-50">ARTS</h3>
            </Link>
          </li>
          <li>
            <Link underline="none" href="/content/movies">
              <h3 className=" text-slate-50">MOVIES</h3>
            </Link>
          </li>
        </ul>
        <div className="flex flex-row gap-5 items-center">
          <Link href="/">
            <IconButton>
              <ShoppingBagIcon fontSize="large" />
            </IconButton>
          </Link>
        </div>
      </div>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ padding: 0 }}
      >
        <div className="p-4 bg-[#1375c0] h-full">
          <ul className="flex flex-col gap-4">
            <li>
              <Link underline="none" href="/">
                <h3 className=" text-slate-50">HOME</h3>
              </Link>
            </li>
            <li>
              <Link underline="none" className="" href="/content/games">
                <h3 className=" text-slate-50">GAMES</h3>
              </Link>
            </li>
            <li>
              <Link underline="none" className="" href="/content/audios">
                <h3 className=" text-slate-50">AUDIOS</h3>
              </Link>
            </li>
            <li>
              <Link underline="none" className="" href="/content/videos">
                <h3 className=" text-slate-50">VIDEOS</h3>
              </Link>
            </li>
            <li>
              <Link underline="none" className="" href="/content/arts">
                <h3 className=" text-slate-50">ARTS</h3>
              </Link>
            </li>
            <li>
              <Link underline="none" className="" href="/content/movies">
                <h3 className=" text-slate-50">MOVIES</h3>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </nav>
  );
}
