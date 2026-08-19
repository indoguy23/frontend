import { useState } from "react";

import { LogOut, Settings, User } from "lucide-react";

import Navbar from "@/components/common/Navbar";
import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import DropdownMenu from "@/components/ui/DropdownMenu";
import { MAIN_NAVIGATION } from "@/constants/navigation";
import { showToast } from "@/components/ui/Toast";

const NavbarPlayground = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="border-b border-border p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-card-foreground">
          Navbar Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Responsive marketplace navigation with search, cart, wishlist, theme
          and account controls.
        </p>
      </div>

      <Navbar
        links={MAIN_NAVIGATION}
        searchValue={search}
        onSearchChange={setSearch}
        cartCount={3}
        wishlistCount={5}
        onCartClick={() => showToast.info("Opening cart.")}
        onWishlistClick={() => showToast.info("Opening wishlist.")}
        userMenu={
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="ghost" className="h-10 gap-2 px-2">
                <Avatar alt="Aryan Dewangan" fallback="AD" size="sm" />

                <span className="hidden xl:inline">Aryan</span>
              </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content align="end">
              <DropdownMenu.Label>My Account</DropdownMenu.Label>

              <DropdownMenu.Separator />

              <DropdownMenu.Item>
                <User className="h-4 w-4" />
                Profile
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Settings className="h-4 w-4" />
                Settings
              </DropdownMenu.Item>

              <DropdownMenu.Separator />

              <DropdownMenu.Item destructive>
                <LogOut className="h-4 w-4" />
                Sign Out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        }
      />

      <div className="p-6 sm:p-8">
        <p className="text-sm text-muted-foreground">
          Current search:{" "}
          <strong className="text-foreground">{search || "Empty"}</strong>
        </p>
      </div>
    </section>
  );
};

export default NavbarPlayground;
