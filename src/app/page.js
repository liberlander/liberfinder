import Image from "next/image";
import styles from "./page.module.css";
import Main from '@/components/Main'
import ContentProvider from '@/context/ContentProvider'

export default function Home() {
  return (
    <ContentProvider>
      <Main />
    </ContentProvider>
  );
}
