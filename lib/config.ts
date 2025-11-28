// Not explicitly typing the custom chain to avoid mismatch with the version of `wagmi` types

export const flareTestnetCoston2 = {
  id: 114,
  name: "Coston2",
  nativeCurrency: { name: "C2", symbol: "C2", decimals: 18 },
  rpcUrls: { default: { http: ["https://coston2-api.flare.network/ext/C/rpc"] } },
  blockExplorers: { default: { name: "Coston2 Explorer", url: "https://coston2-explorer.flare.network" } },
  testnet: true,
};

export { sepolia } from "wagmi/chains";
