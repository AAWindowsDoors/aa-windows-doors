import Navbar from './Navbar'
import Footer from './Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar dark />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}
