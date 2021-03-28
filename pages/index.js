import AppHead from '../components/AppHead';
import { Header } from '../components';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <AppHead title="Accueil"/>
      <Header/>
      <Link href="/login">Go to login page</Link>
    </>
  );
}
