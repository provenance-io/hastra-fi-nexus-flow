// CustomWalletModalContext.jsx
import { createContext, useState, useContext } from "react";

const HastraWalletConnectContext = createContext<
  | {
      setVisible: React.Dispatch<React.SetStateAction<boolean>>;
      visible: boolean;
    }
  | undefined
>(undefined);

export function HastraWalletModalProvider({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <HastraWalletConnectContext.Provider value={{ visible, setVisible }}>
      {children}
    </HastraWalletConnectContext.Provider>
  );
}

export const useHastraWalletConnectModal = () =>
  useContext(HastraWalletConnectContext);
