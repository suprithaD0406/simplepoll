import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { flareTestnetCoston2, sepolia } from './config';

export const config = getDefaultConfig({
  appName: "simplepoll",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "YOUR_WALLETCONNECT_PROJECT_ID",
  chains: [flareTestnetCoston2, sepolia],
  ssr: true,
});
