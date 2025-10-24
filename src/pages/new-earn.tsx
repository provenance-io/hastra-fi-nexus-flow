import { AccountPage } from "@/components/new/new-earn/account-page";
import { Login } from "@/components/new/new-earn/login";
import { useWallet } from "@/contexts/WalletContext";
import { match } from "ts-pattern";

export const NewEarn = () => {
  const { isConnected, connectWallet } = useWallet();

  const handleConnectWallet = async () => {
    if (!isConnected) {
      await connectWallet();
    } else {
      // Scroll to dashboard section if already connected
      const dashboardSection = document.querySelector(
        '[data-section="wallet-dashboard"]'
      );
      if (dashboardSection) {
        dashboardSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return match(isConnected)
    .with(true, () => <AccountPage />)
    .otherwise(() => <Login handleConnectWallet={handleConnectWallet} />);
};
