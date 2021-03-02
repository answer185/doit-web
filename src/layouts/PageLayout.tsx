import { Header, Footer } from '@/components/common';

export default ({ children }: { children: any }) => {
  return (<div>
    <Header />
    {children}
    <Footer />
  </div>)
}