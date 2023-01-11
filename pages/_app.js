import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Link from 'next/link';
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Link href="/">
      <Component {...pageProps} /></Link>
    </ThirdwebProvider>
  );
}

export default MyApp
