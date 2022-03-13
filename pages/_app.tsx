import '../styles/Globals.css'
import Header from './header/Layout'
import type { AppProps } from 'next/app'
import { FC } from "react";
import { EmotionCache } from "@emotion/react";
import PageProvider from "../src/components/helpers/PageProvider";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <Header>
    <Component {...pageProps} />
    </Header>
  </PageProvider>
);

export default MyApp;
