//Componnets
import Navbar from "@/components/Navbar";

export default function Private({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
